import {Directive, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomSelect]'
})
export class CustomSelectDirective implements OnInit {

  constructor() { }

  ngOnInit() { }

  @HostListener('click', ['$event']) aFunctionName(anEvent) {
    console.log(anEvent.target.textContent);
  }
}
