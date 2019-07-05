import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/_models/user/user';
import { Router } from '@angular/router';
import { Roles } from 'src/app/_models/roles.enum';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    cemail: ''
  }
  terms = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  signup() {
    try {

        const data = {
          name: this.user.name,
          email: this.user.email.toLowerCase(),
          password: this.user.password
        };
        this.auth.signup(data).subscribe(res => {
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
    catch (error) {
      console.log(error.message);
      Swal.fire({
        title: 'Error',
        text: error.error.message,
        type: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }
}
