import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';
import { fail } from 'assert';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementref: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter')
  mouseover(data: Event) {
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave')
  mouseleave(data: Event) {
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'transparent');
  }
}
