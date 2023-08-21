import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  blockStatus:boolean=false;
  selectedProduct:string="";
  
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
}
