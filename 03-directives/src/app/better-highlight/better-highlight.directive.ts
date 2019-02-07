import {
  Directive,
  // Renderer2, 
  OnInit,
  // ElementRef, 
  HostListener,
  HostBinding
} from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  // private renderer: Renderer2;
  // private elementRef: ElementRef;

  // constructor(elementRef: ElementRef, renderer: Renderer2) {
  //   this.renderer = renderer;
  //   this.elementRef = elementRef;
  // }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'darkslategray');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'lightyellow');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'darkslategray');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'lightyellow');

    this.backgroundColor = 'darkslategray';
    this.color = 'lightyellow';
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');

    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}
