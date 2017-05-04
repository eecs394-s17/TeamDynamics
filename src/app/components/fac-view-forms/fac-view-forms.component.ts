import { Component, OnInit } from '@angular/core';
import { AF } from '../../firebase/firebase';

@Component({
  selector: 'fac-view-forms',
  templateUrl: './fac-view-forms.component.html',
  styleUrls: ['./fac-view-forms.component.scss']
})
export class FacViewFormsComponent implements OnInit {
  constructor (private afService: AF) {}

  ngOnInit(): void {
    console.log(this.afService.formsList);
  }
}