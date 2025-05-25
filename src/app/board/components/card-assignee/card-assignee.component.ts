import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '@app/core/interfaces';
import { takeUntilDestroyed } from '@app/shared/utils';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-card-assignee',
  templateUrl: './card-assignee.component.html',
  styleUrls: ['./card-assignee.component.scss']
})
export class CardAssigneeComponent implements OnInit, OnChanges{
  @Input() users: Array<User> | null = [];
  @Input() assignee!: User | null | undefined;
  @Input() cardId!: string;

  @Output() updatedAssignee = new EventEmitter();
  
  assigneeControl: FormControl;

  constructor() {
    this.assigneeControl = new FormControl(null);
   }

  ngOnInit(): void {
    this.assigneeControl.valueChanges.pipe(
      filter(value => !!value),
      takeUntilDestroyed(this),
      tap(assignee => {
        this.updatedAssignee.emit({
          id: this.cardId,
          assigneeId: assignee.id
        });
      })
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const assignee = changes.assignee;

    if (assignee && assignee.previousValue !== assignee.currentValue && this.assignee) {
      this.assigneeControl.patchValue(this.assignee, {emitEvent: false});
    }
  }

}
