import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';
import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItems = [
    {
      label: 'Roadmap',
      icon: 'roadmap',
      link: '/roadmap',
    },
    {
      label: 'Board',
      icon: 'board',
      link: '/column',
    }, 
    {
      label: 'code',
      icon: 'code',
      link: '/code',
    },
    {
      label: 'Project pages',
      icon: 'projectPage',
      link: '/pages',
    },
    {
      label: 'Add shortcut',
      icon: 'shortcut',
      link: '/shortcut',
    },
    {
      label: 'Project settings',
      icon: 'settings',
      link: '/settings',
    },
  ];

  collapsed = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    
  }

  onToggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }

}
