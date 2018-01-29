import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModule } from 'testmodule';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [TestModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
