import { Injectable } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Injectable()
export class AnotherServiceService {

  constructor(private loggingService: LoggingService) { }

  aFunction(firstAddend: number, secondAddend: number): void {
    let sum = firstAddend + secondAddend;
    let message = `Sum made. The result is: ${sum}.`
    this.loggingService.logMessage(message);
  }
}
