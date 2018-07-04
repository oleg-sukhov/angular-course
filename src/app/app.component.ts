import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer: string;
  genders = ['male', 'female'];
  user = { username: '', email: '', secretQuestion: '', answer: '', gender: ''};
  submited = false;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    this.submited = true;
    this.signupForm.reset();
  }

  fillUserName() {
    this.signupForm.form.patchValue({
      userData: {
        username: 'TestUser'
      }
    });
  }
}
