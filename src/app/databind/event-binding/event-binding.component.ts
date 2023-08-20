import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit{
  
  msg?:string;
  
  constructor(){

  }

  ngOnInit(): void {
   
  }

  addToCart(){
    this.msg="product added to cart.."
  }

  onInputClick(event:any){
    console.log(event.target.value);
  }

  addToCart1(event:any){
    this.msg=event.target.value+" added to cart.."
  }
  

}
