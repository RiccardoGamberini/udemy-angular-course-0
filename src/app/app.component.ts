import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aCondition: boolean;
  imagePath = 'https://www.w3schools.com/images/picture.jpg';
  seconds = 2;

  ngOnInit() {
    setInterval(() => {
      // The following line "says" to the html file to change what is shown.
      this.aCondition = Math.random() > 0.5 ? true : false;
    }, this.seconds * 1000);
  }
}
