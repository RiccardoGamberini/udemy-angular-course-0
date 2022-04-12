import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  featureName = 'Home';

  sidenavItems = [
    { title: 'Users', iconName: 'person' },
    { title: 'Settings', iconName: 'settings'}
  ];

  navigate(feature: string) {
    console.log(feature);
    this.featureName = feature;
  }
}
