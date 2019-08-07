import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from 'src/app/_models/user/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Roles } from 'src/app/_models/roles.enum';
declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '359197421460735',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
  }

  login_fb() {
    this.auth.fbLogin().finally(() => {
      this.auth.currentUser.subscribe(
        (user) => {
          console.log(user);
          if (user) {
            if (user.role == Roles.Artist) {

              this.router.navigateByUrl('/artist-portal/home/all');
            }
            else if (user.role == Roles.User) {

              this.router.navigateByUrl('/user-portal/home/all');
            }
          }
        },
        (error) => {
          console.log(error);
        });
    }).catch((error) => {
      if (error) {
        Swal.fire({
          title: 'Error',
          text: error,
          type: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

  login() {
    const data = {
      email: this.user.email.toLowerCase(),
      password: this.user.password
    };
    this.auth.login(data).subscribe((res) => {

      this.auth.currentUser.subscribe(
        (user) => {
          if (user) {
            if (user.role == Roles.Artist) {

              this.router.navigateByUrl('/artist-portal/home/all');
            }
            else if (user.role == Roles.User) {

              this.router.navigateByUrl('/user-portal/home/all');
            }
          }
        },
        (error) => {
          console.log(error);
        });
    },
      (error) => {
        if (error) {
          Swal.fire({
            title: 'Error',
            text: error,
            type: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
  }
}
