import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PartialCard } from '@app/core/interfaces';

@Component({
  selector: 'app-card-environment',
  templateUrl: './card-environment.component.html',
  styleUrls: ['./card-environment.component.scss']
})
export class CardEnvironmentComponent implements OnInit, OnChanges {
  @Input() environment: string = '';
  @Input() cardId!: string;

  @Output() updateCardEnvironment = new EventEmitter();

  editMode = false;
  envForm: FormGroup;


  constructor() { 
    this.envForm = new FormGroup({
      environment: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const environmnet = changes.environment;
    if (environmnet && environmnet.currentValue !== environmnet.previousValue) {
      this.envForm.patchValue({
        environmnet: this.environment,
      });
    }
  }

  onUpdateEnvironment(): void {
    this.editMode = false;
    const partial: PartialCard = {
      id: this.cardId,
      environment: this.envForm.value.environment
    }
    this.updateCardEnvironment.emit(partial)
  }
}
