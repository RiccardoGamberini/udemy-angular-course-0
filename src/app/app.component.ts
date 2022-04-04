import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-angular-course-0';
  servers = [
    { id: 2234, name: 'server_0' },
    { id: 974, name: 'server_1' },
    { id: 43278, name: 'server_2' },
    { id: 523498, name: 'server_3' },
    { id: 6, name: 'server_4' },
    { id: 72, name: 'server_5' },
  ];
}
