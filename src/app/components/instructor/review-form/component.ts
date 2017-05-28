import { Component, OnInit} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MdSnackBar } from '@angular/material';

import { TeamBetBearForm } from '../../../classes/team-bet-bear-form';

import { FormsService } from '../../../services/forms.service';
import { FeedbackService } from '../../../services/feedback.service';

@Component({
  selector: 'app-instructor-review-form',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class InstructorReviewFormComponent implements OnInit {
  public teamBetBearForm: TeamBetBearForm;
  public formObservable: FirebaseObjectObservable<any>;

  constructor (private formsService: FormsService,
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MdSnackBar) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.initWithForm(params['id']);
      })
  }

  initWithForm(formId: string): void {
    this.formObservable = this.formsService.getForm(formId)
    this.formObservable.first().subscribe(snapshot => {
      this.teamBetBearForm = snapshot as TeamBetBearForm;
    });
  }

  completeReview(): void {
    var promises = [];
    var assignmentId = this.teamBetBearForm.assignmentId;
    this.teamBetBearForm.status = 2;
    promises.push(this.formObservable.update(this.teamBetBearForm));
    for (var s = 0; s < this.teamBetBearForm.individualBetBearForms.length; s++) {
      var iform = this.teamBetBearForm.individualBetBearForms[s];
      var revieweeId = iform.revieweeId;
      for (var b = 0; b < iform.bets.length; b++) {
        if (iform.bets[b].released) {
          promises.push(this.feedbackService.releaseBet(assignmentId, revieweeId, iform.bets[b]));
        }
      }
      for (var b = 0; b < iform.bears.length; b++) {
        if (iform.bears[b].released) {
          promises.push(this.feedbackService.releaseBear(assignmentId, revieweeId, iform.bears[b]));
        }
      }
    }
    Promise.all(promises).then(success => {
      this.router.navigate(['/instructor/dashboard']);
      this.snackbar.open("Feedback released successfully!");
      setTimeout(_ => this.snackbar.dismiss(), 5000);
    }, error => {
      console.log(error);
      this.snackbar.open("Oops, something went wrong.");
      setTimeout(_ => this.snackbar.dismiss(), 5000);
    });
  }

}
