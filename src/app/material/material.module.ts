import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [],
  imports: [MatProgressSpinnerModule, BrowserAnimationsModule],
  exports: [MatProgressSpinnerModule, BrowserAnimationsModule]
})
export class MaterialModule {}
