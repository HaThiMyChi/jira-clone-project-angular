import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Card, Column } from '@app/core/interfaces';
import { takeUntilDestroyed } from '@app/shared/utils';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-card-details-panel',
  templateUrl: './card-details-panel.component.html',
  styleUrls: ['./card-details-panel.component.scss']
})
export class CardDetailsPanelComponent implements OnInit, OnChanges {
  @Input() columns!: Array<Column> | null;
  @Input() card!: Card | undefined | null;
  @Output() updateCardColumn  = new EventEmitter();

  columnControl: FormControl;

  constructor() {
    this.columnControl = new FormControl(null, Validators.required);
   }

  ngOnInit(): void {
    this.columnControl.valueChanges.pipe(
      filter(value => !!value),
      takeUntilDestroyed(this),
      tap(value => this.updateCardColumn.emit({id: this.card?.id, columnId: value }))
    ).subscribe();
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
}
