import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempd-form2',
  templateUrl: './tempd-form2.component.html',
  styleUrls: ['./tempd-form2.component.css']
})
export class TempdForm2Component {

  @ViewChild('myForm') myForm:NgForm;

  defaultCourse:any="Html";
  
  onSubmit(){
    console.log(this.myForm);
  }


}
