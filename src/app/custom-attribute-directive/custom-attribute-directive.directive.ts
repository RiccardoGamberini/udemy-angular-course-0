import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {
  seconds = 2;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  ngOnInit() { 
    setInterval(() => {
      this.backgroundColor = Math.random() > 0.5 ? 'green' : 'red';
    }, this.seconds * 1000)
  }
}
