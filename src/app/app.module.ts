import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrezidentasComponent } from './components/prezidentas/prezidentas.component';
import { PrezidentaiComponent } from './components/prezidentai/prezidentai.component';

@NgModule({
  declarations: [
    AppComponent,
    PrezidentasComponent,
    PrezidentaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
