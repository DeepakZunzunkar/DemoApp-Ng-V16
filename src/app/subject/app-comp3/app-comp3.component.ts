import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-app-comp3',
  templateUrl: './app-comp3.component.html',
  styleUrls: ['./app-comp3.component.css']
})
export class AppComp3Component {

  username:string ="pratish";
   
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
