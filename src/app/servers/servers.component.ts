import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
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
}
