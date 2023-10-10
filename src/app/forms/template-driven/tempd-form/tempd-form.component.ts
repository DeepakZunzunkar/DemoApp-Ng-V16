import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempd-form',
  templateUrl: './tempd-form.component.html',
  styleUrls: ['./tempd-form.component.css']
})
export class TempdFormComponent {

  defaultCourse:any="Angular";
  
  // onSubmit(myForm:HTMLFormElement){
  //   console.log(myForm);
  // }

  onSubmit(myForm:NgForm){
    console.log(myForm);
    // console.log(myForm.form);
  }


}
