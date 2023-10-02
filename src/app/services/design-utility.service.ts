import { HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  // userName=new Subject<any>();
  userName=new BehaviorSubject<any>("DZ");

  currentDate :Date =new Date(); 
  
  messageAlert() {
    alert("Thank for subscribing <____________________>"+this.currentDate.toDateString());
  }

  product=[
    {
      id :1 , 
      name:"laptop HP",
      price:25000.00,
      quantity:50
    },
    {
      id :2, 
      name:"smart watch Apple",
      price:25000.00,
      quantity:50
    },
    {
      id :3 , 
      name:"smart tv sony",
      price:45000.00,
      quantity:100
    },
    {
      id :4, 
      name:"sun glass reban",
      price:25000.00,
      quantity:1000
    },
    {
      id :5 , 
      name:"washing machine LG",
      price:17000.00,
      quantity:35
    },
    // {
    //   id :6 , 
    //   name:"laptop apple",
    //   price:25000.00,
    //   quantity:50
    // },
    // {
    //   id :7, 
    //   name:"smart watch Noise",
    //   price:25000.00,
    //   quantity:50
    // },
    // {
    //   id :8 , 
    //   name:"smart tv LG",
    //   price:45000.00,
    //   quantity:100
    // },
    // {
    //   id :9, 
    //   name:"sun glass Rays",
    //   price:25000.00,
    //   quantity:1000
    // },
    // {
    //   id :10 , 
    //   name:"washing machine IBF",
    //   price:17000.00,
    //   quantity:35
    // }
  ]

}
