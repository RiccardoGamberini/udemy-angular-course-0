import {Component, OnInit} from '@angular/core';
import { AService } from "./aService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AService]
})
export class AppComponent implements OnInit {
  message = 'This is the value of the message property of the AppComponent class.'

  constructor(private aService: AService) { }

  ngOnInit() {
    this.aService.message = this.message;
    console.log(this.aService.message);
  }
}
