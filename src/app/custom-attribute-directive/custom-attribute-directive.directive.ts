import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { }

  @HostListener('click', ['$event']) aFunctionName(anEvent) {
    console.log(anEvent.target.textContent);
  }
}
