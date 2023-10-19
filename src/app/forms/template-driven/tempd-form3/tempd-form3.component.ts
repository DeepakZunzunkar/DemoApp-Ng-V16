import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempd-form3',
  templateUrl: './tempd-form3.component.html',
  styleUrls: ['./tempd-form3.component.css']
})
export class TempdForm3Component {

  @ViewChild('myForm') myForm:NgForm;

  defaultCourse:any="Javascript";

  defaultGender:any="Male"

  genders:any[]=[
    { id:1, value:'Male'},
    { id:2, value:'Female'}
  ]
  
  onSubmit(){
    console.log(this.myForm);
  }
  
}
