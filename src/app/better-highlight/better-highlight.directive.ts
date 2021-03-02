import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core'

// ATTRIBUTE DIRECTIVES
@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  // custom binding method
  // binding directive selector to defaultColor
  @Input('appBetterHighlight') defaultColor: string = 'transparent'
  // unbound defaultColor
  //@Input() defaultColor: string = 'transparent'
  @Input() hoverColor: string = 'palegoldenrod'

  // host binding method
  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // render method
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')

    // host binding method
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(evt: Event) {
    // render method
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')

    // host binding method
    this.backgroundColor = this.hoverColor
  }
  @HostListener('mouseleave') mouseleave(evt: Event) {
    // render method
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')

    // host binding method
    this.backgroundColor = this.defaultColor
  }
}
