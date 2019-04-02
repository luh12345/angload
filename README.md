# Angload

This is a simple project to manage angular-material spinner between routes navigation or ajax requests.

## Getting Started

first install angload into your project:

`npm instal --save angload`

next register angload module into your main module:

> ```javascript
> import { AngLoadModule } from "angload";
>
> @NgModule({
>   imports: [/* your other modules*/ AngLoadModule]
> })
> export class YourModule {}
> ```

now you're ready to use angload component

```html
<ang-load></ang-load>
```

angload component default uses material progress spinner but if you want to use your own custom component, follow these steps.

register your custom component on entryComponents:

```javascript
import { YourCustomSpinnerComponent } from "YourCustomSpinnerComponent";

@NgModule({
  /* some other code here */
  entryComponents: [YourCustomSpinnerComponent]
})
export class AppModule {}
```

and declare angload component passing your custom compoment name as customComponentName propertie.

```html
<ang-load customComponentName="YourCustomSpinnerComponent"></ang-load>
```

to manage angload just import AngLoadService and use start or stop methods;

```javascript
 import { AngLoadService } from "angload/services";

 export class ExampleComponent {
    constructor(private angLoadService: AngLoadService){

        //to start
        this.angLoadService.start();

        //to stop
        this.angLoadService.stop();
    }
 }
```
