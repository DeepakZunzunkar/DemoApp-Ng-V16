import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-react-form3',
  templateUrl: './react-form3.component.html',
  styleUrls: ['./react-form3.component.css']
})
export class ReactForm3Component {

  myReactiveForm:FormGroup;

  @ViewChild("template") template: TemplateRef<any>;

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

  constructor(private modalService: BsModalService){

  }


  ngOnInit(): void {
    
      this.myReactiveForm=new FormGroup({

        'userDetails': new FormGroup({
          
          'username':new FormControl(null,Validators.required),
          'email':new FormControl(null,[Validators.required,Validators.email]),
          'gender':new FormControl("Male"),
        }),
        'course':new FormControl("Html"),
      })
  }

  onSubmit(){
    // console.log(this.myReactiveForm.value);
    if(this.myReactiveForm.valid){

      this.formdata.username = this.myReactiveForm.value.userDetails.username;
      this.formdata.email = this.myReactiveForm.value.userDetails.email;
      this.formdata.gender = this.myReactiveForm.value.userDetails.gender;
      this.formdata.course = this.myReactiveForm.value.course;

      this.modalRef = this.modalService.show(this.template);

      this.modalService.onHide.subscribe((reason: string | any) => {
        if (typeof reason !== 'string') {
          reason = `onHide(), modalId is : ${reason.id}`;
        }
        const _reason = reason ? `, dismissed by ${reason}` : '';
        console.log(`onHide event has been fired${_reason}`);

        // reset form state and it's value 
        // this.myReactiveForm.resetForm();

      });
    }
  }
}
