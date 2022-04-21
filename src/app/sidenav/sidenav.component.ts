import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidenavItems = [
    { title: 'Home', iconName: 'home' },
    { title: 'Users', iconName: 'person' },
    { title: 'Settings', iconName: 'settings'}
  ];
}
