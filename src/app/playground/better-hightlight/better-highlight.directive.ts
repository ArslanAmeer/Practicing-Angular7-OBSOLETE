import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // if u enter alias of same name as this drective, you can enter value directly as [driective]="value"
  @Input('appBetterHighlight') defaultColor: string;
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elementref: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor; // Setting defualt value on INIT
  }

  @HostListener('mouseenter')
  mouseover(data: Event) {
    // this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')
  mouseleave(data: Event) {
    // this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
