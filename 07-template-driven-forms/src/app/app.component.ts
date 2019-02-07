import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm') signupForm: NgForm;
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'default';
    // .setValue is good for setting the whole form like HTTP SET
    // this.signupForm.setValue(
    //   {
    //     userData: {
    //       username: suggestedName,
    //       email: ''
    //     },
    //     secret: 'pet',
    //     gender: 'male'
    //   }
    // );

    // .patchValue is good for setting part of a form like HTTP PATCH
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // for use when passing form onSubmit
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // for use with NgForm impl, useful when accessing 
  // the form before submitting.
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset()

    // you can also pass an object like the following to reset to specific values
    // this.signupForm.reset(
    //   {
    //     userData: {
    //       username: '',
    //       email: ''
    //     },
    //     secret: '',
    //     gender: ''
    //   }
    // );
  }
}
