import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-react-form3',
  templateUrl: './react-form3.component.html',
  styleUrls: ['./react-form3.component.css']
})
export class ReactForm3Component {

  myReactiveForm:FormGroup;

  isSubmitted:boolean=false;

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
    skills:[]
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
        'skills':new FormArray([
          new FormControl(null,Validators.required)
        ])
      })

      
  }

  addSkills(){
      (<FormArray>this.myReactiveForm.get("skills")).push(new FormControl(null,Validators.required))
  }  
  
  removeSkills(index:any){
    (<FormArray>this.myReactiveForm.get("skills")).removeAt(index);
  }

  getSkillControls() {
    return (this.myReactiveForm.get('skills') as FormArray).controls;
  }

  onSubmit(){
    // console.log(this.myReactiveForm.value);
    if(this.myReactiveForm.valid){

      this.formdata.username = this.myReactiveForm.value.userDetails.username;
      this.formdata.email = this.myReactiveForm.value.userDetails.email;
      this.formdata.gender = this.myReactiveForm.value.userDetails.gender;
      this.formdata.course = this.myReactiveForm.value.course;
      this.formdata.skills = this.myReactiveForm.value.skills;

      // this.formdata.skills.push(this.myReactiveForm.value.skills)


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
    }else{

        // this.myReactiveForm.controls.forEach((element:any) => {
          
        // });

        this.myReactiveForm.markAllAsTouched();

        Object.keys(this.myReactiveForm.controls).forEach(key => {
            // this.myReactiveForm.controls[key].markAsDirty();
            // this.myReactiveForm.controls[key].markAsTouched();
            let abstractControl = this.myReactiveForm.controls[key];

            if (abstractControl instanceof FormGroup) {

                Object.keys(abstractControl.controls).forEach(key2 =>{

                  (<FormGroup>abstractControl).controls[key2].markAsTouched();

                });

            }if(abstractControl instanceof FormArray){

              // abstractControl.markAllAsTouched();

              Object.keys(abstractControl.controls).forEach(key3 =>{

                // (<FormArray>abstractControl).controls
                // (<FormControl>abstractControl.controls[key3]).markAsTouched();

              });

              abstractControl.controls.forEach(ss =>{

                console.log(ss);

                Object.keys(ss).forEach(dd =>{
                  console.log(dd);
                });
                
                // this.myReactiveForm.controls[ss].markAsTouched(); 

              });

              // const formArray = abstractControl.controls

            }else{
              this.myReactiveForm.controls[key].markAsTouched();
            }

        });
    }
  }

  //   public markControlsDirty(group: FormGroup | FormArray): void {
  //     Object.keys(group.controls).forEach((key: string) => {
  //         const abstractControl = group.controls[key];

  //         if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
  //             this.markControlsDirty(abstractControl);
  //         } else {
  //             abstractControl.markAsDirty();
  //         }
  //     });
  // }

}
