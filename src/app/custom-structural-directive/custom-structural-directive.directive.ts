import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class CustomStructuralDirectiveDirective {
  @Input() set appUnless(aConditionName: boolean) {
    /*Depending on the value of aConditionName
    * - the HTML element (templateRef) on which the directive is placed will be inserted in a view container (viewContainerRef) in order to be added to the DOM.
    * or
    * - every TemplateRef object eventually previously inserted in viewContainerRef will be remove from viewContainerRef.
    * */
    if(!aConditionName) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
}
