import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() cardId: string = '';
  @Output() onUpdateTitle = new EventEmitter();

  titleControl: FormControl;

  constructor() { 
    this.titleControl = new FormControl('');
  }

  ngOnInit(): void {
  }

}
