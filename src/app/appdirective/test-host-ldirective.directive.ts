import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestHostL]'
})
export class TestHostLDirective {

  constructor(private renderer:Renderer2,private elementRef:ElementRef) {
    
 }

  @HostListener("click") myClick(){
    // this.renderer.setStyle(this.elementRef.nativeElement,"background","#ff8000");
    alert("clicked on host element ");
  }

  @HostListener('mouseover') mouseOver(){
    this.renderer.setStyle(this.elementRef.nativeElement,"background","pink");
    this.renderer.setStyle(this.elementRef.nativeElement,"cursor","pointer");
    
  }

  @HostListener('mouseout') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement,"background","#fff");
  }

}
