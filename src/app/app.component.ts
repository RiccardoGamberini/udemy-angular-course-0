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
    /*This.aService is the same instance of service of another-custom-div component.*/
    this.aService.message = this.message;
    console.log(this.aService.message);
  }
}
