import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from './card.actions';
import { BoardService } from "@app/core/services/board.service";
import { catchError, filter, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { select, Store } from "@ngrx/store";
import { CardState } from "./card.reducers";
import { selectLatestOrdinalId, selectSelectedCardId } from "./card.selectors";
import { nanoid } from "nanoid";
import { Comment } from "@app/core/interfaces";

@Injectable()
export class CardEffects {
    constructor(private actions$: Actions,
        private boardService: BoardService,
        private store: Store<CardState>
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

    createCard$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createCard),
        withLatestFrom(this.store.pipe(select(selectLatestOrdinalId))),
        mergeMap(([{card}, ordinalId]) =>
            this.boardService.createCard(card).pipe(
                map(_ => actions.createCardSuccess({card: {...card, ordinalId: ordinalId + 1}})),
                catchError((error) => of(actions.createCardError({error})))
            ))
    ));

    getLabels$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getLabels),
        mergeMap(() => this.boardService.getLabels()
            .pipe(
                map(labels => actions.getLabelsSuccess({labels}),
                catchError((error) => of(actions.getLabelsError({error}))))
            ))
    ));

    getComments$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getComments),
        mergeMap(_ => this.boardService.getComments()
            .pipe(
                map(comments => actions.getCommentsSuccess({comments})),
                catchError((error) => of(actions.addCommnetError({error})))
            ))
        )
    );

    addComment$ = createEffect(() => this.actions$.pipe(
        ofType(actions.addComment),
        withLatestFrom(this.store.pipe(select(selectSelectedCardId))),
        filter(([_, cardId]) => !!cardId),
        mergeMap(([{comment}, cardId]) => {
            const newComment: Comment = {
                ...comment,
                id: nanoid(),
                cardId: cardId || '',
                createdAt: new Date().toISOString(),
            };

            return this.boardService.addComment(newComment)
                .pipe(
                    map(_ => actions.addCommentSuccess({comment: newComment})),
                    catchError((error) => of(actions.addCommnetError({error})))
                )
        })
    ));

    updateCard$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateCard),
        mergeMap(({partial}) => this.boardService.updateCard(partial)
            .pipe(
                map(_ => actions.updateCardSuccess({partial})),
                catchError((error) => of(actions.upateCardError({error})))
            )
        )
        
    ))
}