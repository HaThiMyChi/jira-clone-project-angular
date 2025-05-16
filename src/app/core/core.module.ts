import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "../layout/layout.module";
import { StoreModule } from "@ngrx/store";
import { effects, metaReducers, reducers } from './store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "@app/env";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        HttpClientModule,
        LayoutModule
    ]
})

// @Optional(): Đảm bảo rằng Angular sẽ không báo lỗi nếu parentModule không tồn tại.

// @SkipSelf(): Đảm bảo rằng Angular không tìm kiếm CoreModule trong chính module này mà chỉ tìm kiếm nó ở các module cha.

export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule!');
        }
    }
}