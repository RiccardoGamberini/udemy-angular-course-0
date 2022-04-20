import { Component, OnInit } from '@angular/core';
import { AService } from "../aService.service";

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css'],
  providers: [AService]
})
export class CustomDivComponent implements OnInit {
  message = 'This is the value of the message property of the CustomDivComponent class.'

  constructor(private aService: AService) {}

  ngOnInit(): void {
    this.aService.message = this.message;
    console.log(this.aService.message);
  }
}
