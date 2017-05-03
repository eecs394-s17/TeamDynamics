import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'firebase';

@Injectable()

export class AF {
  public hostList: FirebaseListObservable<any>;
  private formsList: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {
    this.formsList = this.af.database.list('/forms');
  }

  uploadForm(formObject): void {
    console.log(formObject);
    this.formsList.push(formObject).then( success => {
        console.log(success);
      }, error => {
        console.log(error);
      });
  }
}
