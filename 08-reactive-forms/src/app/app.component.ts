import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['root', 'sys', 'system', 'sudo', 'admin', 'administrator', 'apache', 'host', 'shutdown']
  userData = {
    username: '',
    email: '',
    gender: '',
    hobbies: []
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, Validators.minLength(6), this.forbiddenNames]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // the following subscriptions are great for troubleshooting validation challenges
    //
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    // when loading a form with data from a DB you can set and patch...
    // 
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Charles',
    //     'email': 'chas@email.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Larry'
    //   }
    // });
  }

  onSubmit() {
    this.userData.email = this.signupForm.value.userData.email;
    this.userData.username = this.signupForm.value.userData.username;
    this.userData.gender = this.signupForm.value.gender;
    this.userData.hobbies.length = 0;
    this.userData.hobbies = this.signupForm.value.hobbies;

    // clear and initialize the form, reset only clears the values, it
    // doesn't 
    this.signupForm.reset();
    this.signupForm.patchValue({
      'gender': 'male',
      'hobbies': []
    });

    console.log(this.userData);
  }

  getHobbies() {
    return <FormArray>this.signupForm.get('hobbies');
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames = (control: FormControl): { [s: string]: boolean } | null => {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails = (control: FormControl): Promise<any> | Observable<any> => {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
