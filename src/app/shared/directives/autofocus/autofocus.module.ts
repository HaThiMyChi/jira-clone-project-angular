import { NgModule } from "@angular/core";
import { AutofocusDirective } from "./autofocus.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AutofocusDirective
    ],
    exports: [
        AutofocusDirective
    ],
    imports: [
        CommonModule
    ]
})
export class AutofocusModule {
    
}