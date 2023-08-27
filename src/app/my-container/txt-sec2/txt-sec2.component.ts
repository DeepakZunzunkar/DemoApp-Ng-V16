import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-txt-sec2',
  templateUrl: './txt-sec2.component.html',
  styleUrls: ['./txt-sec2.component.css']
})
export class TxtSec2Component {

  constructor(private designUtility:DesignUtilityService){

  }

  onSubscribe(){
    // var alertService = new AlertService();
    // alertService.messageAlert();

    this.designUtility.messageAlert();
  }



}
