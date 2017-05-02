import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bet-bear-form',
  templateUrl: './bet-bear-form.component.html'
})
export class BetBearFormComponent implements OnInit{
  loading: Boolean = false;

  ngOnInit(): void {
    this.loading = true;
  }

}