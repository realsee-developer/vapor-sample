import { FC, Fragment, useRef, useContext, useCallback, createContext, createElement, ReactNode } from 'react';
import { createListener, Listener } from './listener';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';
import { useUpdate } from './use-update';

type PickValue<T> = Omit<T, { [Key in keyof T]-?: T[Key] extends Function ? Key : never }[keyof T]>;

interface GetState<T> {
  (): Readonly<T>;
}

interface SetState<T> {
  (partialState: Partial<PickValue<T>>): void;
  (setter: (state: PickValue<T>) => Partial<PickValue<T>>): void;
}

interface StoreContextValue<T> {
  onChange: (fn: () => void) => () => void;
  getState: GetState<T>;
  setState: SetState<T>;
}

interface UseStore<T> {
  <P>(selector: (state: T) => P): P;
}

type StoreProvider = FC<{ children?: ReactNode | undefined }>;

function store<T extends object>(initializer: (set: SetState<T>, get: GetState<T>) => T): [Provider: StoreProvider, useStore: UseStore<T>] {

  const Context = createContext<StoreContextValue<T>>({} as StoreContextValue<T>);

  const Provider: FC<{ children?: ReactNode | undefined }> = ({ children }) => {

    const stateRef = useRef<T>();
    const initializedRef = useRef<boolean>(false);
    const listenerRef = useRef<Listener<[]>>();

    if (!listenerRef.current) {
      listenerRef.current = createListener<[]>();
    }
    const listener = listenerRef.current;

    const onChange = useCallback((fn: () => void) => listener.on(fn), [listener]);

    const getState: GetState<T> = useCallback((): Readonly<T> => {
      if (!initializedRef.current) {
        throw new Error('getState is not available during initialization.');
      }
      return stateRef.current!;
    }, []);

    const setState: SetState<T> = useCallback((valueOrSetter) => {
      if (!initializedRef.current) {
        throw new Error('setState is not available during initialization.');
      }
      const nextState = typeof valueOrSetter === 'function' ? valueOrSetter(getState()) : valueOrSetter;

      for (const key of Object.keys(nextState)) {
        //@ts-ignore
        if (nextState[key] === undefined) continue;
        //@ts-ignore
        state[key] = nextState[key];
      }
      listener.emit();
    }, [listener, getState]);

    const state = initializer(setState, getState);

    if (initializedRef.current === false) {
      stateRef.current = state;
      initializedRef.current = true;
    }

    return createElement(Context.Provider, { value: { onChange, getState, setState } }, children);
  };

  const useStore: UseStore<T> = <P>(selector: (state: T) => P): P => {
    const update = useUpdate();
    const { getState, onChange } = useContext(Context);
    useIsomorphicLayoutEffect(() => onChange(update), []);
    return selector(getState());
  };

  return [Provider, useStore];
}

function compose(...Providers: StoreProvider[]): StoreProvider {
  const Composed: StoreProvider = ({ children }) => {
    return Providers.reduce((element, Provider) => {
      return createElement(Provider, {}, element);
    }, createElement(Fragment, {}, children));
  };
  return Composed;
}

export { store, compose, GetState, SetState, UseStore, StoreProvider, PickValue };