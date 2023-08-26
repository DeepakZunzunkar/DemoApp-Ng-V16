import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  productSelected:boolean=false;
  product:string='';
  isadded:any;

  onSelectProduct(product:string){
    this.productSelected=true;
    this.product=product;
  }

  addToCart(){
    this.isadded=this.product;
  }

}
