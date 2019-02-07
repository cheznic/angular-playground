import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private templateRef: TemplateRef<any>;
  private vcRef: ViewContainerRef;

  // property must share same name as selector 'appUnless'
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(templateRef: TemplateRef<any>, vcRef: ViewContainerRef) {
    this.templateRef = templateRef;
    this.vcRef = vcRef;
  }
}
