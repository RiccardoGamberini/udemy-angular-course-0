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
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css'],
})
export class CustomDivComponent implements OnInit {
  constructor(private aService: AService) {}

  ngOnInit(): void {
    /*This.aService is the same instance of service of another-custom-div component.*/
    console.log(this.aService.message);
  }
}
