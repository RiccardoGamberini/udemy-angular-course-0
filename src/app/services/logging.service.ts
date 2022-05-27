import { Injectable } from '@angular/core';

@Injectable()

export class LoggingService {
  logMessage(message: string) {
    console.log(`Message: ${message}`);
  }
}
