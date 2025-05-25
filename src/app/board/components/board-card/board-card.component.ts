import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CardPriorityEnum } from '@app/core/enums';
import { CardTypesEnum } from '@app/core/enums/card-types.enum';
import { Card, User } from '@app/core/interfaces';
import { environment } from '@app/env';
import { select, Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit, OnChanges {
  @Input() card!: Card;
  @Input() loading: boolean = false;
  @Output() goToDetails = new EventEmitter<string>();
  
  CardTypes = CardTypesEnum;
  enviroment = environment;
  CardPriority = CardPriorityEnum;
  assignee$!: Observable<User |null | undefined>;

  
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
  }

  onCardClick(): void {
    this.goToDetails.emit(this.card.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const card = changes.card;

    if (card && card.previousValue !== card.currentValue && this.card) {
      this.assignee$ = this.store.pipe(select(fromStore.selectUserById(this.card?.assigneeId)));
    }
  }

}
