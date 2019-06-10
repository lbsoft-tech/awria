import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from 'src/app/_models/user/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    var loginResponse;
    var userData;
    if (this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$")) {
      const data = {
        email: this.user.email,
        password: this.user.password
      };
      this.auth.login(data).subscribe((res) => {
        loginResponse = res;
        localStorage.setItem('_token', loginResponse.access_token);
        localStorage.setItem('expires_at', JSON.stringify(loginResponse.expires_in));
        const userData = loginResponse.user;
        const user = new User();
        user.id = userData._id;
        user.email = userData.email;
        user.name = userData.name;
        user.role = userData.role;
        user.password = userData.password;
        user.token = loginResponse.access_token;
        user.tokenexpiresin = loginResponse.expires_in;

        this.auth.setUser(user);

        this.router.navigateByUrl('/artist-portal/home');
      },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: error.error.message,
            type: 'error',
            confirmButtonText: 'Ok'
          });
        });
    } else {
      console.log('invalid data entry');
    }
  }
}
