import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')
  }
  @HostListener('mouseenter') mouseover(evt: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')
  }
  @HostListener('mouseleave') mouseleave(evt: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
