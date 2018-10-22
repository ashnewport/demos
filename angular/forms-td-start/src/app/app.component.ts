import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // set all values; must match JSON from ngForm in console.log
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    // only updated specific value
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // ngSubmit and ngForm approach
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // ViewChild approach
  onSubmit() {
    console.log(this.signupForm);
  }
}
