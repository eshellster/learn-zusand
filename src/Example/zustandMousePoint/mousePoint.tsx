//https://codesandbox.io/s/zustand-subscribe-ouv3q

import React, { useState } from "react";

import create, { State, StateCreator } from "zustand";
import produce, { Draft } from "immer";

const immer =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState =
          typeof partial === "function"
            ? produce(partial as (state: Draft<T>) => T)
            : (partial as T);
        return set(nextState, replace);
      },
      get,
      api
    );

type StoreType = {
  readonly coords: number[];
  setCoords: (coords: number[]) => void;
};
const useStore = create<StoreType>(
  immer((set) => ({
    coords: [0, 0],
    setCoords: (coords: number[]) => set({ coords }),
  }))
);

const Coord = () => {
  const val = useStore((state) => state.coords);

  return <input readOnly value={val[0]} />;
};

const Coord2 = () => {
  // Connect to the store on mount, disconnect on unmount, catch state-changes in a callback
  const [value, setValue] = React.useState(0);
  React.useEffect(
    () =>
      useStore.subscribe(
        (coords: number[]) => {
          setValue(coords[1]);
        },
        (store) => store.coords
      ),
    []
  );
  return <input readOnly value={value} />;
};

export default function MousePoint() {
  const set = useStore((state) => state.setCoords);

  React.useEffect(() => {
    const handler = ({
      screenX,
      screenY,
    }: {
      screenX: number;
      screenY: number;
    }) => {
      set([screenX, screenY]);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [set]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Coord />
      <Coord2 />
    </div>
  );
}

/*
store.user.getUsers
  .invoke 
  .retry
  .abort?
  .current = 'pending' | 'success' | 'idle' 
  .context = values
  const { invoke, current, context } = useStore(store => store.users.getUsers)
  

  store.getUsers (context)
  store.getProducts (context)
  store.orderProducts (action)

  store.addUser (action/ optimistic context)
  store.updateUser (action/ optimistic context)
  store.removeUser (action/ optimistic context)
  
  store.cancelProduct (action)
  store.updateStyles (action/context)

  store.me (context)
  store.auth (action)

  store.users.get()
  store.users.add()
  store.users.update()
  store.users.remove()
  store.users.context = values
  store.users.current = 'pending' | 'success' | 'idle' 

  const [useStore, api] = create(set => ({ "0": [-10, 0], "1": [10, 5], ... }))

function Component({ id }) {
  // Fetch initial state
  const xy = useRef(api.getState()[id])
  // Connect to the store on mount, disconnect on unmount, catch state-changes in a callback
  useEffect(() => api.subscribe(coords => (xy.current = coords), state => state[id]), [id])
*/
