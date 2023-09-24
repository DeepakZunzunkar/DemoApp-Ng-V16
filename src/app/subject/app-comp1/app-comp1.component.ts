import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-app-comp1',
  templateUrl: './app-comp1.component.html',
  styleUrls: ['./app-comp1.component.css']
})
export class AppComp1Component {
  
  username:string="amit";

  constructor(private _designUtilty:DesignUtilityService){

      this._designUtilty.userName.subscribe(uname=>{
        this.username=uname;
      });
  }

  updateUserName(username:any){
    // this.username =username.value;
    this._designUtilty.userName.next(username.value);
  }
  
}
