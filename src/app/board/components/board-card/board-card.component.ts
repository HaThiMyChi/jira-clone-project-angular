import { Component, Input, OnInit } from '@angular/core';
import { CardTypesEnum } from '@app/core/enums/card-types.enum';
import { Card } from '@app/core/interfaces';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {
  @Input() card!: Card;
  @Input() loading: boolean = false;

  CardTypes = CardTypesEnum;
  
  constructor() { }

  ngOnInit(): void {
  }

}
