import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {

  products:any[]=[];
  users:any[]=[];

  constructor(private designUtility: DesignUtilityService,private http :HttpClient) { }
  
  ngOnInit(): void {
    this.products=this.designUtility.product;

    this.getUsers().subscribe(user=>{
      // console.log(user);
      // this.users.push(user);
      this.users = user;
      console.log(this.users);
    });


  }

  
  baseUrl:string="https://jsonplaceholder.typicode.com/users";

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl);
  }



}
