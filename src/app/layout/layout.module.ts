import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { components } from "./components";
import { SvgIconModule } from "../shared/components/svg-icon/svg-icon.module";
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AvatarModule } from "@app/shared/components/avatar/avatar.module";
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
    declarations: [
        components,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SvgIconModule,
        NzToolTipModule,
        AvatarModule,
        NzInputModule
    ]
})

export class LayoutModule {

}