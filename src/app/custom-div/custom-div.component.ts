import { Component, OnInit } from '@angular/core';
import {AService} from "../aService.service";

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css']
})
export class CustomDivComponent implements OnInit {
  message: string;
  constructor(private aService: AService) {
    this.aService.customEvent.subscribe((message: string) => this.message = message);
  };

  ngOnInit(): void {}
}
