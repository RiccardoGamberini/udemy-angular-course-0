import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  servers = [
    {id: 0, name: 'server_0' },
    {id: 1, name: 'server_1' }
  ];
}
