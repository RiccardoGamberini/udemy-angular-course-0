import { Component, ViewChild} from '@angular/core';
import {CustomDivComponent} from "./custom-div/custom-div.component";

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
* class of custom-div component.
* - ..... {static: true} ..... must be use because in this file we are accessing customDivComponentValue variable ( ..... console.log(this.customDivComponentValue)
* ..... and ..... this.customDivComponentValue.aProperty .....) inside the ngOnInit function. If i want to access customDivComponentValue outside
* ngOnInit function i can avoid to type the second argument passed to @ViewChild function ( ..... {static: true} ..... ), so the following line
* would be instead ..... @ViewChild(CustomDivComponent) customDivComponentValue; ..... .
* */
  @ViewChild(CustomDivComponent, {static: true}) customDivComponentValue;
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
