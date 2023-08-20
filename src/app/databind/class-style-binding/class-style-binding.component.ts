import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.css']
})
export class ClassStyleBindingComponent implements OnInit {
 
  mypro1:boolean=true;
  mystyle1="1px solid red";
  isActive:boolean=false;
  mlticlasses={
    myclass :false,
    myclass1:true,
    myclass2:true
  }

  mltiStyle={
    'background':'red',
    'border':'2px solid green'
  }

  constructor(){}

  ngOnInit(): void {
   
  }


}
