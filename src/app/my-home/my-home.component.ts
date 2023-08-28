import { Component } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent {

  title = 'Wlecome to Demo App - Angular v16';
  currentDateTime: Date = new Date();
  
  appstatus:boolean=true;

  
}
