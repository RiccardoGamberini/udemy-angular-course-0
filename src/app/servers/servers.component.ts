import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  aCondition: boolean;
  conditions = [true, false, true, false, true, false, true, false];
  imagePath = 'https://www.w3schools.com/images/picture.jpg';
  buttonStatus: string;
  seconds = 2;

  ngOnInit() {
    setInterval(() => {
      let randomInteger = this.randomIntFromInterval(0, 5);
      // The following line "says" to the html file to change what is shown.
      this.aCondition = this.conditions[randomInteger];
      this.buttonStatus = this.aCondition ? 'disable property button is true' : 'disabled property button is false';
    }, this.seconds * 1000);
  }

  randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
