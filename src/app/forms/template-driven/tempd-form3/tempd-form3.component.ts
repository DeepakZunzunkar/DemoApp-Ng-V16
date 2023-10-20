import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-tempd-form3',
  templateUrl: './tempd-form3.component.html',
  styleUrls: ['./tempd-form3.component.css']
})
export class TempdForm3Component {

  @ViewChild('myForm') myForm:NgForm;

  @ViewChild("template") template: TemplateRef<any>;

  defaultCourse:any="Javascript";

  defaultGender:any="Male"

  genders:any[]=[
    { id:1, value:'Male'},
    { id:2, value:'Female'}
  ]
  
  formdata = {
    username:"",
    email:"",
    gender:"",
    course:"",

  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService,private changeDetection: ChangeDetectorRef){

  }

  onSubmit(){
    console.log(this.myForm);
    
    if(this.myForm.valid){

      this.formdata.username = this.myForm.value.userDetails.username;
      this.formdata.email = this.myForm.value.userDetails.email;
      this.formdata.gender = this.myForm.value.userDetails.gender;
      this.formdata.course = this.myForm.value.course;

      this.modalRef = this.modalService.show(this.template);
      
      // const _combine = combineLatest(
      //   this.modalService.onShow,
      //   this.modalService.onShown,
      //   this.modalService.onHide,
      //   this.modalService.onHidden
      // ).subscribe(() => this.changeDetection.markForCheck());


      this.modalService.onHide.subscribe((reason: string | any) => {
        if (typeof reason !== 'string') {
          reason = `onHide(), modalId is : ${reason.id}`;
        }
        const _reason = reason ? `, dismissed by ${reason}` : '';
        console.log(`onHide event has been fired${_reason}`);

        // reset form state and it's value 
        this.myForm.resetForm();

      });


      // this.modalService.onHidden.subscribe((reason: string | any) => {
      //   if (typeof reason !== 'string') {
      //     reason = `onHide(), modalId is : ${reason.id}`;
      //   }
      //   const _reason = reason ? `, dismissed by ${reason}` : '';
      //   console.log(`onHidden event has been fired${_reason}`);
        
      // })

    }

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
