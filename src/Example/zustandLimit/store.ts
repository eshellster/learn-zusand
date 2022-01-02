import create from "zustand";

type TodoState = {
  dollars: number;
  broke: boolean;
  increaseDollars: () => void;
  decreaseDollars: () => void;
  setBroke: (input: boolean) => void;
};

const useStore = create<TodoState>((set) => ({
  dollars: 0,
  broke: false,
  increaseDollars: () => set((state) => ({ dollars: state.dollars + 1 })),
  decreaseDollars: () => set((state) => ({ dollars: state.dollars - 1 })),
  setBroke: () => set((state) => ({ broke: !state.broke })),
}));

const useCountryStore = create(() => ({
  country: "US",
}));

const unsubcribe = useStore.subscribe(
  (newValue, oldValue) => {
    console.log("previous value was: " + oldValue);
    console.log("New value: " + newValue);
  },
  (state) => state.dollars
);

export { useStore, useCountryStore, unsubcribe };
