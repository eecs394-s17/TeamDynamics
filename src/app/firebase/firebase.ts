import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'firebase';

@Injectable()

export class AF {
  public hostList: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {}
}
