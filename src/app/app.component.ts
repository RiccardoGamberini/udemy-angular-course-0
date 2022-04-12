import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureName = 'Home';
  aFunction(eventEmitted: string) {
    this.featureName = eventEmitted;
  }
}
