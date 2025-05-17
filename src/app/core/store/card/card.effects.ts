import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from './card.actions';
import { BoardService } from "@app/core/services/board.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CardEffects {
    constructor(private actions$: Actions,
        private boardService: BoardService
    ) {}

    getCard$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getCards),
        mergeMap(() => this.boardService.getBoardCards()
            .pipe(
                map(cards => actions.getCardsSuccess({cards})),
                catchError((error) => of(actions.getCardsError({error})))
            ))

        )
    );
}