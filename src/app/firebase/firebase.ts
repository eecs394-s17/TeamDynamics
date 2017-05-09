import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class AF {
  public hostList: FirebaseListObservable<any>;
  public formsList: FirebaseListObservable<any>;
  public currentUser;

  constructor(public af: AngularFire, private snackbar: MdSnackBar) {
    this.formsList = this.af.database.list('/forms');
  }

  submitForm(formObject): void {
    this.formsList.push(formObject).then( success => {
        console.log(success);
        this.snackbar.open("Form uploaded successfully!");
        setTimeout(_ => this.snackbar.dismiss(), 5000);
      }, error => {
        console.log(error);
      });
  }

  saveForm(formObject): void {
    this.formsList.push(formObject).then( success => {
      console.log(success);
      this.snackbar.open("Form saved successfully!");
      setTimeout(_ => this.snackbar.dismiss(), 5000);
    }, error => {
      console.log(error);
    });
  }

  getForm(id: string): FirebaseObjectObservable<any> {
    return this.af.database.object('forms/' + id);
  }

  login(){
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(data => {
      console.log('success');
      console.log(data);

      this.currentUser = data.auth;
      return Promise.resolve(true);
    }, err => {
      console.log(err);
      return Promise.resolve(false);
    });
  }

  logout(): Promise<any>{
    this.currentUser = null;
    return this.af.auth.logout();
  }

  formsByUserId(userid: string): FirebaseListObservable<any> {
    return this.af.database.list('/forms', {
      query: {
        orderByChild: 'reviewerId',
        equalTo: userid
      }
    });
  }
}
