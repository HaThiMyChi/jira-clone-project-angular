import { NgModule } from "@angular/core";
import { TextareaSubmitOnEnterDirective } from "./textarea-submit-on-enter.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TextareaSubmitOnEnterDirective
    ],
    exports: [
        TextareaSubmitOnEnterDirective
    ],
    imports: [
        CommonModule
    ]
})

export class TextareaSubmitOnEnterModule {}