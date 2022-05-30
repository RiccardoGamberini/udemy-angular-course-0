export class LoggingService {
  logMessage(message: string) {
    console.log(`Timestamp: ${new Date()}. Message: ${message}`);
  }
}
