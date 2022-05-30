import { Component, OnInit } from '@angular/core';
import { LoggingService } from "../services/logging.service";

/* The following two things are similar:
0) Writing the following code in the typescript file of a-module module.
.....
import {LoggingService} from "../services/logging.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoggingService]
})
.....
1) Writing the following code in the typescript file of a service.
.....
import { Injectable } from "@angular/core";
import { AModuleModule } from "../a-module/a-module.module";

@Injectable({
  providedIn: AModuleModule
})
.....

I sad that are similar because:
- 0)
  - Set a module as a hierarchy level:
    - Into which you can inject the logging service.
    - Below which all hierarchy levels can receive an instance of the logging service.
  - Tells Angular to load lazily logging service in a-module module.
  Lazy loading of service
- 1) Set a module as a hierarchy level:
  - Into which you can inject the logging service.
  - Below which all hierarchy levels can receive an instance of the logging service.
* */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
  }

  onButtonClick(message: string) {
    this.loggingService.logMessage(message)
  }

}
