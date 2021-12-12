import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkFlowModule } from './work-flow/work-flow.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WorkFlowModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
