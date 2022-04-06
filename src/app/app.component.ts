import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMessage: string;
  secondMessage: string;
/*
* The string 'zipCodeInput' (the argument of @ViewChild) is the name of the template variable written in HTML file (#zipCodeInput).
* After the call to @ViewChild there is a variable declaration (zipCodeInput: ElementRef). The name of this variable is 'zipCodeInput'.
* When @ViewChild is used the name of the template variable (#zipCodeInput) and the name of the Typescpript class
* variable (zipCodeInput: ElementRef) can be equal.
* */
  @ViewChild('zipCodeInput') zipCodeInput: ElementRef;
  /*
* The string 'mobilePhoneInput' (the argument of @ViewChild) is the name of the template variable written in HTML file (#mobilePhoneInput).
* After the call to @ViewChild there is a variable declaration (mobilePhone: ElementRef). The name of this variable is 'mobilePhone'.
* When @ViewChild is used the name of the template variable (#mobilePhoneInput) and the name of the Typescpript class
* variable (mobilePhone: ElementRef) can be different.
* */
  @ViewChild('mobilePhoneInput') mobilePhone: ElementRef;
  aFunction() {
    console.log('Zip code input HTML element.')
    console.log(this.zipCodeInput)
    console.log('Mobile phone input HTML element.')
    console.log(this.mobilePhone)
    this.firstMessage = `The templateVariableName object of type ElementRef is printed in console. The value is: ${this.zipCodeInput.nativeElement.value}`;
    this.secondMessage = `The templateVariableName object of type ElementRef is printed in console. The value is: ${this.mobilePhone.nativeElement.value}`;
  }
}
