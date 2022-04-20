import { Component, OnInit } from '@angular/core';
import {AnotherService} from "./anotherService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message = 'This is the value of the message property of AppComponent.';

  constructor(private anotherService: AnotherService) { }

  ngOnInit() {
    this.anotherService.aFunction(this.message);
  }
}
