import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  blockStatus:boolean=false;
  selectedProduct:string="";
  products=[
    {proImg:'https://plus.unsplash.com/premium_photo-1664392122271-a1aedb05a7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80', name:'Laptop',id:'pro01',price:52000.00 },
    {proImg:'',name:'Mobile',id:'pro02',price:20000.00 },
    {proImg:'',name:'Tv',id:'pro03',price:44000.00 },
    {proImg:'',name:'Washing Machine',id:'pro04',price:25000.00 },
  ];

  users:any[]=[];

  constructor(){

  }
  ngOnInit(): void {
    
  }


  onBlockCreate(){
    this.blockStatus=true;
  }

  toggleOnBlockCreate(){
    this.blockStatus=!this.blockStatus;
  }

  getProduct(event:any){
    console.log(event.target.value);
    this.selectedProduct=event.target.value;
  }

  addUser(uname:any){
    this.users.push({
      name:uname.value
    });

  }

  removeTopUser(){
    this.users.splice(this.users.length-1);
  }

  removeUser(i:any){
    this.users.splice(i,1);
  }
}
