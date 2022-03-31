import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  users = [
    { id: 2234, role: 'guest' },
    { id: 974, role: 'manager' },
    { id: 43278, role: 'admin' },
    { id: 523498, role: 'guest' },
    { id: 6, role: 'guest' },
    { id: 72, role: 'admin' },
    { id: 83245, role: 'manager' },
    { id: 11, role: 'guest' },
    { id: 10, role: 'guest' }
  ];
}
