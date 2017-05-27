import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class AssignmentsService {
  constructor(public db: AngularFireDatabase) {}

  allAssignments(): FirebaseListObservable<any> {
    return this.db.list('/assignments', {
      query: {
        orderByChild: 'endDate'
      }
    });
  }
}