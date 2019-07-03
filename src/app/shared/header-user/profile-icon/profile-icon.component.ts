import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
>>>>>>> 1dbb997e0ed2f3e153d193b3c79f89feb4aa002c

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss']
})
export class ProfileIconComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

=======
  constructor(private authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
>>>>>>> 1dbb997e0ed2f3e153d193b3c79f89feb4aa002c
}
