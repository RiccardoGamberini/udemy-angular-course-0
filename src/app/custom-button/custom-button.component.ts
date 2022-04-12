/*
Notes:
- EventEmitter importing from '@angular/core' is necessary.
- Output importing from '@angular/core is necessary.
*/
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  /*
  Notes:
  - The expression '@Output()' permits to components different from server-item component to receive events emitted by customEventEmitter.
  - It's possible to instantiate an EventEmitter object not receivable by other components, in order to do so do not add @Output() decorator.
   */
  @Output() customEvent = new EventEmitter<string>();

  onClick(event) {
    this.customEvent.emit(event.target.textContent);
  }
}
