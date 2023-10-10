import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormbxdgreen]'
})
export class FormbxdgreenDirective {

  constructor(private renderer:Renderer2,private elementRef:ElementRef) {
    this.clasName = true;
    
  }

  @HostBinding('class.gboxshadow') clasName=false;

  @HostListener('mouseover') mouseOver(){
    this.clasName = false;
  }
  
  @HostListener('mouseleave') mouseleave(){
    this.clasName = true;
  }


}
