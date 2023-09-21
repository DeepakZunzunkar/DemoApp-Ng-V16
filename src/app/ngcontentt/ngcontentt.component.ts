import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-ngcontentt',
  templateUrl: './ngcontentt.component.html',
  styleUrls: ['./ngcontentt.component.css']
})
export class NgcontenttComponent implements OnInit{
  
  products:any[]=[];
  status:boolean=false;

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this.products=this.designUtility.product;
  }

}
