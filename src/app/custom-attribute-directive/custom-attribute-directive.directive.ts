import {Directive, ElementRef, OnInit} from '@angular/core';
/*
Only in the branches of this repository i will call tag name the type of this selector. I think it's more clear than all the other names given
by people to this type. */
/*
/* 
The following selector name (......div.....) is a selector of type tag name. This type is called tag name because the directive will be
applied to all the HTML element with a tag name that matches the name of the selector. In the example of this branch the directive will be applied to
all div elements in the web application.
*/
@Directive({
  selector: 'div'
})
/*  */
export class CustomAttributeDirectiveDirective implements OnInit {
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.width = '500px';
    this.elementRef.nativeElement.style.height = '500px';
  }
}
