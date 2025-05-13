import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() width = 16;
  @Input() height = 16;
  @Input() name: string = 'default';
  @Input() fill = 'currentColor';
  window: any = window;

  constructor() { }

  ngOnInit(): void {
  }

  get iconUrl() {
    return `${this.window.location.href}#${this.name}`;
  }
}
