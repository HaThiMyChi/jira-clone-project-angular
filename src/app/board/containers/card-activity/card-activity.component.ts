import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddCommentModel, CommentWithUser, User } from '@app/core/interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore  from '@app/core/store';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss']
})
export class CardActivityComponent implements OnInit {
  currentUser$!: Observable<User>;
  comments$!: Observable<Array<CommentWithUser>>;

  activityLabelControl: FormControl;


  constructor(private store: Store<fromStore.AppState>) {
    this.activityLabelControl = new FormControl('comments');
   }

  ngOnInit(): void {
    this.comments$ = this.store.pipe(select(fromStore.allCommentsWithUser));
    this.currentUser$ = this.store.pipe(select(fromStore.selectCurrentUser));
  }

  onAddcomment(comment: AddCommentModel): void {
    this.store.dispatch(fromStore.addComment({comment}));
  }

}
