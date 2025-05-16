import { ActionReducerMap } from "@ngrx/store";
import { ColumnEffects, columnReducer, ColumnState } from "./column";

export interface AppState {
    columns: ColumnState;
}

export const reducers: ActionReducerMap<AppState> = {
    columns: columnReducer,
}

export const effects = [
    ColumnEffects,
]