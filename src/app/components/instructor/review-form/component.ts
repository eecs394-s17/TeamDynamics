import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Bet } from '../../../classes/bet';
import { Bear } from '../../../classes/bear';
import { IndividualBetBearForm } from '../../../classes/individual-bet-bear-form';
import { TeamBetBearForm } from '../../../classes/team-bet-bear-form';

import { FormsService } from '../../../services/forms.service';
import { UsersService } from '../../../services/users.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-instructor-review-form',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class InstructorReviewFormComponent implements OnInit {
  public teamBetBearForm: TeamBetBearForm;

  constructor (private formsService: FormsService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.initWithForm(params['id']);
      })
  }

  initWithForm(formId: string): void {
    this.formsService.getForm(formId).first().subscribe(snapshot => {
      this.teamBetBearForm = snapshot as TeamBetBearForm;
    });
  }
}
