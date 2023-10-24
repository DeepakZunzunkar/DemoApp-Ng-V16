import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-react-form1',
  templateUrl: './react-form1.component.html',
  styleUrls: ['./react-form1.component.css']
})
export class ReactForm1Component implements OnInit{
  
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

  constructor(private modalService: BsModalService,private changeDetection: ChangeDetectorRef){

  }


  ngOnInit(): void {
    
      this.myReactiveForm=new FormGroup({
        'username':new FormControl(null),
        'email':new FormControl(null),
        'gender':new FormControl("Male"),
        'course':new FormControl("Html"),
      })
  }

  onSubmit(){
    // console.log(this.myReactiveForm.value);
    if(this.myReactiveForm.valid){

      this.formdata.username = this.myReactiveForm.value.username;
      this.formdata.email = this.myReactiveForm.value.email;
      this.formdata.gender = this.myReactiveForm.value.gender;
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
