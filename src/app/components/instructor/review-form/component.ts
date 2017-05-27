import { Component, OnInit} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

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
    private router: Router) {}

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

  releaseBet(bet): void {
    this.feedbackService.releaseBet(this.teamBetBearForm.assignmentId, bet); 
  }

  releaseBear(bear): void {
    this.feedbackService.releaseBear(this.teamBetBearForm.assignmentId, bear);
  }

  markAsReviewed(): void {
    this.formObservable.update({
      'status': 2
    });
  }
}
