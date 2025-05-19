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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzIconModule } from "ng-zorro-antd/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AutofocusModule } from "@app/shared/directives";
import { ClickOutsideModule } from "@app/shared/directives";
import { TextareaSubmitOnEnterModule } from "@app/shared/directives";

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
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AvatarModule,
        SvgIconModule,
        NzBreadCrumbModule,
        NzSelectModule,
        DragDropModule,
        ReactiveFormsModule,
        NzIconModule,
        NzDividerModule,
        AutofocusModule,
        ClickOutsideModule,
        TextareaSubmitOnEnterModule
    ]
})

export class BoardModule {
    
}