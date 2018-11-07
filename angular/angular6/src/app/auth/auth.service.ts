import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log('createUserWithEmailAndPassword', error)
      );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log('signInWithEmailAndPassword', response)
      )
      .catch(
        error => console.log('signInWithEmailAndPassword', error)
      );
  }
}
