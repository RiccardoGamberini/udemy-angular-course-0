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
  - The expression '@Output('customEventAlias)' permits to components different from server-item component to receive events emitted by customEventEmitter.
  - 'customEventAlias' is an alias for the name of the variable in which is stored the event emitter.
  - It's possible to instantiate an EventEmitter object not receivable by other components, in order to do so do not add @Output() decorator.
   */
  @Output('customEventAlias') customEvent = new EventEmitter<{ id: number, name: string }>();

  eventEmissionFunction() {
    let max = 1000;
    let randomInteger = Math.floor(Math.random() * (max + 1));
    this.customEvent.emit({id: randomInteger, name: `event_${randomInteger}`}); /* This line emits a customEvent.*/
  }
}
