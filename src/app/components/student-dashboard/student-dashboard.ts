import { Component, OnInit } from '@angular/core';
import { AF } from '../../firebase/firebase';
import { FirebaseListObservable } from 'angularfire2';

import { Router } from '@angular/router';

@Component ({
	selector: 'student-dashboard',
	templateUrl: './student-dashboard.html',
	styleUrls: ['./student-dashboard.scss']
})

export class StudentDashboardComponent implements OnInit {
	private userForms: FirebaseListObservable<any>;

	constructor (private afService: AF, private router: Router) {}

	ngOnInit(): void {
		this.userForms = this.afService.formsByUserId(this.afService.currentUser.uid);
	}

	openForm(form) {
		this.router.navigate(['/bet-bear-form', form.$key]);
	}

	newForm() {
		this.router.navigate(['/bet-bear-form']);
	}
}
