import { Component, OnInit } from '@angular/core';
import { AService } from "../aService.service";

/*If:
* - I have a component that i call alpha.
* - I have a component that i call beta that is child of alpha.
* - I have a component that i call gamma that is child of alpha.
* - Alpha has the name of the service class inserted in providers array (.....providers: [AService].....).
* - Alpha has a constructor that has a parameter relative to an instance of the service class.
* - Beta has the name of the service class inserted in providers array (.....providers: [AService].....).
* - Beta has a constructor that has a parameter relative to an instance of the service class.
* - Gamma has a constructor that has a parameter relative to an instance of the service class.
* In my application:
* - Alpha and gamma have the same instance of the service class, i call this instance service_0.
* - Beta has an instance of the service different from service_0.
* */
@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent implements OnInit {
  message = 'This is the value of message property of CustomButtonComponent.'
  constructor(private aService: AService) {}

  ngOnInit(): void {}

  aFunction() {
    this.aService.customEvent.emit(this.message);
  }
}
