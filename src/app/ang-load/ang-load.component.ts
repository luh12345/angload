import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  Type,
  ComponentRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "ang-load",
  templateUrl: "./ang-load.component.html",
  styleUrls: ["./ang-load.component.css"]
})
export class AngLoadComponent implements OnInit {
  @Input() customComponentName: string;

  @ViewChild("customSelector", { read: ViewContainerRef }) selector;

  customComponent: ComponentRef<any>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngOnInit() {
    debugger;
    if (this.customComponentName) {
      const factories = Array.from(
        this.componentFactoryResolver["_factories"].keys()
      );

      const compClass = <Type<any>>(
        factories.find((x: any) => x.name == this.customComponentName)
      );

      if (!compClass) {
        throw new Error(
          `Component ${
            this.customComponentName
          } not registered in entryComponents or not exists.`
        );
      }
      const compResolve = this.componentFactoryResolver.resolveComponentFactory(
        compClass
      );

      this.customComponent = this.selector.createComponent(compResolve);
    }
  }
}
