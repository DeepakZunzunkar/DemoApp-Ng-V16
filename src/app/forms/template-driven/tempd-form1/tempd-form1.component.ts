import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempd-form1',
  templateUrl: './tempd-form1.component.html',
  styleUrls: ['./tempd-form1.component.css']
})
export class TempdForm1Component {

  @ViewChild('myForm') myForm:NgForm;

  defaultCourse:any="Html";
  
  username:any;
  
  onSubmit(){
    console.log(this.myForm.form);
  }

}
