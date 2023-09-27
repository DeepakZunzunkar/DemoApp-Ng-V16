import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestHostB]'
})
export class TestHostBDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') bgColor='ffc299';
  @HostBinding('style.color') color:any;
  @HostBinding('style.cursor') curserStyle:any;
  @HostBinding('class.msovr') clasName=false;
  
  @HostBinding('attr.title') myTitle:any;

  @HostListener("click") myClick(){
    this.bgColor = '#ff8000';
    this.color="#fff"
  }

  @HostListener('mouseover') mouseOver(){
    // this.clasName = true;
    this.curserStyle = "grab";
    this.myTitle="this is test title"
    
  }

  @HostListener('mouseout') mouseleave(){
    this.curserStyle="";
    this.myTitle=""
    this.color=""
    this.bgColor = '#fff';
  }

}
