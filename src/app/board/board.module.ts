import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { containers } from "./containers";
import { BoardContainerComponent } from './containers/board-container/board-container.component';
import { components } from './components';
import { AvatarModule } from "@app/shared/components/avatar/avatar.module";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { SvgIconModule } from '@app/shared/components/svg-icon/svg-icon.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BoardColumnComponent } from './containers/board-column/board-column.component';
import { BoardCardComponent } from './components/board-card/board-card.component';

const routes: Routes = [
    {
        path: '',
        component: BoardContainerComponent
    }
]

@NgModule({
    declarations: [
        containers,
        components,
        BoardColumnComponent,
        BoardCardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AvatarModule,
        SvgIconModule,
        NzBreadCrumbModule,
        NzSelectModule
    ]
})

export class BoardModule {
    
}