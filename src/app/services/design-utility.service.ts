import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  currentDate :Date =new Date(); 
  
  messageAlert() {
    alert("Thank for subscribing <____________________>"+this.currentDate.toDateString());
  }

}
