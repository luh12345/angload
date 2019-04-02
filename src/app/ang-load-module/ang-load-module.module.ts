import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngLoadComponent } from "../ang-load/ang-load.component";
import { MaterialModule } from "../material/material.module";
import { AngLoadService } from "../service/loading.service";

@NgModule({
  declarations: [AngLoadComponent],
  imports: [CommonModule, MaterialModule],
  providers: [AngLoadService],
  exports: [AngLoadComponent]
})
export class AngLoadModule {}
