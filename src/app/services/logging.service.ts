import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logPageName(pageName: string) {
    console.log(pageName);
  }
}
