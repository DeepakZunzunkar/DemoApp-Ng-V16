import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child01',
  templateUrl: './child01.component.html',
  styleUrls: ['./child01.component.css']
})
export class Child01Component {

  @Input()
  boxColor:any='red';

  @Input()
  placeholder:any

  @Output()
  inputEvent=new EventEmitter<any>();

  @Input()
  count :number=0;
  
  onCreate(myInput:any){

    // alert(myInput.value);
    if(myInput.value.length > 0){
      this.count=this.count+1;
      this.inputEvent.emit(myInput.value);
    }

  }


}
