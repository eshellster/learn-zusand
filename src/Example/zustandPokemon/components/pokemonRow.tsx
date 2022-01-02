import React from "react";
import { PokemonType } from "../store";

interface IProps {
  pokemon: PokemonType;
  onClick: (pokemon: PokemonType) => void;
}

const PokemonRow: React.FC<IProps> = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onClick(pokemon)}>More Information</button>
      </td>
    </tr>
  </>
);

export default PokemonRow;
