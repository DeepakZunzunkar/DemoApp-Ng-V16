import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lchild',
  templateUrl: './lchild.component.html',
  styleUrls: ['./lchild.component.css']
})
export class LchildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit
                ,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input()
  inputValRecived:any;

  counter:any;
  num:number=1;

  // execution step at component initilise

  constructor(){
    // step 1
    console.log("child component constructor called...");
  }

  ngOnChanges(changes: SimpleChanges): void {
     // step 2 
    // it is the only lifecycle hooks which work with arguments
    // whenever input value changes this lifecycle method get called
    // it is called only when there is change in input value , if there is not change then it won't called
    console.log("child component ngOnchanges called...")
    console.log(changes);
  }
    
  ngOnInit(): void {
    // step 3
    console.log("child component ngOninit called...")
    this.counter = setInterval(()=>{
      this.num = this.num +1;
      console.log(this.num);
    },1000);
  }


  ngDoCheck(): void {
    //step 4
    // if there is change detec then it is called time to time..
    // if any change detec like button click, input prop change,
    //  any events, any component part is re-render then ngDoCheck is called .
    console.log("child component ngDoCheck called...");
  }

  ngAfterContentInit(): void {
    //step 5
    // it is initilise when the content is projected
    console.log("child component ngAfterContentInit called...");
  }

  ngAfterContentChecked(): void {
    //step 6
    // after content is loaded then it is called time to time to chack content is change or not 
    console.log("child component ngAfterContentChecked called...");

  }

  ngAfterViewInit(): void {
    // step 7
    console.log("child component ngAfterViewInit called...");
  }

  ngAfterViewChecked(): void {
    // step 8
    // after everything is rendered on screnn then this likfecycle hook get called
    console.log("child component ngAfterViewChecked called...");
  }

  ngOnDestroy(): void {
    // step 9
    // when component is removed from the DOM or destroy from DOM before this activity ,
    // this likfecycle method get called
    console.log("child component ngOnDestroy called...");

    clearInterval(this.counter);
  }

}
