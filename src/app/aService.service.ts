/*In order to inject a service with lazy loading i have to:
* - Add a line in which i import Injectable.
* - Add a line in which i call @Injectable function passing an object containing the injection scope of the service.
*/
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AService {
  message: 'This is the value of the message property of AService.'
  aFunction() {
    console.log(this.message);
  }
}
