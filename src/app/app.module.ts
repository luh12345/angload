import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngLoadModule } from "./ang-load-module/ang-load-module.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngLoadModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
