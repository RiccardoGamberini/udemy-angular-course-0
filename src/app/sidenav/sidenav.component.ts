/* import {Component} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SidenavComponent {
  showFiller = false;
} */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidenavWidth = 5;
  ngStyle: string;
  sidenavIsCompressed = true;
  resizeButtonIconName = 'fast_forward';
  compressIconName = 'fast_rewind';
  decompressIconName = 'fast_forward';

  changeSidenavMode() {
    this.sidenavIsCompressed = !this.sidenavIsCompressed;
    this.changeSidenavSize();
    this.changeSizeButtonIcon();
  }

  changeSidenavSize() {
    this.sidenavWidth = this.sidenavIsCompressed ? this.decrease() : this.increase();
  }

  changeSizeButtonIcon() {
    this.resizeButtonIconName = this.sidenavIsCompressed ? this.decompressIconName : this.compressIconName;
  }

  increase() {
    this.sidenavWidth = 15;
    return this.sidenavWidth;
  }
  decrease() {
    this.sidenavWidth = 4;
    return this.sidenavWidth;
  }
}