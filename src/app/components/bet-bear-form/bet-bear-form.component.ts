import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Bet } from '../../classes/bet';
import { Bear } from '../../classes/bear';
import { IndividualBetBearForm } from '../../classes/individual-bet-bear-form';
import { TeamBetBearForm } from '../../classes/team-bet-bear-form';

import { AF } from '../../firebase/firebase';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'bet-bear-form',
  templateUrl: './bet-bear-form.component.html',
  styleUrls: ['./bet-bear-form.component.scss']
})
export class BetBearFormComponent implements OnInit {
  private teamMembers;
  private teamBetBearForm: TeamBetBearForm;

  constructor (private afService: AF, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.teamMembers = [
      {name: 'Dave', id: '12asdf2'},
      {name: 'Joe', id: '1t234w'}
    ];

    this.route.params
      .subscribe(params => {
        if (params['id']) {
          this.initWithForm(params['id']);
        } else {
          this.initWithEmptyForm();
        }
      })
    // this.initWithForm('-Kj_rVg7vx5PZrEUzOXl');
  }

  initWithForm(formId: string): void {
    console.log(formId);
    this.afService.getForm(formId).subscribe(snapshot => {
      console.log(snapshot);
      this.teamBetBearForm = snapshot as TeamBetBearForm;
      console.log(this.teamBetBearForm);
    });
  }

  initWithEmptyForm(): void {
    this.teamBetBearForm = new TeamBetBearForm();
    this.teamBetBearForm.reviewerName = this.afService.currentUser.displayName;
    this.teamBetBearForm.reviewerId = this.afService.currentUser.uid;
    this.teamBetBearForm.status = 0;
    for (var i = 0; i < this.teamMembers.length; i++) {
      this.teamBetBearForm.addIndividualBetBearForm(this.teamMembers[i].id, this.teamMembers[i].name, 2, 2);
    }
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

  save(teamBetBearForm: TeamBetBearForm): void {
    teamBetBearForm.lastSaved = Date.now();
    this.afService.submitForm(teamBetBearForm);
  }

  submit(teamBetBearForm: TeamBetBearForm): void {
    teamBetBearForm.status = 1;
    teamBetBearForm.lastSaved = Date.now();
    this.afService.submitForm(teamBetBearForm);
  }
}
