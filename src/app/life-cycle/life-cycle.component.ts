import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {

  inputVal:any;

  isExist:boolean=true;

  constructor(){
    // console.log("parent component constructor called...");
  }

  ngOnInit(): void {
    // console.log("parent component  ngOninit called...")
  }


  onSubmit(inpt:any){
    this.inputVal=inpt.value;
  }

  destroy(){
    this.isExist=false;
  }
}
