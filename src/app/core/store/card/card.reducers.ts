import { Card } from "@app/core/interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, Action, createFeatureSelector, on} from "@ngrx/store";
import { immerOn } from "ngrx-immer/store";
import * as actions from './card.actions';

export interface CardState extends EntityState<Card> {
    loading: boolean;
    error: string; 
    loadingCardIds: Array<string>;
}

export const cardAdapter: EntityAdapter<Card> = createEntityAdapter<Card>();

const initialCardState: CardState = cardAdapter.getInitialState({
    loading: false,
    error: '',
    loadingCardIds: []
});

const reducer = createReducer(
    initialCardState,
    immerOn(actions.getCards, (state) => {
        state.loading = true;
    }),
    on(actions.getCardsSuccess, (state, {cards}) => 
        cardAdapter.setAll(cards, {
            ...state,
            loading: false
        })
    ),
    immerOn(actions.getCardsError, (state, {error}) => {
        state.loading = false;
        state.error = error
    }),

    on(actions.updateCardColumn, (state, {columnId, cardId}) => {
        const card = {...state.entities[cardId]};
        return cardAdapter.updateOne({
            id: cardId,
            changes: {
                ...card,
                columnId,
            }
        }, {...state, loading: true});
    }),

    immerOn(actions.updateCardColumnSuccess, (state, {columnId, cardId}) => {
        state.loading = false;
    }),

    immerOn(actions.upateCardColumnError, (state, {error}) => {
        state.loading = false;
        state.error =error;
    }),

    on(actions.createCard, (state, {card}) => {
        return cardAdapter.addOne(card, {...state, loadingCardIds: [...state.loadingCardIds, card.id]});
    }),

    on(actions.createCardSuccess, (state, {card}) => {
        return cardAdapter.upsertOne(card, {...state, loadingCardIds: state.loadingCardIds.filter(id => id !== card.id)});
    }),

    immerOn(actions.createCardError, (state, {error}) => {
        state.loading = false;
        state.error = error;
    }),

);

export const cardReducer = (state: CardState | undefined, action: Action) => reducer(state, action);

export const selectedCardState = createFeatureSelector<CardState>('cards');