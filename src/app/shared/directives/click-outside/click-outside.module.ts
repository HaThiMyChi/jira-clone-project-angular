import { NgModule } from "@angular/core";
import { ClickOutsideDirective } from "./click-outside.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ClickOutsideDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ClickOutsideDirective
    ]
})
export class ClickOutsideModule {

}