import { AppModule } from "../app.module";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: AppModule
})
export class LoggingService {
  logMessage(message: string) {
    console.log(`Timestamp: ${new Date()}. Message: ${message}`);
  }
}
