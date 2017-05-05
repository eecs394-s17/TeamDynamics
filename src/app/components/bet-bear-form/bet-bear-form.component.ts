import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AF } from '../../firebase/firebase';
import 'rxjs/add/operator/take';

@Component({
  selector: 'bet-bear-form',
  templateUrl: './bet-bear-form.component.html',
  styleUrls: ['./bet-bear-form.component.scss']
})
export class BetBearFormComponent implements OnInit {
  private teamBetBearForm: FormGroup;
  private teamMembers: Array<string>;

  constructor (private formBuilder: FormBuilder, private afService: AF) {}

  ngOnInit(): void {
    this.teamMembers = [
      'Dave',
      'Joe'
    ];

    this.teamBetBearForm = this.formBuilder.group({
      reviewer: ['Me',Validators.required],
      individualBetBearForms: this.formBuilder.array([],Validators.compose([Validators.minLength(this.teamMembers.length), Validators.maxLength(this.teamMembers.length)]))
    });
    // this.initEmptyBetBearForm();
    this.initWithForm('-KjJCZETSnby--lIKthH');
  }

  initEmptyBetBearForm(): void {
    const control = <FormArray>this.teamBetBearForm.controls['individualBetBearForms'];
    for (var i = 0; i < this.teamMembers.length; i++) {
      const individualBetBearFormCtrl = this.initIndividualBetBearForm(this.teamMembers[i], 2, 2);
      control.push(individualBetBearFormCtrl);
    }
  }


  initIndividualBetBearForm(reviewee: string, numBets: number, numBears: number): FormGroup {
    let betBearForm = this.formBuilder.group({
      bets: this.formBuilder.array([], Validators.compose([Validators.minLength(1), Validators.maxLength(2)])),
      bears: this.formBuilder.array([], Validators.compose([Validators.minLength(1), Validators.maxLength(2)])),
      reviewee: [reviewee, Validators.required],
      status: 0
    });

    for (var i = 0; i < numBets; i++) {
      this.addBet(betBearForm);
    }
    for (var i = 0; i < numBears; i ++){
      this.addBear(betBearForm);
    }
    return betBearForm;
  }

  initBet(): FormGroup {
    return this.formBuilder.group({
      behavior: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)]],
      effect: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)]],
      thankYou: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)]],
    });
  }

  initBear(): FormGroup {
    return this.formBuilder.group({
      behavior: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)]],
      effect: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)]],
      alternative: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)]],
      result: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)]],
    });
  }

  addBet(betBearForm: FormGroup): void {
    const control = <FormArray>betBearForm.controls['bets'];
    const betCtrl = this.initBet();
    control.push(betCtrl);
  }

  addBear(betBearForm: FormGroup): void {
    const control = <FormArray>betBearForm.controls['bears'];
    const bearCtrl = this.initBear();
    control.push(bearCtrl);
  }

  removeBet(betBearForm: FormGroup, i: number) {
      const control = <FormArray>betBearForm.controls['bets'];
      control.removeAt(i);
  }

  removeBear(betBearForm: FormGroup, i: number) {
      const control = <FormArray>betBearForm.controls['bears'];
      control.removeAt(i);
  }

  save(model): void {
    this.afService.saveForm(model.value);
  }

  submit(model): void {
    model.controls['status'].setValue(1);
    this.afService.submitForm(model.value);
  }

  initWithForm(id: string): void {
    this.afService.getForm(id).take(1).subscribe(snapshot => {


      const control = <FormArray>this.teamBetBearForm.controls['individualBetBearForms'];
      for (var i = 0; i < snapshot.individualBetBearForms.length; i++) {
        const individualBetBearFormCtrl = this.initIndividualBetBearForm('',
          snapshot.individualBetBearForms[i].bets.length,
          snapshot.individualBetBearForms[i].bears.length);
        control.push(individualBetBearFormCtrl);
      }
      this.teamBetBearForm.patchValue(snapshot);
    });
  }
}