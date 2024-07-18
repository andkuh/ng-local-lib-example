import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
export { MyLibComponent } from './my-lib.component';
import { BaseUrlService } from './services/base-url.service';
export { BaseUrlService } from './services/base-url.service';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule {
  static forRoot(baseUrlService: Type<any>): ModuleWithProviders<MyLibModule>{
    return { ngModule: MyLibModule, providers: [{provide: BaseUrlService, useClass: baseUrlService}] };
  }
 }
