import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements AfterContentInit{

    @ContentChild("childhead5")
    childhead5:ElementRef;


    @ContentChild('childancr')
    childancr:ElementRef;

    constructor(private renderer:Renderer2){

    }

    ngAfterContentInit(): void {
      console.log(this.childancr);
      this.renderer.setStyle(this.childhead5.nativeElement,'background','#fff700');
      
      this.renderer.setValue(this.childhead5.nativeElement,"Home");

      const text=this.renderer.createText(" -> this text is created by renderer..");
      
      this.renderer.appendChild(this.childhead5.nativeElement,text);

      // not working
      this.renderer.setAttribute(this.childancr.nativeElement,"href","http://localhost:4200/home");
      this.renderer.setAttribute(this.childancr.nativeElement,"routerlink","home");
      this.renderer.setAttribute(this.childancr.nativeElement,"ng-reflect-router-link","home");


      

    }
}
