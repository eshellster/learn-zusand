// https://dev.to/emmanuilsb/stop-overcomplicating-your-state-try-zustand-39p4
import React, { useEffect } from "react";
import { Planet } from "./components/planet";
import { useStore } from "./stores/store";
import "./planets.css";
import shallow from "zustand/shallow";
import SearchPage from "./components/searchPage";

export const Planets = () => {
  /* 낱개로 가져오기  
  // const planetNames = useStore((state) => state.planets);
  // const setPlanetNames = useStore((state) => state.setPlanets);
  //*/
  /* 어레이로 가져오기  
  const [planets, getPlanets] = useStore(
    (state) => [state.planets, state.getPlanets],
    shallow
  );
  //*/
  //* 오브젝트로 가져오기
  const { planets, getPlanets } = useStore(
    (state) => ({ planets: state.planets, getPlanets: state.getPlanets }),
    shallow
  );
  //*/
  //*/ Mapped로 가져오기
  //*/

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);
  return (
    <div className="main">
      <SearchPage />
      <h1>Planets of Start Wars </h1>
      <ul data-testid="planets-list">
        {planets.map((planet: any) => (
          <li
            key={planet.name}
            data-testid={`planet-${planet.name}`}
            style={{ listStyle: "none" }}
          >
            <Planet planet={planet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// * PRE SLICE STORE:
// export const useStore = create<StoreType>(
//     devtools(
//         immer((set, get) => ({
//             infoNamesArr: [],
//             infoDict: {},
//             planetNames: [],
//             populateWithAPI: async () => {
//                 let tempInfoNamesArr: string[] = [];
//                 let tempInfoDict: any = {};

//                 const [peopleDataRaw, planetsDataRaw, speciesDataRaw] =
//                     await Promise.all([
//                         await fetch("https://swapi.dev/api/people"),
//                         await fetch("https://swapi.dev/api/planets"),
//                         await fetch("https://swapi.dev/api/species"),
//                     ]);
//                 const [peopleData, planetsData, speciesData] =
//                     await Promise.all([
//                         await peopleDataRaw.json(),
//                         await planetsDataRaw.json(),
//                         await speciesDataRaw.json(),
//                     ]);

//                 peopleData.results.forEach((data: any) => {
//                     tempInfoNamesArr.push(data.name);
//                     tempInfoDict[data.name] = data;
//                 });
//                 planetsData.results.forEach((data: any) => {
//                     tempInfoNamesArr.push(data.name);
//                     tempInfoDict[data.name] = data;
//                 });
//                 speciesData.results.forEach((data: any) => {
//                     tempInfoNamesArr.push(data.name);
//                     tempInfoDict[data.name] = data;
//                 });

//                 set({ infoNamesArr: tempInfoNamesArr });
//                 set({ infoDict: tempInfoDict });
//             },
//             getPlanetNames: async () => {
//                 const planetsData = await (
//                     await fetch("https://swapi.dev/api/planets")
//                 ).json();

//                 set({
//                     planetNames: planetsData.results.map((pd: any) => pd.name),
//                 });
//             },
//             setPlanetNames: (data) => {
//                 set({ planetNames: data });
//             },
//         }))
//     )
// );
