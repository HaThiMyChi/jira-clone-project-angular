import { Injectable } from "@angular/core";
import { BoardService } from "@app/core/services/board.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from './user.actions';
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class UserEffects {
    constructor(private action$: Actions, private boardService: BoardService) {}

    getUsers$ = createEffect(() => this.action$.pipe(
        ofType(actions.getUsers),
        mergeMap(() => this.boardService.getUsers()
            .pipe(
                map(users => actions.getUsersSuccess({users})),
                catchError((error) => of(actions.getUsersError({error})))
            ))
        )
    );
}