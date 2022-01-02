import React from "react";

import useStore from "../store";

const PokemonFilter = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(evt) => setFilter(evt.target.value)}
      style={{ marginLeft: "1rem" }}
    />
  );
};

export default PokemonFilter;
