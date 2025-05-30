import { Component, OnInit } from '@angular/core';
import { Card, PartialCard } from '@app/core/interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-card-descriptions-panel',
  templateUrl: './card-descriptions-panel.component.html',
  styleUrls: ['./card-descriptions-panel.component.scss']
})
export class CardDescriptionsPanelComponent implements OnInit {
  selectedCard$!: Observable<Card | undefined | null>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.selectedCard$ = this.store.pipe(select(fromStore.selectSelectedCard));
  }

  onUpdateCard(partial: PartialCard): void {
    console.log('partial', partial)
    this.store.dispatch(fromStore.updateCard({partial}));
  }

}
