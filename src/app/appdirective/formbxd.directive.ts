import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormbxd]'
})
export class FormbxdDirective {

  constructor(private renderer:Renderer2,private elementRef:ElementRef) {
    this.clasName = true;
    
  }

  @HostBinding('class.rboxshadow') clasName=false;

  @HostListener('mouseover') mouseOver(){
    // this.renderer.setStyle(this.elementRef.nativeElement,"box-shadow","0 0 60px #ff6600 inset");
    // this.renderer.addClass(this.elementRef.nativeElement,"rboxshadow");
    this.clasName = false;
    

  }
  
  @HostListener('mouseleave') mouseleave(){
    this.clasName = true;
  }
}
