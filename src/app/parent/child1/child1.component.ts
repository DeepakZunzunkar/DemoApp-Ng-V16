import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  @Input()
  productSelected:boolean=false;
  
  @Input()
  product:string='';

  @Output()
  addedProduct = new EventEmitter<string>();

  onSelectProduct(product:string){
    this.productSelected=true;
    this.product=product;
  }

  addToCart(){
    this.addedProduct.emit(this.product);
  }
}
