// https://www.youtube.com/watch?v=mPU9cFn7SmI
import React from "react";
import PokemonFilter from "./components/pokemonfiter";
import PokemonInfo from "./components/pokemonInfo";
import PokemonTable from "./components/pokemonTable";

export const Pokemon = () => {
  return (
    <div>
      <h1>Pokemon Search</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </div>
    </div>
  );
};
