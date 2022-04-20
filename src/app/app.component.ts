import {Component, OnInit} from '@angular/core';
import { AService } from "./aService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'This is the value of the message property of the AppComponent class.'

  constructor(private aService: AService) { }

  ngOnInit() {
    /*The provider is added in app.module.ts, here in app.component.ts the instance is created (thanks to private keyword) and modified
    * (.....this.aService.message = this.message.....).*/
    this.aService.message = this.message;
    console.log(this.aService.message);
  }
}
