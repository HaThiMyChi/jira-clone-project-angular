import { selectUserState, userAdapter } from './user.reducers';
import { createSelector } from '@ngrx/store';

const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = userAdapter.getSelectors();

export const allUsers = createSelector(
  selectUserState,
  selectAllUsers,
);

export const selectUserById = (id: string | undefined) => createSelector(
  allUsers,
  users => {
    if (!!users && !!id) {
      return users.find(u => u.id === id);
    }

    return null;
  }
)