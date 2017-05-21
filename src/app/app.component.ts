import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpen: Boolean;
  title: String;

  constructor(private usersService: UsersService, private router: Router) {
    this.sideBarOpen = false;
    this.title = "DSGN 384";
  }

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  logout() {
    this.usersService.logout().then(_=>{
      this.router.navigate(['login-page']);
    })
  }

  goToRoute(r: string) {
    this.router.navigate([r]);
  }
}
