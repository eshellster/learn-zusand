import { GetState, SetState, StateCreator, StoreApi } from "zustand";

export interface PlanetsSlice {
  readonly planets: string[];
  getPlanets: () => Promise<void>;
  setPlanets: (data: any) => void;
  //   addPlant: (name: string) => void;
  //   removePlant: (name: string) => void;
  //   editPlanet: (name: string) => void;
}

const createPlanetsSlice: StateCreator<PlanetsSlice> | StoreApi<PlanetsSlice> =
  (set, get) => ({
    planets: [],
    getPlanets: async () => {
      const planetsData = await (
        await fetch("https://swapi.dev/api/planets")
      ).json();

      set({
        planets: planetsData.results.map((pd: any) => pd),
      });
    },
    setPlanets: (data: string[]) => {
      set({ planets: data });
    },
  });

export default createPlanetsSlice as (
  set: SetState<PlanetsSlice>,
  get: GetState<PlanetsSlice>,
  api: StoreApi<PlanetsSlice>
) => PlanetsSlice;
