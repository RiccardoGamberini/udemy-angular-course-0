import { Component, OnInit } from '@angular/core';
import { AService } from "../aService.service";

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css']
})
export class CustomDivComponent implements OnInit {

  constructor(private aService: AService) { }

  ngOnInit(): void {
    console.log(this.aService.message);
  }
}
