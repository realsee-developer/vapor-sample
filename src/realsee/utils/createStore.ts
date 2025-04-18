import React, { useState, useContext, FC, createContext } from 'react';

export type StoreContextType<T = any> = [T, React.Dispatch<React.SetStateAction<T>>];

export function createStore<T>(initialState: T) {
  const StoreContext = createContext<StoreContextType<T>>([
    initialState,
    () => initialState,
  ]);

  const Provider: FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const stateAndUpdater = useState<T>(initialState);
    return (
      <StoreContext.Provider value= { stateAndUpdater } >
      { children }
      </StoreContext.Provider>
    );
};

const useStore = () => {
  return useContext(StoreContext);
};

return { Provider, useStore };
}

type AnyFC = FC<any>;
export function compose(...Components: AnyFC[]) {
  return ({ children }: React.PropsWithChildren<{}>) => {
    return (
      <>
      {
        Components.reduceRight(
          (child, Component) => {
            return <Component>{ child } </Component>;
          },
          children
        )
      }
      </>
    );
  };
}
