import { User } from "@app/core/interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, Action, createFeatureSelector } from "@ngrx/store";
import { immerOn } from "ngrx-immer/store";
import * as actions from './user.actions';
import { reduce } from "rxjs/operators";

export interface UserState extends EntityState<User> {
    loading: boolean;
    error: string;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialUserState: UserState = userAdapter.getInitialState({
    loading: false,
    error: ''
});

const reducer = createReducer(
    initialUserState,
    immerOn(actions.getUsers, (state) => {
        state.loading = true;
    }),
    immerOn(actions.getUsersSuccess, (state, {users}) =>
    userAdapter.setAll(users, {
        ...state,
        loading: false
    })),
    immerOn(actions.getUsersError, (state, {error}) => {
        state.loading = false;
        state.error = error;
    })
);

export const userReducer = (state: UserState | undefined, action: Action) => reducer(state, action);

export const selectUserState = createFeatureSelector<UserState>('users');