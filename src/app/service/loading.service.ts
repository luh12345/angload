import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AngLoadService {
  private loadingContainer: string = "loadingContainer";

  constructor() {}

  start() {
    document.getElementById(this.loadingContainer).style.display =
      "inline-block";
  }

  stop() {
    document.getElementById(this.loadingContainer).style.display = "none";
  }
}
