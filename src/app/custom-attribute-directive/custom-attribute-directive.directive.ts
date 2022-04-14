import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {
  /*
  Consider the following line.
  .....
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  .....
  The private keyword:
  - Adds two properties to CustomAttributeDirectiveDirective class called elementRef and renderer.
  - Assigns to:
    - ElementRef property a value that is an object of type ElementRef that is the HTML element on which the attribute directive is placed.
    - Renderer property a value that is an object of type Renderer2.
  */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '500px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '500px');
  }
}
