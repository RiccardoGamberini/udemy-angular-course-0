import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  seconds = 2;
  user: object;
  users = [
    { id: 1, role: 'admin' },
    { id: 2, role: 'guest' },
    { id: 3, role: 'manager' },
    { id: 4, role: 'manager' },
    { id: 5, role: 'guest' },
    { id: 6, role: 'guest' },
    { id: 7, role: 'guest' },
    { id: 8, role: 'admin' },
    { id: 9, role: 'guest' },
    { id: 10, role: 'guest' }
  ];
  usersRolesEnabled = ['admin', 'manager'];

  ngOnInit() {
    setInterval(() => {
      let maximumRandomInteger = this.users.length - 1;
      let randomInteger = this.randomIntFromInterval(maximumRandomInteger);
      // In the following line "say" to the html file to change what is shown.
      this.user = this.users[randomInteger];
    }, this.seconds * 1000);
  }

  randomIntFromInterval(maximumRandomInteger) {
    return Math.floor(Math.random() * (maximumRandomInteger + 1))
  }

  checkPermission(currentUserRole: string) {
    return this.usersRolesEnabled.includes(currentUserRole);
  }
}
