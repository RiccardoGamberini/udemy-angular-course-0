/*In order to inject a service at application level (in other words at app.module.ts level) i have two options:
* - */
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AService {
  message: string;
  aFunction() {
    console.log(this.message);
  }
}
