import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective {
  /*
  * 
  * */
  constructor(private elementRef: ElementRef) { }

}
