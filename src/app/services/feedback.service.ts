import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class FeedbackService {
  constructor(public db: AngularFireDatabase) {
  }

  releaseBet(assignmentId, revieweeId, bet) {
    return this.db.list('/feedback/' + revieweeId + '/' + assignmentId + '/bets').push(bet);
  }

  releaseBear(assignmentId, revieweeId, bear) {
    return this.db.list('/feedback/' + revieweeId + '/' + assignmentId + '/bears').push(bear);
  }
  getFeedback(user){
    return this.db.list('/feedback/' + user);
  }

}
