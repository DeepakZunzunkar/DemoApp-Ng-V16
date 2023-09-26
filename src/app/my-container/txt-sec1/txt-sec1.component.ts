import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-txt-sec1',
  templateUrl: './txt-sec1.component.html',
  styleUrls: ['./txt-sec1.component.css']
})
export class TxtSec1Component {

  txthead:string="Develop Across All Platform"

  constructor(private designUtility:DesignUtilityService){

  }

  onSubscribe(){
    // var alertService = new AlertService();
    // alertService.messageAlert();

    this.designUtility.messageAlert();

  }
}
