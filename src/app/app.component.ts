import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getColor() {
    return Math.random() > 0.5 ? 'red' : 'green';
  }
}
