import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomModel } from '../customModel.model';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() customEvent = new EventEmitter<CustomModel>();

  aFunction() {
    let customModel = new CustomModel(2342, 'A name');
    this.customEvent.emit(customModel);
    console.log('emitted');
  }
}
