import React, { createContext, useContext, useReducer } from 'react';
import { Dispatch, FunctionComponent, ReactNode } from 'react';

export interface State<T> {
  data?: T | null;
}

export type GenericState = State<any>;
export type Reducer<T> = [T, Dispatch<T>];
export type ReducerFunc<T, R> = (previousState: T, action: R) => T;

export interface RouteProvider<T> {
  reducer: ReducerFunc<T, T>;
  initialState: T;
  children: ReactNode;
}

export interface Store<T> {
  PageStoreContextProvider: FunctionComponent<RouteProvider<T>>;
  useCustomState: () => Reducer<T>;
  reducer: ReducerFunc<T, T>;
}

/**
 * @description
 *   initStore provides all the boilerplate code to setup route based providers
 *   using react hooks and context. This method essentially replaces mobx and
 *   redux as application state management solutions.
 *
 * @return {Store<T>}
 *
 */
export function initStore<T>(): Store<T> {
  const PageStoreContext = createContext<Partial<T | Reducer<T>>>({});
  PageStoreContext.displayName = 'PageStoreContext';

  const store: Store<T> = {
    PageStoreContextProvider: ({
      reducer,
      initialState,
      children
    }: RouteProvider<T>): JSX.Element => (
      <PageStoreContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </PageStoreContext.Provider>
    ),
    useCustomState: (): Reducer<T> => useContext(PageStoreContext) as Reducer<T>,
    reducer: (prev: T, next: T) => Object.assign({}, prev, next)
  };
  store.PageStoreContextProvider.displayName = 'PageStoreContext';
  return store;
}
