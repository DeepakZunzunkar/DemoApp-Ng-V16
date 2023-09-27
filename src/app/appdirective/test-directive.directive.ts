import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private renderer:Renderer2,private elementRef:ElementRef) {

      this.renderer.setStyle(this.elementRef.nativeElement,"background","pink");

   }

   changeBg(color:any){
    this.renderer.setStyle(this.elementRef.nativeElement,"background",color);
    this.renderer.setStyle(this.elementRef.nativeElement,"color",'#fff');
   }
}
