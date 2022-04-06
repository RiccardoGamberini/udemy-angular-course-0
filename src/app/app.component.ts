import { Component, ElementRef, ViewChild} from '@angular/core';
import {CustomDivComponent} from "./custom-input-text/custom-div.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  seconds = 2;
/*
* Notes:
* - In the following line:
*   - To the @ViewChild function i've passed as argument the name of the Typescript class of the custom-button component
*   ( ..... @ViewChild(CustomInputTextComponent) ..... ).
*   - I've declared the variable customInputTextComponent ( ..... customInputTextComponent: CustomInputTextComponent ..... ).
* - With the following line to the variable customInputTextComponent ( ..... customInputTextComponent; .....) i assign the
* a value that is an object of type customInputTextComponent ( ..... CustomInputTextComponent is the name of the Typescript
* class of custom-input-text component.
* */
  @ViewChild(CustomDivComponent) customDivComponentValue;
  ngOnInit() {
    setInterval(() => {
      console.log('Custom-div HTML element.')
      console.log(this.customDivComponentValue)
      /*
      * The property called 'aProperty' of custom-div-component' is changing every two seconds. The app-component prints the aProperty every two seconds and
      * it is a different value every time, this means that @ViewChild permits to customDivComponentValue ( ..... customDivComponentValue; ..... ) always updated.
      * */
      this.message = `The CustomButtonComponent object is printed in console. The value of the property called 'aProperty' of this object is: ${this.customDivComponentValue.aProperty}`;
    }, this.seconds * 1000)
  }
}
