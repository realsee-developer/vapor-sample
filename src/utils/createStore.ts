/**
 * 轻量级状态管理工具
 *
 * 本模块提供了基于 React Context API 的简易状态管理解决方案
 * 支持创建独立的状态存储并组合多个存储
 */
import { createContext, createElement, FC, Fragment, ReactNode, useCallback, useContext, useRef } from 'react';
import { createListener, Listener } from './listener';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';
import { useUpdate } from './use-update';

/**
 * 从对象类型中提取非函数属性
 * 用于确保只能更新状态中的数据属性，而不是方法
 */
type PickValue<T> = Omit<T, { [Key in keyof T]-?: T[Key] extends Function ? Key : never }[keyof T]>;

/**
 * 获取状态函数类型
 * 返回当前状态的只读快照
 */
interface GetState<T> {
  (): Readonly<T>;
}

/**
 * 更新状态函数类型
 * 支持两种方式更新状态：
 * 1. 直接传入部分状态对象
 * 2. 传入函数，接收当前状态并返回部分更新
 */
interface SetState<T> {
  (partialState: Partial<PickValue<T>>): void;
  (setter: (state: PickValue<T>) => Partial<PickValue<T>>): void;
}

/**
 * Store Context 值类型
 * 包含状态变更订阅、获取状态和设置状态的方法
 */
interface StoreContextValue<T> {
  /** 订阅状态变更的方法 */
  onChange: (fn: () => void) => () => void;
  /** 获取当前状态 */
  getState: GetState<T>;
  /** 更新状态 */
  setState: SetState<T>;
}

/**
 * 使用 Store 的 Hook 类型
 * 接受选择器函数，从状态中提取需要的部分
 */
interface UseStore<T> {
  <P>(selector: (state: T) => P): P;
}

/**
 * Store Provider 组件类型
 * 为子组件提供状态上下文
 */
type StoreProvider = FC<{ children?: ReactNode | undefined }>;

/**
 * 创建状态存储
 *
 * @param initializer 初始化函数，接收 setState 和 getState 函数，返回初始状态
 * @returns 包含 Provider 组件和 useStore hook 的元组
 *
 * @example
 * ```tsx
 * // 创建计数器 Store
 * const [CounterProvider, useCounter] = store((set) => ({
 *   count: 0,
 *   increment: () => set((state) => ({ count: state.count + 1 })),
 *   decrement: () => set((state) => ({ count: state.count - 1 }))
 * }));
 *
 * // 使用 Store
 * function Counter() {
 *   const { count, increment } = useCounter(state => state);
 *   return <button onClick={increment}>{count}</button>;
 * }
 *
 * // 在应用中提供 Store
 * function App() {
 *   return (
 *     <CounterProvider>
 *       <Counter />
 *     </CounterProvider>
 *   );
 * }
 * ```
 */
function store<T extends object>(initializer: (set: SetState<T>, get: GetState<T>) => T): [Provider: StoreProvider, useStore: UseStore<T>] {
  // 创建 Context 用于传递状态和操作
  const Context = createContext<StoreContextValue<T>>({} as StoreContextValue<T>);

  /**
   * Provider 组件
   * 初始化状态并提供上下文
   */
  const Provider: FC<{ children?: ReactNode | undefined }> = ({ children }) => {
    // 存储状态的引用
    const stateRef = useRef<T>();
    // 标记是否已初始化
    const initializedRef = useRef<boolean>(false);
    // 存储事件监听器的引用
    const listenerRef = useRef<Listener<[]>>();

    // 确保监听器只创建一次
    if (!listenerRef.current) {
      listenerRef.current = createListener<[]>();
    }
    const listener = listenerRef.current;

    /**
     * 注册状态变更监听函数
     * 返回取消监听的函数
     */
    const onChange = useCallback((fn: () => void) => listener.on(fn), [listener]);

    /**
     * 获取当前状态
     * 在初始化完成前不可用
     */
    const getState: GetState<T> = useCallback((): Readonly<T> => {
      if (!initializedRef.current) {
        throw new Error('getState is not available during initialization.');
      }
      return stateRef.current!;
    }, []);

    /**
     * 更新状态
     * 支持部分更新或使用函数计算新状态
     * 在初始化完成前不可用
     */
    const setState: SetState<T> = useCallback((valueOrSetter) => {
      if (!initializedRef.current) {
        throw new Error('setState is not available during initialization.');
      }
      // 处理函数式更新和直接对象更新两种情况
      const nextState = typeof valueOrSetter === 'function' ? valueOrSetter(getState()) : valueOrSetter;

      // 更新状态中的每个属性
      for (const key of Object.keys(nextState)) {
        //@ts-ignore
        if (nextState[key] === undefined) continue;
        //@ts-ignore
        state[key] = nextState[key];
      }
      // 触发状态变更事件，通知所有订阅者
      listener.emit();
    }, [listener, getState]);

    // 调用初始化函数，获取初始状态
    const state = initializer(setState, getState);

    // 首次渲染时保存状态并标记为已初始化
    if (initializedRef.current === false) {
      stateRef.current = state;
      initializedRef.current = true;
    }

    // 创建 Provider 元素
    return createElement(Context.Provider, { value: { onChange, getState, setState } }, children);
  };

  /**
   * 使用状态的 Hook
   *
   * @param selector 选择器函数，从状态中提取所需部分
   * @returns 选择的状态部分
   */
  const useStore: UseStore<T> = <P>(selector: (state: T) => P): P => {
    const update = useUpdate();
    const { getState, onChange } = useContext(Context);
    // 订阅状态变更，在变更时触发重新渲染
    useIsomorphicLayoutEffect(() => onChange(update), []);
    // 使用选择器从状态中提取需要的部分
    return selector(getState());
  };

  return [Provider, useStore];
}

/**
 * 组合多个 Provider 组件为一个
 * 简化嵌套 Provider 的使用
 *
 * @param Providers 要组合的 Provider 组件列表
 * @returns 组合后的 Provider 组件
 *
 * @example
 * ```tsx
 * // 创建多个 Store
 * const [CounterProvider, useCounter] = store(...);
 * const [ThemeProvider, useTheme] = store(...);
 *
 * // 组合 Provider
 * const AppProvider = compose(CounterProvider, ThemeProvider);
 *
 * // 在应用中使用组合的 Provider
 * function App() {
 *   return (
 *     <AppProvider>
 *       <MyApp />
 *     </AppProvider>
 *   );
 * }
 * ```
 */
function compose(...Providers: StoreProvider[]): StoreProvider {
  const Composed: StoreProvider = ({ children }) => {
    // 使用 reduce 将所有 Provider 嵌套起来，从内到外
    return Providers.reduce((element, Provider) => {
      return createElement(Provider, {}, element);
    }, createElement(Fragment, {}, children));
  };
  return Composed;
}

export { compose, GetState, PickValue, SetState, store, StoreProvider, UseStore };

