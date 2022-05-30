import { Component } from '@angular/core';
import {SidenavItem} from "./sidenav-item/sidenavItem.model";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidenavItems = [
    new SidenavItem('Home', ''),
  ];
}
