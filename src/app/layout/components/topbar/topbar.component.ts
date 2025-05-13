import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/core/interfaces';
import {select, Store} from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@app/shared/utils';
import * as fromStore from '@app/core/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  currentUser$!: Observable<User>;

  topbarMenuItems = [
    {name: 'Your work', selected: false},
    {name: 'Projects', selected: true},
    {name: 'Filters', selected: false},
    {name: 'Dashboards', selected: false},
    {name: 'People', selected: false},
    {name: 'Plans', selected: false}
  ];

  displayTopbarMenuItems: Array<{[key: string]: unknown}> = [];


  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
