import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  anArray = [
    {id: 0, data: 'string_0'},
    {id: 1, data: 'string_1'},
    {id: 2, data: 'string_2'},
    {id: 3, data: 'string_3'},
    {id: 4, data: 'string_4'},
    {id: 5, data: 'string_5'}
  ];
  message = 'A string.';
}
