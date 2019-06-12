import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-profile-btn',
  templateUrl: './header-profile-btn.component.html',
  styleUrls: ['./header-profile-btn.component.scss']
})
export class HeaderProfileBtnComponent implements OnInit {

  constructor(private authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home-page/login']);
  }

}
