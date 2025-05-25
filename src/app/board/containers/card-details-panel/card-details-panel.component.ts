import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Card, Column, PartialCard, User } from '@app/core/interfaces';
import { takeUntilDestroyed } from '@app/shared/utils';
import { select, Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-card-details-panel',
  templateUrl: './card-details-panel.component.html',
  styleUrls: ['./card-details-panel.component.scss']
})
export class CardDetailsPanelComponent implements OnInit, OnChanges {
  columns$!: Observable<Array<Column>>;
  selectedCard$!: Observable<Card | undefined | null>;
  users$!: Observable<Array<User>>;
  reporter$!: Observable<User | undefined | null>;
  assignee$!: Observable<User | undefined | null>;
  label$!: Observable<Array<string>>;

  card!: Card | undefined | null;
  columns!: Array<Column>;

  columnControl: FormControl;

  constructor(private store: Store<fromStore.AppState>) {
    this.columnControl = new FormControl(null, Validators.required);
   }

  ngOnInit(): void {
    this.selectedCard$ = this.store.pipe(select(fromStore.selectSelectedCard));
    this.columns$ = this.store.pipe(select(fromStore.allColumns));
    this.users$ = this.store.pipe(select(fromStore.allUsers));

    this.subscribeEvents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const card = changes.card;
    if(card && card.previousValue !== card.currentValue && this.card) {
      this.columnControl.patchValue(this.card.columnId, {emitEvent: false});
    }
  }

  getColumnDropdownBackgroudColor(): string {
    const selectedColumn = this.columns?.find(c => c.id === this.columnControl.value);
    return selectedColumn?.bgButton || '#ccc';
  }

  getColumnDropdownColor(): string {
    const selectedColumn = this.columns?.find(c => c.id === this.columnControl.value);
    return selectedColumn?.color || '#000';
  }

  onUpdateCard(partial: PartialCard): void {
    this.store.dispatch(fromStore.updateCard({partial}));
  }

  private subscribeEvents(): void {
    this.columns$.pipe(
      filter(columns => !!columns),
      takeUntilDestroyed(this),
      tap(columns => (this.columns = columns))
    ).subscribe();

    this.selectedCard$.pipe(
      filter(card => !!card),
      takeUntilDestroyed(this),
      tap(card => {
        this.card = card;
        this.columnControl.patchValue(card?.columnId, {
          emitEvent: false
        });

        this.assignee$ = this.store.pipe(select(fromStore.selectUserById(this.card?.assigneeId)));
      })
    ).subscribe();
  }
}
