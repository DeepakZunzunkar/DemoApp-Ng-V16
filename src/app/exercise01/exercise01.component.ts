import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise01',
  templateUrl: './exercise01.component.html',
  styleUrls: ['./exercise01.component.css']
})
export class Exercise01Component {

  users: any[] = [];
  admins: any[] = [];
  countA:number=0;
  countU:number=0;

  // users
  pushUserInput(data: any) {
    this.users.push(data);
    console.log(this.users.length);
  }

  removeUser(item: any) {
    console.log(this.users.length);
    this.users.splice(item, 1);
    this.countU=this.users.length;
    console.log(this.users.length);
    console.log(this.countU);

  }

  // admins
  pushAdminInput(data: any) {
    this.admins.push(data);
    this.countA=this.admins.length;
  }

  removeAdmin(item: any) {
    this.admins.splice(item, 1);
    
  }

}
