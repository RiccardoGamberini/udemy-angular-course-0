import { EventEmitter } from "@angular/core";

export class AService {
  customEvent = new EventEmitter<string>();
}
