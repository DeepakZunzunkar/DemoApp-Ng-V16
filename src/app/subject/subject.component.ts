import { Component } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

 constructor(private _designUtilty:DesignUtilityService){

      this._designUtilty.userName.subscribe(uname=>{
          this.username =uname;
      })
 } 

 username:string ="deepak"

}
