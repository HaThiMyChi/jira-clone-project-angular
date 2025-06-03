import { Component, Input, OnInit } from '@angular/core';
import { User } from '@app/core/interfaces';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() src: string =  '';
  @Input() tooltip: string = '';
  @Input() size: number = 32;
  @Input() user!: User | null;
  @Input() bordered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
