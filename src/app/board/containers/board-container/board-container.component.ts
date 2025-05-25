import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {
  users$!: Observable<Array<User>>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(fromStore.allUsers));
  }

}
