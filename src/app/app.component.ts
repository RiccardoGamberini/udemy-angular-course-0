import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seconds = 2;
  aConditionName = false;
  ngOnInit() {
    setInterval(() => {
      this.aConditionName = Math.random() > 0.5 ? true : false;
    }, this.seconds * 1000);
  }
}
