import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './column.actions';
import { BoardService } from '@app/core/services/board.service';

@Injectable()
export class ColumnEffects {
    constructor(private actions$: Actions,
        private boardService: BoardService
    ) {}

    getColumns$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getColumns),
        mergeMap(() => this.boardService.getBoardColumns()
            .pipe(
                map(columns => actions.getColumnsSuccess({columns})),
                catchError((error) => of(actions.getColumnsError({error})))
            ))

        )
    );

    
}
