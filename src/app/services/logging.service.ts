/*The @Injectable decorator must be added only in the receiver service if we want to inject a service into a service. However due to the fact that maybe
* in future Angular will require the @Injectable decorator in both services, the receiver and the one injected, in order to inject a service into a service, it's
* suggested to insert the @Injectable decorator in both service now, although it's not mandatory. It's suggested to do so because in future Angular will work differently
* the code won't break.*/
export class LoggingService {
  logMessage(message: string) {
    console.log(`Timestamp: ${new Date()}. Message: ${message}`);
  }
}
