import { Component } from '@angular/core';
import { AService } from "./aService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AService]
})
export class AppComponent {

  constructor(private aService: AService) { }

  anotherFunction() {
    this.aService.aFunction();
  }
}
