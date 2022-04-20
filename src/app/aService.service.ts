/*In this branch the injection of aService service in anotherService service without the following lines:
* .....
* import { Injectable } from "@angular/core";
* .....
* @Injectable()
* .....
* However it's recommended to add these two lines because in future Angular might require them in order to inject a service into another service correctly.
* */
import { Injectable } from "@angular/core";

@Injectable()

export class AService {
  aFunction(aString: string) {
    console.log(aString);
  }
}
