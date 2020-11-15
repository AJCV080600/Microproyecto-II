import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: firebase.default.User = null;
  isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe((response) => {
      if (response) {
        this.user = response;
        this.isAuthenticated = true;
        return
      }
      this.isAuthenticated = false;
    })
  }

  authWithGoogle(): void {
    this.authService.loginWithGoogle().then(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/'])
      }
    }).catch((err) => {console.log(err)});
  }

  logout(): void{
    this.authService.logout().then(()=> {
      this.router.navigate(['/']);
    }).catch((err) => {console.log(err)});
  }
}
