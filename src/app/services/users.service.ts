import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class UsersService {
  public authState: Observable<firebase.User>;
  public user: FirebaseObjectObservable<any>;

  constructor(public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public router: Router,
    private snackbar: MdSnackBar) {

    this.authState = afAuth.authState;
    this.authState.subscribe((auth) => {
      if (auth != null) {
        console.log(auth);
        this.user = this.db.object('/users/' + this.encodeKey(auth.email));
        this.user.subscribe((user) => {
          if (!user.$exists()) {
            router.navigate(['/login-page']);
            this.snackbar.open("Oops, this user does not have an account yet! Ask your instructor for a new account.");
            setTimeout(_ => this.snackbar.dismiss(), 5000);
          } else {
            router.navigate(['/student-dashboard']);
          }
        });
      } else {
        router.navigate(['/login-page']);
      }
    });
  }

  login(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

  encodeKey(s) {
    return encodeURIComponent(s).split('.').join('%2e');
  }
}