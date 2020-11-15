import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire: AngularFireAuth) { }

  async loginWithGoogle(): Promise<void> {
    try {
      const response = await this.authFire.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
      if (response) {
        localStorage.setItem('user', JSON.stringify(response));
      }
    } catch (err) {
      return console.log(err);
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') != null;
  }

  getCurrentUser(): Observable<firebase.default.User> {
    return this.authFire.authState;
  }

  async logout(): Promise<void> {
    try {
      await this.authFire.signOut();
      localStorage.removeItem('user');
    } catch (err) {
      console.log(err);
    }
  }
}
