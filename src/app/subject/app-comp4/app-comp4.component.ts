import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-app-comp4',
  templateUrl: './app-comp4.component.html',
  styleUrls: ['./app-comp4.component.css']
})
export class AppComp4Component {

  username: string = "sumit";
  
  constructor(private _designUtilty: DesignUtilityService) {
    this._designUtilty.userName.subscribe(uname => {
      this.username = uname;
    });
  }

  updateUserName(username: any) {
     // this.username =username.value;
    this._designUtilty.userName.next(username.value);
  }

}
