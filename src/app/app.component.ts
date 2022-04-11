import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receptionConfirmationMessages: Array<string> = [];
  aFunction(eventEmitted: {id: number, name: string}) {
    this.receptionConfirmationMessages.push(`The app component received a customEvent with id ${eventEmitted.id}.`);
  }
}
