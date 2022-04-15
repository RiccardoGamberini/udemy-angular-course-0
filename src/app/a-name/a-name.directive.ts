import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[aName]'
})
export class AName implements OnInit {
  /*Sometimes it's possible that the developer wants to have the name of a selector of type attribute equal to the name of a property that
  is decorated with Input (.....selector: '[aName]'..... and .....@Input() aName: string;.....). In this case the developer has to implement
  a data tranfer from HTML to Ts in the same way that is implemented in this branch.*/
  @Input() aName: string;

  constructor() { }

  ngOnInit() {
    console.log(this.aName);
  }
}
