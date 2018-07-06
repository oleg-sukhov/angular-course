import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenNames = ['Anna', 'Mark'];
  signupForm: FormGroup;
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished']

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isNameForbidden.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.isEmailForbidden)
      }),
      'gender': new FormControl(this.genders[0]),
      'hobbies': new FormArray([])
    });
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
    this.signupForm.patchValue({
      'userData': {
        'username': 'DefaultUserName'
      }
    });
    this.projectForm = this.createProjectForm();
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  isNameForbidden(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { isNameForbidden: true };
    }
    return null;
  }

  isEmailForbidden(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 't@email.ua') {
          return resolve({ emailForbidden: true });
        } else {
          return resolve(null);
        }
      }, 2000);
    });
  }

  onProjectSubmit() {
    console.log(this.projectForm.value);
  }

  createProjectForm(): FormGroup {
    return new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.isTestNameForbidden]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  isTestNameForbidden(control: FormControl): { [s: string]: boolean } {
    if ('Test' === control.value) {
      return { isTestNameForbidden: true };
    }
    return null;

  }
}
