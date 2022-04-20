import { Component, OnInit } from '@angular/core';
import {AService} from "../aService.service";

@Component({
  selector: 'app-another-custom-div',
  templateUrl: './another-custom-div.component.html',
  styleUrls: ['./another-custom-div.component.css']
})
export class AnotherCustomDivComponent implements OnInit {

  constructor(private aService: AService) { }

  ngOnInit(): void {
    /*This.aService is the same instance of service of app component.*/
    console.log(this.aService.message);
  }
}
