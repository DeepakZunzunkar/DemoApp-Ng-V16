import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, asNativeElements } from '@angular/core';
import { TxtSec1Component } from '../my-container/txt-sec1/txt-sec1.component';
import { TxtSec2Component } from '../my-container/txt-sec2/txt-sec2.component';
import { CommonComponent } from '../ngcontentt/common/common.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit,AfterViewInit{

  userName:any="john Snow";

  @ViewChild('box')
  box: ElementRef;

  @ViewChild('carea')
  carea:ElementRef;

  @ViewChild('cmm')
  cmm:ElementRef;

  // in order to get the access of child component we have to pass the child component class name.
  @ViewChild(TxtSec1Component)
  child:TxtSec1Component;

  @ViewChild(CommonComponent)
  appCommn:CommonComponent;
 
  constructor(private renderer:Renderer2){
    
  }

  ngOnInit(): void {
    console.log(this.box);
  }

  ngAfterViewInit(): void {
    console.log(this.box);
    this.box.nativeElement.style.backgroundColor="#fffb80";
    this.box.nativeElement.classList="box";
    // this.box.nativeElement.innerHTML="This is modified ";
    
    console.log(this.child);

    // this.renderer.setStyle(this.cmm.nativeElement,"background","#fff700");
    
    this.renderer.setStyle(this.carea.nativeElement,"background","#fff700");
    this.renderer.setStyle(this.carea.nativeElement,"width","50%");
    this.renderer.addClass(this.carea.nativeElement,"box");
    this.renderer.setAttribute(this.carea.nativeElement,"title","this is child component tiltle");
    
  }

  changeChildProp(){
    this.child.txthead = "Change Using view child"
  }

  calledChildMethod(){
    this.child.onSubscribe();
  }
}
