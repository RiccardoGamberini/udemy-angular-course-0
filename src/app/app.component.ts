import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seconds = 2;
  maximumRandomInteger = 10;
  aNumber = 2;
  ngOnInit() {
    setInterval(() => {
      console.log(this.aNumber);
      this.aNumber = Math.floor(Math.random() * (this.maximumRandomInteger + 1));
    }, this.seconds * 1000);
  }
}
