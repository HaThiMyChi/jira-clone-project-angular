import { Component, OnInit } from '@angular/core';
import { Card, Column, PartialCard } from '@app/core/interfaces';
import { environment } from '@app/env';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/core/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  // columns = [
  //   {
  //     id: 'abc',
  //     name: 'To do'
  //   },

  //   {
  //     id: 'xyz',
  //     name: 'In progress'
  //   },
    
  //   {
  //     id: 'zua',
  //     name: 'Done'
  //   }
  // ];

  columns$!: Observable<Array<Column>>;

  selectedCard$!: Observable<Card | undefined | null>;
  environment = environment;
  contextMenuVisible: boolean = false;

  constructor(private store: Store<fromStore.AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedCard$ = this.store.pipe(select(fromStore.selectSelectedCard));
    this.columns$ = this.store.pipe(select(fromStore.allColumns));
  }

  onCloseModal(): void {
    this.router.navigate(['/board']);
  }

  onContextMenuClick(): void {
    this.contextMenuVisible = false;
  }

}
