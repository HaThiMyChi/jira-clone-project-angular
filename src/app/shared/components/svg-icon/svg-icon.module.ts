import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { SvgDefinitorsComponent } from "./svg-definitors/svg-definitors.component";

@NgModule({
    declarations: [SvgIconComponent, SvgDefinitorsComponent],
    imports: [
        CommonModule
    ],
    exports: [
        SvgIconComponent,
        SvgDefinitorsComponent
    ]
})
export class SvgIconModule {
    
}