import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-app-comp2',
  templateUrl: './app-comp2.component.html',
  styleUrls: ['./app-comp2.component.css']
})
export class AppComp2Component {

  username: string = "anmol"

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
