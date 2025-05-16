import { columnAdapter, selectColumnState } from "./column.reducers";
import { createSelector } from "@ngrx/store";

const {
    selectIds: selectColumnIds,
    selectEntities: selectColumnEntities,
    selectAll: selectAllColumn,
    selectTotal: selectTotalColumns,
} = columnAdapter.getSelectors();

export const allCards = createSelector(
    selectColumnState,
    selectAllColumn
)