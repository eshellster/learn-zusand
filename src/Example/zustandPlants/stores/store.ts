//https://dev.to/emmanuilsb/stop-overcomplicating-your-state-try-zustand-39p4

import produce, { Draft } from "immer";
import create, {
  GetState,
  SetState,
  State,
  StateCreator,
  StoreApi,
} from "zustand";
import { devtools } from "zustand/middleware";
import createPlanetsSlice, {
  PlanetsSlice,
} from "./useStoreSlices/createPlanetNamesSlice";
import createStarWarsDictSlice, {
  StarWarsDictSlice,
} from "./useStoreSlices/createStarWarsDictSlice";

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

interface IStore extends PlanetsSlice, StarWarsDictSlice {}

export const useStore = create<IStore>(
  devtools(
    immer((set, get, api) => ({
      ...createPlanetsSlice(
        set as unknown as SetState<PlanetsSlice>,
        get as GetState<PlanetsSlice>,
        api as unknown as StoreApi<PlanetsSlice>
      ),
      ...createStarWarsDictSlice(
        set as unknown as SetState<StarWarsDictSlice>,
        get as GetState<StarWarsDictSlice>,
        api as unknown as StoreApi<StarWarsDictSlice>
      ),
    })),
    { name: "MyStore" }
  )
);
