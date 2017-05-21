import { Bet } from "./bet";
import { Bear } from "./bear";

export class IndividualBetBearForm {
  revieweeId: string;
  revieweeName: string;
  bets: Bet[];
  bears: Bear[];

  constructor() {
    this.revieweeId = '';
    this.revieweeName = '';
    this.bets = new Array();
    this.bears = new Array();
  }

  addBet(this: IndividualBetBearForm, num?: number): void {
    if (num && num > 0) {
      for (var i = 0; i < num; i++) {
        this.bets.push(new Bet());
      }
    }
    else {
      this.bets.push(new Bet());
    }
  }

  addBear(this: IndividualBetBearForm, num?: number): void {
    if (num && num > 0) {
      for (var i = 0; i < num; i++) {
        this.bears.push(new Bear());
      }
    }
    else {
      this.bears.push(new Bear());
    }
  }
}
