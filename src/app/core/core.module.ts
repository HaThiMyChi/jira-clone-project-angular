import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "../layout/layout.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
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