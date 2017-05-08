import { IndividualBetBearForm } from "./individual-bet-bear-form";

export class TeamBetBearForm {
  id: string;
  status: number;
  reviewerId: string;
  reviewerName: string;
  individualBetBearForms: IndividualBetBearForm[];
  lastSaved;

  constructor() {
    this.id = '';
    this.status = 0;
    this.reviewerId = '';
    this.reviewerName = '';
    this.individualBetBearForms = new Array();
    this.lastSaved = null;
  }

  addIndividualBetBearForm(this: TeamBetBearForm, revieweeId: string, revieweeName: string, numBets: number, numBears: number): void {
    let indiv = new IndividualBetBearForm();
    indiv.revieweeId = revieweeId;
    indiv.revieweeName = revieweeName;
    indiv.addBet(numBets);
    indiv.addBear(numBears);
    this.individualBetBearForms.push(indiv);
  }
}
