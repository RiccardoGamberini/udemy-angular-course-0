import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

/*
Only in the branches of this repository i will call attribute name the type of this selector. I think it's more clear than all the other names given
by people to this type. */
/*
The following selector name (.....[appCustomAttributeDirective].....) is a selector of type attribute name. This type is called attribute name because
in a HTML file is used the same way as all HTML built-in attributes that doesn't require a value. Example the disabled attribute.
*/
@Directive({
  selector: '[appCustomAttributeDirective]'
})
/**/
export class CustomAttributeDirectiveDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '500px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '500px');
  }
}