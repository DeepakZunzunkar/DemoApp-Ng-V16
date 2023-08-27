import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {

  products:any[]=[];

  constructor(private designUtility: DesignUtilityService) { }
  
  ngOnInit(): void {
    this.products=this.designUtility.product;
  }



}
