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
  
  setUserName(){

    //setValue : all the values in the form ,has to set otherwise it won't work
    // this.myForm.setValue({
    //    userDetails : {
    //        username : "Dz", 
    //        email: "dz@gmail.com", 
    //        gender: "Female"
    //    },
    //    course: "Css" 
    
    //   });

    // patchValue : we can set particular one field of the form . 
    this.myForm.form.patchValue({

      userDetails : {
          username: "amit"
      }

    });
    
  }
}
