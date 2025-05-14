import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { components } from "./components";
import { SvgIconModule } from "../shared/components/svg-icon/svg-icon.module";
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AvatarModule } from "@app/shared/components/avatar/avatar.module";

@NgModule({
    declarations: [
        components,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SvgIconModule,
        NzToolTipModule,
        AvatarModule
    ]
})

export class LayoutModule {

}