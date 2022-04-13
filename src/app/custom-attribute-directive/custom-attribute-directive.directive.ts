import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {
  /*
  * The private keyword:
  * - Adds a property to CustomAttributeDirectiveDirective class called elementRef.
  * - Assigns to this property a value that is an object of type ElementRef that is the HTML element on which the attribute directive is placed.
  * */
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.width = '500px';
    this.elementRef.nativeElement.style.height = '500px';
  }
}
