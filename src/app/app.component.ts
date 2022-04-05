import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
  serverName: string;
  serversNamesExamples = ['test_server_0', 'test_server_1', 'test_server_2', 'test_server_3', 'test_server_4', 'test_server_5', 'test_server_6'];
  seconds = 2;

  ngOnInit() {
    setInterval(() => {
      let randomInteger = this.randomIntFromInterval(0, 5);
      // In the following line "say" to the html file to change what is shown.
      this.serverName = this.serversNamesExamples[randomInteger];
    }, this.seconds * 1000);
  }

  randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }}
