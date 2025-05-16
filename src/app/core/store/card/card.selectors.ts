import { createSelector } from "@ngrx/store";
import { cardAdapter, selectedCardState} from "./card.reducers";

const {
    selectIds: selectCardIds,
    selectEntities: selectCardEntities,
    selectAll: selectAllCards,
    selectTotal: selectTotalCards,
} = cardAdapter.getSelectors();

export const allCards = createSelector(
    selectedCardState,
    selectAllCards,
);

export const selectCardsByColumnId = (columnId: string) => createSelector(
    allCards,
    cards => {
        return cards && cards.filter(c => c.columnId === columnId);
    }
);