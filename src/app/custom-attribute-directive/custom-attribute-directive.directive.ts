import {Directive, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {

  constructor() { }

  ngOnInit() { }

  @HostListener('click', ['$event']) aFunctionName(anEvent) {
    console.log(anEvent.target.textContent);
  }
}
