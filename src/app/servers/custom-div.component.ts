import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
})
export class CustomDivComponent {
  serverCreated = false;
  seconds = 2;
  user = { id: 1, role: 'admin' };
  users = [
    { id: 2, role: 'guest' },
    { id: 3, role: 'manager' },
    { id: 4, role: 'admin' },
    { id: 5, role: 'guest' },
    { id: 6, role: 'guest' },
    { id: 7, role: 'admin' },
    { id: 8, role: 'manager' },
    { id: 9, role: 'guest' },
    { id: 10, role: 'guest' }
  ];

  ngOnInit() {
    setInterval(() => {
      let randomInteger = this.randomIntFromInterval(0, 5);
      // In the following line "say" to the html file to change what is shown.
      this.user = this.users[randomInteger];
    }, this.seconds * 1000);
  }

  randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
