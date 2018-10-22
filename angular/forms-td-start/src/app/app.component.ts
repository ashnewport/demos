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

  suggestUserName() {
    const suggestedName = 'Superuser';
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
