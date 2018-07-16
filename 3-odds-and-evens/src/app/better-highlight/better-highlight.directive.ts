import { 
  Directive,
  OnInit,
  Renderer2,
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostBinding('style.backgroundColor') backgroundColor : string;

  @HostListener('mouseenter') mouseover(eventData : Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData : Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor = 'orange';
  }
}
