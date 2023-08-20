import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  dynamicName = "amit";
  appStatus: boolean = false;
  status1 = "Online";
  status2 = "offline";

  ngOnInit(): void {

  }

  myMethod() {
    return "My Name is  " + this.dynamicName;
  }

  getInfo(inptinfo:any) {
    console.log(inptinfo);
    // console.log(inptinfo.value);
    this.dynamicName=inptinfo.value;
  }
}
