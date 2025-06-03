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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { TextFieldModule } from '@angular/cdk/text-field';
import { InlineInputControlsModule } from "@app/shared/components/inline-input-controls/inline-input-controls.module";
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RichTextEditorModule } from '@app/shared/components/rich-text-editor/rich-text-editor.module';
import { UnderConstructionModule } from "@app/shared/components/under-construction/under-construction.module";
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

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
        TextareaSubmitOnEnterModule,
        NzModalModule,
        NzCollapseModule,
        TextFieldModule,
        InlineInputControlsModule,
        NzToolTipModule,
        NzTagModule,
        RichTextEditorModule,
        UnderConstructionModule,
        NzDatePickerModule,
        NzPopoverModule
    ]
})

export class BoardModule {
    
}