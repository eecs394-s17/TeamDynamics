import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';
import { UsersService } from './users.service';

@Injectable()

export class FormsService {
  constructor(  public db: AngularFireDatabase,
                public usersService: UsersService,
                private snackbar: MdSnackBar,) {
  }

  allForms(): FirebaseListObservable<any> {
    return this.db.list('/forms');
  }

  getForm(id: string): FirebaseObjectObservable<any> {
    return this.db.object('forms/' + id);
  }

  formsByUserId(userid: string): FirebaseListObservable<any> {
    return this.db.list('/forms', {
      query: {
        orderByChild: 'reviewerId',
        equalTo: userid
      }
    });
  }

  submitForm(formObject): void {
    this.db.list('/forms').push(formObject).then(success => {
        console.log(success);
        this.snackbar.open("Form uploaded successfully!");
        setTimeout(_ => this.snackbar.dismiss(), 5000);
      }, error => {
        console.log(error);
      });
  }

  saveForm(formObject): void {
    this.db.list('/forms').push(formObject).then( success => {
      console.log(success);
      this.snackbar.open("Form saved successfully!");
      setTimeout(_ => this.snackbar.dismiss(), 5000);
    }, error => {
      console.log(error);
    });
  }
}