import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
/*
Only in the branches of this repository i will call class name the type of this selector. I think it's more clear than all the other names given
by people to this type. */
/*
/* 
The following selector name (......appCustomAttributeDirective.....) is a selector of type class name. This type is called class name because
in order to use it the string appCustomAttributeDirective must be added to the value of the class attribute of the HTML element that have
to be modified by the attribute directive. Example: .....class="appCustomAttributeDirective"..... .
*/
@Directive({
  selector: '.appCustomAttributeDirective'
})
/*  */
export class CustomAttributeDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '500px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '500px');
  }
}
