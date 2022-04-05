import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  aFunction(zipCodeElement) {
    console.log(zipCodeElement)
    this.message = `The entire HTML input element has been printed in console. The value is: ${zipCodeElement.value}.`;
  }
}
