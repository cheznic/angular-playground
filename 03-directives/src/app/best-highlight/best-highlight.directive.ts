import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  // @Input('appBestHighlight') highlightColor: string = 'darkslategray';
  @Input() highlightColor: string = 'darkslategray';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') color: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.color = 'lightyellow';
  }
  
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }
}
