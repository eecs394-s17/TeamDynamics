import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class AF {
  public hostList: FirebaseListObservable<any>;
  public formsList: FirebaseListObservable<any>;

  constructor(public af: AngularFire, private snackbar: MdSnackBar) {
    this.formsList = this.af.database.list('/forms');
  }

  uploadForm(formObject): void {
    this.formsList.push(formObject).then( success => {
        console.log(success);
        this.snackbar.open("Form uploaded successfully!");
        setTimeout(_ => this.snackbar.dismiss(), 5000);
      }, error => {
        console.log(error);
      });
  }

  login(email:string, psw:string){
    this.af.auth.login({ email: email, password: psw }).then(success => {
      console.log('success');
    }, err => {
      alert('Email or Password is incorrect.');
    });
  }
  logout(){
    this.af.auth.logout();
  }

}
