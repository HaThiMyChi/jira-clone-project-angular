import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { components } from "./components";
import { SvgIconModule } from "../shared/components/svg-icon/svg-icon.module";

@NgModule({
    declarations: [
        components,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SvgIconModule
    ]
})

export class LayoutModule {

}