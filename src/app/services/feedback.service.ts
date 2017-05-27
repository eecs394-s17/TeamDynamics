import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class FeedbackService {
  constructor(public db: AngularFireDatabase) {
  }

  releaseBet(assignmentId, bet) {
    this.db.list('/feedback/' + bet.revieweeId + '/' + assignmentId + '/bets').push(bet);
  }

  releaseBear(assignmentId, bear) {
    this.db.list('/feedback/' + bear.revieweeId + '/' + assignmentId + '/bears').push(bear);
  }
}