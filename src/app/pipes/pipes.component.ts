import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'pipe-comps',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{

  constructor(private designUtility: DesignUtilityService,private http :HttpClient) { }

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

  ngOnInit(): void {

    this.products=this.designUtility.product;
    this.getUsers().subscribe((user: any[])=>{
      // console.log(user);
      // this.users.push(user);
      this.users = user;
    });


  }

  
  baseUrl:string="https://jsonplaceholder.typicode.com/users";

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl);
  }

}
