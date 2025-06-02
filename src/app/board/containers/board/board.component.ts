import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Column } from '@app/core/interfaces';
import { select, Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import * as fromStore from '@app/core/store';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { filter, map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@app/shared/utils';
import { CardDetailsComponent } from '../card-details/card-details.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns$!: Observable<Array<Column>>;
  modalRef!: NzModalRef;

  constructor(
    private store: Store<fromStore.AppState>,
    private activatedRoute: ActivatedRoute,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.getCards());
    this.store.dispatch(fromStore.getColumns());
    this.store.dispatch(fromStore.getUsers());
    this.store.dispatch(fromStore.getLabels());
    this.store.dispatch(fromStore.getComments());

    this.columns$ = this.store.pipe(select(fromStore.allColumns));

    this.activatedRoute.queryParams.pipe(
      filter(params => params && params.selectedIssue),
      map(params => params.selectedIssue),
      takeUntilDestroyed(this)
    ).subscribe((id) => {
      this.store.dispatch(fromStore.setSelectedCardId({id}));
      this.openCardDetailsModal();
    });

    this.activatedRoute.queryParams.pipe(
      filter(params => !params?.selectedIssue),
      takeUntilDestroyed(this)
    ).subscribe((id) => {
      if (this.modalRef) {
        this.modalRef.close();
      }
    });
  }

  openCardDetailsModal(): void {
    this.modalRef = this.modal.create({
      nzContent: CardDetailsComponent,
      nzClosable: false,
      nzAutofocus: null,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: '85%',
      nzFooter: null,
      nzStyle: { top: '5%' }
    });
    // modal.afterClose.subscribe(() => console.log('[afterOpen] emitted!'));

    this.modalRef.afterClose.subscribe(_=> {
      this.router.navigate(['/board']);
      this.store.dispatch(fromStore.setSelectedCardId({id: null}));
    });
  }

}
