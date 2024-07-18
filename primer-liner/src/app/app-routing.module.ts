import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLibComponent } from 'ng-primer-web-core'

const routes: Routes = [
  //{ path: 'my-lib', component: MyLibComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
