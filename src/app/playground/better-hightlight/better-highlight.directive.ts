import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elementref: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter')
  mouseover(data: Event) {
    // this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave')
  mouseleave(data: Event) {
    // this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
