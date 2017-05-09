import { Component, OnInit } from '@angular/core';
import { AF } from './firebase/firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarOpen: Boolean;
  title: String;

  constructor(private afService: AF, private router: Router) {
    this.sideBarOpen = false;
    this.title = "DSGN 384";
  }

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  logout() {
    this.afService.logout().then(_=>{
      this.router.navigate(['login-page']);
    })
  }

  goToRoute(r: string) {
    this.router.navigate([r]);
  }
}
