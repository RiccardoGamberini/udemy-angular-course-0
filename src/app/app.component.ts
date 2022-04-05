import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'red';
  seconds = 2;

  ngOnInit() {
    setInterval(() => {
      this.color = Math.random() > 0.5 ? 'green' : 'red';
    }, this.seconds * 1000);
  }
}
