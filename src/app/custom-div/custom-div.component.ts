import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css']
})
export class CustomDivComponent {
  seconds = 2;
  max = 1000;
  aProperty: number;

  ngOnInit() {
    setInterval(() => {
      this.aProperty = Math.floor(Math.random() * (this.max + 1));
    }, this.seconds * 1000)
  }
}
