import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AF } from '../../firebase/firebase';

@Component({
  selector: 'individual-bet-bear-form',
  templateUrl: './individual-bet-bear-form.component.html',
})
export class IndividualBetBearFormComponent implements OnInit{
  @Input('reviewee') private reviewee: string;
  private betBearForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private afService: AF) {}

  ngOnInit(): void {
    this.betBearForm = this.formBuilder.group({
      bets: this.formBuilder.array([]),
      bears: this.formBuilder.array([]),
      reviewer: ['Me'],
      reviewee: [this.reviewee]
    });

    this.addBet();
    this.addBet();
    this.addBear();
    this.addBear();
  }

  initBet(): FormGroup {
    return this.formBuilder.group({
      behavior: [''],
      effect: [''],
      thankYou: [''] 
    });
  }

  initBear(): FormGroup {
    return this.formBuilder.group({
      behavior: [''],
      effect: [''],
      alternative: [''],
      result: [''] 
    });
  }

  addBet(): void {
    const control = <FormArray>this.betBearForm.controls['bets'];
    const addrCtrl = this.initBet();
    control.push(addrCtrl);
  }

  addBear(): void {
    const control = <FormArray>this.betBearForm.controls['bears'];
    const addrCtrl = this.initBear();
    control.push(addrCtrl);
  }

  removeBet(i: number) {
      const control = <FormArray>this.betBearForm.controls['bets'];
      control.removeAt(i);
  }

  removeBear(i: number) {
      const control = <FormArray>this.betBearForm.controls['bears'];
      control.removeAt(i);
  }

  save(model): void {
    this.afService.uploadForm(model.value);
  }
}