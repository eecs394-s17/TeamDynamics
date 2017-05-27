import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MdSnackBar } from '@angular/material';

import { Bet } from '../../../classes/bet';
import { Bear } from '../../../classes/bear';
import { IndividualBetBearForm } from '../../../classes/individual-bet-bear-form';
import { TeamBetBearForm } from '../../../classes/team-bet-bear-form';

import { FormsService } from '../../../services/forms.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-bet-bear-form',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class StudentBetBearFormComponent implements OnInit {
  public teamBetBearForm: TeamBetBearForm;
  public formObservable: FirebaseObjectObservable<any>;

  constructor (private formsService: FormsService,
    private usersService: UsersService,
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

  addBet(betBearForm: IndividualBetBearForm): void {
    betBearForm.bets.push(new Bet());
  }

  addBear(betBearForm: IndividualBetBearForm): void {
    betBearForm.bears.push(new Bear());
  }

  removeBet(betBearForm: IndividualBetBearForm, j: number): void {
    betBearForm.bets.splice(j,1);
  }

  removeBear(betBearForm: IndividualBetBearForm, j: number): void {
    betBearForm.bears.splice(j,1);
  }

  save(): void {
    this.teamBetBearForm.lastSaved = Date.now();
    this.formObservable.update(this.teamBetBearForm).then(success => {
      this.snackbar.open("Form saved successfully!");
      setTimeout(_ => this.snackbar.dismiss(), 5000);
    }, error => {
      console.log(error);
    });
  }

  submit(): void {
    this.teamBetBearForm.status = 1;
    this.teamBetBearForm.lastSaved = Date.now();
    this.formObservable.update(this.teamBetBearForm).then(success => {
      this.router.navigate(['/student/dashboard']);
      this.snackbar.open("Form submitted successfully!");
      setTimeout(_ => this.snackbar.dismiss(), 5000);
    }, error => {
      console.log(error);
    });
  }
}
