import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {
  seconds = 2;
  maximumRandomInteger = 2000;
  @Input() aPropertyName: string;

  constructor() { }

  ngOnInit() { 
    setInterval(() => {
      let randomInteger = Math.floor(Math.random() * (this.maximumRandomInteger + 1));
      this.aPropertyName = randomInteger.toString();
      console.log(this.aPropertyName);
    }, this.seconds * 1000)
  }
}
