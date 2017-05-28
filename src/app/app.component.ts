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

  constructor(public usersService: UsersService, private router: Router) {
    this.sideBarOpen = false;
  }

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  logout() {
    this.usersService.logout().then(_=>{
      this.router.navigate(['login']);
    })
  }

  goToRoute (r:string): void {
    this.router.navigate([r]);
  }
}
