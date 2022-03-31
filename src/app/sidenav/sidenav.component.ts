import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidenavWidth = 5;
  serverName = "TestServer";
  ngStyle: string;
  sidenavIsCompressed = true;
  resizeButtonIconName = 'fast_forward';
  compressIconName = 'fast_rewind';
  decompressIconName = 'fast_forward';

  ngOnInit() {
  }

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
