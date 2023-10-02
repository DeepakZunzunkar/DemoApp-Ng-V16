import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'pipe-comps',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{


  product={
    name:"",
    price:"",
    quantity:""
  }

  constructor(private designUtility: DesignUtilityService,private http :HttpClient,private modalService: BsModalService) { }

  products:any[]=[];
  users:any[]=[];
  header:string="Pipes";
  description:string="it is one of the feuture of Angular using which we can transform output data in template."
  date:Date=new Date();

  header1:string="Custome Pipe";
  description1:string="custom pipe is required to transform the output as per our requirement and we can parameterised the pipe as well";

  decrip2:string="Angular is a TypeScript-based open-source web application framework, developed and maintained by Google. angular2 is component based approch component are the individual and free peice of logic and view everything in angular2 is component based";

  header2:string="Filter Pipe";
  
  myInput:any;
  header3:string="Pure and Impure Pipe";
  description3:string="Whenever pipe transaform the data it means that it detect the change and executed."
  description3_1:string= "pure pipe are those pipe which is executed when there is pure change detect in pipe like input value and parameter ,"+
   "it means that pure pipe mostly focus on when there is change detect in input value and parameter. "+
   "by default pipe is pure it means pure property of pipe is true";

  description3_2:string= "Impure pipe is executed whene there is change detected in angular app. "+
              "whatever change detect like in input value ,parameter ,change detect in component  it is executed for every change detect "+
              "so thats why there is chance of performnce issue because of impure pipe ";

  modalRef?: BsModalRef;


  ngOnInit(): void {

    this.products=this.designUtility.product;
    this.getUsers().subscribe((user: any[])=>{
      // console.log(user);
      // this.users.push(user);
      this.users = user;
    });


  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  baseUrl:string="https://jsonplaceholder.typicode.com/users";

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  addProduct(){
      // console.log(this.product);
      this.products.push(this.product);
      this.product={
        name:"",
        price:"",
        quantity:""
      }


      this.modalRef?.hide();

  }

  addPrd(prd:any){

    this.products.push({
      id :6 , 
      name:prd.value,
      price:15000.00,
      quantity:12
    });

  }

}
