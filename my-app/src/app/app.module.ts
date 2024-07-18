import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseUrlService, MyLibComponent, MyLibModule } from 'my-lib';
import { RouterModule } from '@angular/router';
import { LinerUrlService } from './LinerUrlService';
import { MyLocalComponent } from './components/my-local/my-local.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MyLibModule
    //MyLibComponent
  ],
  providers: [{provide: BaseUrlService, useClass: LinerUrlService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
