import create from "zustand";
import pokemonData from "./pokemon.json";

export type PokemonType = {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: { [key: string]: number };
};

type StoreType = {
  readonly pokemon: PokemonType[];
  readonly filter: string;
  readonly selectedPokemon: PokemonType | null;
  setPokemon: (pokemon: PokemonType[]) => void;
  setFilter: (filter: string) => void;
  setSelectedPokemon: (selectedPokemon: PokemonType) => void;
};

const useStore = create<StoreType>((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({ ...state, selectedPokemon })),
}));

useStore.setState((state) => ({ ...state, pokemon: pokemonData }));

export default useStore;
