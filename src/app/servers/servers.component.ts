import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  users = [
    { id: 1, role: 'admin' },
    { id: 2, role: 'guest' },
    { id: 3, role: 'manager' },
    { id: 1, role: 'admin' },
    { id: 2, role: 'guest' },
    { id: 3, role: 'guest' },
    { id: 1, role: 'admin' },
    { id: 2, role: 'manager' },
    { id: 3, role: 'guest' }
    ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
