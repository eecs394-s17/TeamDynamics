import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AF } from '../../firebase/firebase';

@Component({
  selector: 'bet-bear-form',
  templateUrl: './bet-bear-form.component.html',
  styleUrls: ['./bet-bear-form.component.scss']
})
export class BetBearFormComponent implements OnInit{
  teamMembers: Array<string>;
  private betBearForm: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private afService: AF) {

    this.teamMembers = [
      'Dave',
      'Joe',
      'Judy',
      'Kira'
    ];

    this.betBearForm = formBuilder.group({
      bet_1_behavior: [''],
      bet_1_effect: [''],
      bet_1_thankYou: [''],
      bear_1_behavior: [''],
      bear_1_effect: [''],
      bear_1_alternative: [''],
      bear_1_result: [''],
      bet_2_behavior: [''],
      bet_2_effect: [''],
      bet_2_thankYou: [''],
      bear_2_behavior: [''],
      bear_2_effect: [''],
      bear_2_alternative: [''],
      bear_2_result: [''],
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.afService.uploadForm({
      'reviewerId': 'me',
      'revieweeId': 'James',
      'status': 0,
      'BETs': [
        {
          'behavior': this.betBearForm.value.bet_1_behavior,
          'effect': this.betBearForm.value.bet_1_effect,
          'thankYou': this.betBearForm.value.bet_1_thankYou
        },
        {
          'behavior': this.betBearForm.value.bet_2_behavior,
          'effect': this.betBearForm.value.bet_2_effect,
          'thankYou': this.betBearForm.value.bet_2_thankYou
        },
      ],
      'BEARs': [
        {
          'behavior': this.betBearForm.value.bear_1_behavior,
          'effect': this.betBearForm.value.bear_1_effect,
          'alternative': this.betBearForm.value.bear_1_alternative,
          'result': this.betBearForm.value.bear_1_result
        },
        {
          'behavior': this.betBearForm.value.bear_2_behavior,
          'effect': this.betBearForm.value.bear_2_effect,
          'alternative': this.betBearForm.value.bear_2_alternative,
          'result': this.betBearForm.value.bear_2_result
        },
      ],
    });
  }
}