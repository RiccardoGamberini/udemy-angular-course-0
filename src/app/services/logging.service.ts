import { Injectable } from "@angular/core";

/* The following two things are similar:
0) Writing the following code in the typescript file of app module.
.....
import { LoggingService } from "../services/logging.service";

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

@Injectable({
  providedIn: 'root'
})
.....

I said that are similar because:
- 0)
  - Set a module as a hierarchy level:
    - Into which you can inject the logging service.
    - Below which all hierarchy levels can receive an instance of the logging service.
- 1)
  - Set a module as a hierarchy level:
     - Into which you can inject the logging service.
     - Below which all hierarchy levels can receive an instance of the logging service.
  - Tells Angular to load lazily logging service into the hierarchy levels in which is injected.
* */

@Injectable({
  providedIn: 'root'
})
export class LoggingService { }
