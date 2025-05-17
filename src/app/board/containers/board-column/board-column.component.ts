import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Card, Column } from '@app/core/interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/core/store';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent implements OnInit {
  @Input() column!: Column;

  cards$!: Observable<Array<Card>>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    console.log('column====', this.column)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('column====', this.column)
    if (this.column && changes.column) {
      this.cards$ = this.store.pipe(select(fromStore.selectCardsByColumnId(this.column.id)));
    }
  }

  onCardDropped(event: CdkDragDrop<Array<any>>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.store.dispatch(fromStore.updateCardColumn({
        cardId: event.item.data,
        columnId: event.container.id
      }));
    }
  }

}
