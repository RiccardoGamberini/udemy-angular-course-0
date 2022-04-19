import {Directive, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appCustomSelect]'
})
export class CustomSelectDirective implements OnInit {
  @Output() customEvent = new EventEmitter<{message: string}>();

  @HostListener('document:click', ['$event']) doSomething(event: Event) {
    let aMessage = this.elRef.nativeElement.contains(event.target) ? 'The button area has been clicked.' : "The area outside the button has been clicked.";
    this.customEvent.emit({message: aMessage});
  }

  constructor(private elRef: ElementRef) {}

  ngOnInit() { }
}
