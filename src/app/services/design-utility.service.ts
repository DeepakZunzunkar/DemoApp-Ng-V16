import { HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }


  currentDate :Date =new Date(); 
  
  messageAlert() {
    alert("Thank for subscribing <____________________>"+this.currentDate.toDateString());
  }

  product=[
    {
      id :1 , 
      name:"laptop",
      price:25000.00,
      quantity:50
    },
    {
      id :2, 
      name:"smart watch",
      price:25000.00,
      quantity:50
    },
    {
      id :3 , 
      name:"smart tv",
      price:45000.00,
      quantity:100
    },
    {
      id :4, 
      name:"sun glass",
      price:25000.00,
      quantity:1000
    },
    {
      id :5 , 
      name:"washing machine",
      price:17000.00,
      quantity:35
    },
  ]

}
