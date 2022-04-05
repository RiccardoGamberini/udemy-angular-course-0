import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aCondition = false;
  imagePath = 'https://www.w3schools.com/images/picture.jpg';
  buttonStatus = 'disabled property button is false';
  seconds = 2;

  ngOnInit() {
    setInterval(() => {
      this.aCondition = Math.random() > 0.5 ? true : false;
      this.buttonStatus = this.aCondition ? 'disable property button is true' : 'disabled property button is false';
    }, this.seconds * 1000);
  }
}
