import React from "react";
import MousePoint from "./Example/zustandMousePoint/mousePoint";
// import { Limit } from "./states/zustandLimit/limit";
import { Planets } from "./Example/zustandPlants/planets";
import { Pokemon } from "./Example/zustandPokemon/pokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Limit /> */}
        <Planets />
        {/* <Pokemon /> */}
        {/* <MousePoint /> */}
      </header>
    </div>
  );
}

export default App;
