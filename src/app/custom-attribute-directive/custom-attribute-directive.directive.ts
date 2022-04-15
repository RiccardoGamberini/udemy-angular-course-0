import {Directive, HostListener, OnInit} from '@angular/core';
import { CustomModel } from '../customModel.model';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective implements OnInit {
  
  constructor() { };

  ngOnInit() { };

  @HostListener('window.keydown.enter', ['$event']) aFunctionName(customModel: CustomModel) {
    console.log(customModel.id);
  }
}