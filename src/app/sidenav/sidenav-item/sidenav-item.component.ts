import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SidenavItem} from "./sidenavItem.model";

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css']
})
export class SidenavItemComponent {
  @Input() sidenavItem: SidenavItem;

  onClick(sidenavItemTitle: string) {
    console.log(sidenavItemTitle);
  }
}

