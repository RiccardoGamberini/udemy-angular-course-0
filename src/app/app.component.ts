import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aCondition: boolean;

  constructor() {
    this.aCondition = Math.random() > 0.5 ? true : false;
  }

  getColor() {
    return this.aCondition ? 'green' : 'red';
  }
}
