import { Component, OnInit } from '@angular/core';
import { AService } from "../aService.service";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'];
  providers: [AService]
})
export class CustomButtonComponent implements OnInit {
  message = 'This is the value of the message property of the CustomButtonComponent class.'
  constructor(aService: AService) { }

  ngOnInit(): void {
    this.aService.aFunction(this.message);
  }
}
