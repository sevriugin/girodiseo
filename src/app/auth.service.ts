import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, of  } from 'rxjs';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private confirmation: firebase.auth.ConfirmationResult;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;

      this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
          console.log(`AuthService: constructor: userDetails:`);
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  getUser(): Observable<firebase.User> {
    return this.user;
  }

  signInWithPhoneNumber(phoneNumber: string, appVerifier: any, cb: Function) {
    this._firebaseAuth.auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmationResult => {
        this.confirmation = confirmationResult; // make a copy
        console.log(`AuthService: signInWithPhoneNumber: confirmation object`);
        console.log(this.confirmation);

        cb(null, confirmationResult);
      })
      .catch(error => {
        console.error(`AuthService: signInWithPhoneNumber: ${error}`);
        cb(error, null);
      });
  }

  getConfirmation(code: string, cb: Function) {
    if (!this.confirmation) {
      const errMsg = 'AuthSevice: error: the confirmationResult object is missing';
      console.error(errMsg);
      cb(errMsg, null);
    } else {
      // check confirmation
      this.confirmation.confirm(code)
        .then(result => { this.user = of(result.user); cb(null, result.user); })
        .catch(error => cb(error, null));
    }
  }

  authenticated(): boolean {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  getUID(): string | null {
    if (this.userDetails == null ) {
      return null;
    } else {
      return this.userDetails.uid;
    }
  }

  logout(): void {
    this._firebaseAuth.auth.signOut().then(() => {
      // Sign-out successful.
      console.log(`AuthService: sing out`);
      this.router.navigate(['/']);
    }).catch((error) => {
      console.error(`AuthService: error: ${error}`);
    });
  }

  getUserPhone(): string | null {
    if (!this.userDetails) {
      return null;
    } else {
      return this.userDetails.phoneNumber;
    }
  }

  getUserName(): string | null {
    if (!this.userDetails) {
      return null;
    } else {
      return this.userDetails.displayName;
    }
  }

  getUserEmail(): string | null {
    if (!this.userDetails) {
      return null;
    } else {
      return this.userDetails.email;
    }
  }

  getUserPhotoURL(): string | null {
    if (!this.userDetails) {
      return null;
    } else {
      return this.userDetails.photoURL;
    }
  }

  updateProfileCB(username: string, photoURL: string, cb: Function): void {
    const user = this._firebaseAuth.auth.currentUser;
    user.updateProfile({ displayName: username, photoURL: photoURL })
      .then(() => cb(null))
      .catch((error) => cb(error));
  }

  updateEmailCB(email: string, cb: Function): void {
    const user = this._firebaseAuth.auth.currentUser;
    user.updateEmail(email)
      .then(() => cb(null))
      .catch((error) => cb(error));
  }
}
