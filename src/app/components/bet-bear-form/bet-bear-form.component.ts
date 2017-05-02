import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bet-bear-form',
  templateUrl: './bet-bear-form.component.html',
  styleUrls: ['./bet-bear-form.component.scss']
})
export class BetBearFormComponent implements OnInit{
  teamMembers: Array<string>;

  constructor (){
    this.teamMembers = [
      'Dave',
      'Joe',
      'Judy',
      'Kira'
    ];
  }

  ngOnInit(): void {
  }
}