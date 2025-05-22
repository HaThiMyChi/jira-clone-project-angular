import { NgModule } from "@angular/core";
import { InlineInputControlsDirective } from "./inline-input-controls.directive";
import { CommonModule } from "@angular/common";
import { InputControlPanelComponent } from "./input-control-panel.component";

@NgModule({
    declarations: [
        InlineInputControlsDirective,
        InputControlPanelComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InlineInputControlsDirective,
        InputControlPanelComponent
    ]
})
export class InlineInputControlsModule {

}