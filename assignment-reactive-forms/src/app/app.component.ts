import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['stable', 'critical', 'finished'];
  forbiddenProjectNames = ['Test', 'test']
  project: FormGroup;

  ngOnInit() {
    this.project = new FormGroup({
      'projectName': new FormControl(null, [Validators.required],this.asyncForbiddenNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log('submitted');
  }

  // forbiddenNames = (control: FormControl): { [s: string]: boolean } | null => {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return { 'nameIsForbidden': true };
  //   }
  //   return null;
  // }

  asyncForbiddenNames = (control: FormControl): Promise<any> | Observable <any> => {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({ 'nameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
