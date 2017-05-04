import { Component, OnInit } from '@angular/core';
import { AF } from '../../firebase/firebase';

@Component({
  selector: 'bet-bear-form',
  templateUrl: './bet-bear-form.component.html',
  styleUrls: ['./bet-bear-form.component.scss']
})
export class BetBearFormComponent implements OnInit{
  teamMembers: Array<string>;

  constructor ( private afService: AF) {}

  ngOnInit(): void {
    this.teamMembers = [
      'Dave',
      'Joe',
      'Judy',
      'Kira'
    ];
  }
}