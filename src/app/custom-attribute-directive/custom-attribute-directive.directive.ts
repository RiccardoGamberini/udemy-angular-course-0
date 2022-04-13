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
    console.log(this.elementRef.nativeElement.value);
  }
}
