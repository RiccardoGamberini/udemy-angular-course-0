import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  @Input() aPropertyName: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.aPropertyName);
  }
}
