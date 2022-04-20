import { Injectable } from "@angular/core";
import { AService } from "./aService.service";

/*In order to inject aService service in anotherService service:
* - A line in which the aService service file is imported must be added.
* - A call to @Injectable() must be added to anotherService file.*/
@Injectable()

export class AnotherService {
  constructor(private aService: AService) { }

  aFunction(aString: string) {
    this.aService.aFunction(aString);
  }
}
