import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-react-form4',
  templateUrl: './react-form4.component.html',
  styleUrls: ['./react-form4.component.css']
})
export class ReactForm4Component {

  @ViewChild("template") template: TemplateRef<any>;
  modalRef?: BsModalRef;

  myReactiveForm: FormGroup;
  isSubmitted: boolean = false;

  genders: any[] = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' }
  ]

  formdata = {
    username: "",
    email: "",
    gender: "",
    course: "",
    skills: []
  }

  notAllowedNames = ['amit', 'deepak'];
  notAllowedEmail = ['amitzunzunkar@gmail.com', 'deepakzunzunkar@gmail.com'];

  constructor(private modalService: BsModalService) {
  }


  ngOnInit(): void {

    this.myReactiveForm = new FormGroup({

      'userDetails': new FormGroup({

        // the custome validate uses "this. " but at runtime while initialsaing this form , it doesn't recognised 'this'
        //  so we have to bind this  while calling  validators 
        'username': new FormControl(null, [Validators.required, this.customValidatorForUserName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email,this.customValidatorForEmail.bind(this)]),
        // 'email': new FormControl(null,[Validators.required,Validators.email,this.customValidatorForEmail.bind(this)],this.customAsyncValidatorForEmail12),
        'gender': new FormControl("Male"),
      }),
      'course': new FormControl("Html"),
      'skills': new FormArray([
        new FormControl(null,Validators.required)
        // new FormControl(null, [Validators.required,this.duplicateSkillValidator])
      ])
    })


  }

  addSkills() {
    (<FormArray>this.myReactiveForm.get("skills")).push(new FormControl(null, Validators.required))
  }

  removeSkills(index: any) {
    (<FormArray>this.myReactiveForm.get("skills")).removeAt(index);
  }

  getSkillControls() {
    return (this.myReactiveForm.get('skills') as FormArray).controls;
  }

  onSubmit() {
    if (this.myReactiveForm.valid) {

      this.formdata.username = this.myReactiveForm.value.userDetails.username;
      this.formdata.email = this.myReactiveForm.value.userDetails.email;
      this.formdata.gender = this.myReactiveForm.value.userDetails.gender;
      this.formdata.course = this.myReactiveForm.value.course;
      this.formdata.skills = this.myReactiveForm.value.skills;

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
    } else {
      this.myReactiveForm.markAllAsTouched();
    }
  }

  customValidatorForUserName(control: FormControl): ValidationErrors | null {
    // customValidatorForUserName(control: AbstractControl): ValidationErrors | null {

    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      // return custome error code
      return { 'nameIsNotAllowed': true }
    }
    return null;
  }

  customValidatorForEmail(control: FormControl): ValidationErrors | null {

    if (this.notAllowedEmail.indexOf(control.value) !== -1) {
      // return custome error code
      return { 'emailIsNotAllowed': true }
    }
    return null;
  }

  
  customValidatorForSkills(control: FormControl): ValidationErrors | null {

    let skills = (<FormArray>this.myReactiveForm.get("skills")).value
    if (skills.indexOf(control.value) !== -1) {
      // return custome error code
      return { 'duplicateSkill': true }
    }
    return null;
  }

  duplicateSkillValidator(): ValidationErrors | null {

    return null;
  }

  // to create asysnk validator , we have to set return type as Observable or Promise
  customAsynkValidatorForEmail(control:FormControl):  Promise<any> | null {

      const myResponse = new Promise((resolve,reject)=>{

          setTimeout( ()=>{
            if(control.value === 'akashay@gmail.com'){
                resolve({"emailAlreadyUsed" : true });
            }else{
              resolve({"emailAlreadyUsed" : false });
            } 
          },30000);

      });

    return myResponse;
  }

  customAsyncValidatorForEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'akashay@gmail.com') {
          resolve({ emailAlreadyUsed: true });
        } else {
          resolve(null);
        }
      }, 3000); // Adjust the timeout value as needed
    });
  }

  customAsyncValidatorForEmail12: AsyncValidatorFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
    return new Observable<ValidationErrors | null>((observer) => {
      setTimeout(() => {
        if (control.value === 'akashay@gmail.com') {
          observer.next({ emailAlreadyUsed: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 3000); // Adjust the timeout value as needed
    });
  };
}


// Note : not able to resolve issue regarding AsyncValidators