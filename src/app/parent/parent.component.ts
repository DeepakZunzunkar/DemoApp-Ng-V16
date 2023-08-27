import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  isSelect:boolean=false;
  selectedProduct:string='';
  isadded:any;

  onSelectProduct(product:string){
    this.isSelect=true;
    this.selectedProduct=product;
  }

  onAddedProduct(event:string){
    this.isadded = event;
  }
}
