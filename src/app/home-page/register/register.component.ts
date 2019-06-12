import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/_models/user/user';
import { Router } from '@angular/router';



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
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  signup() {
    var registerResponse;
    var userData;
    try {
      if (this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$")
        && this.user.password.match("(?=.*[#/?//&/@/_/-/~/^/+/=/*/(/)/$/!/>/</,/./;/:/-|//%////\/'/'/}/{/}])(?=.*\d).{7,}")
        && this.user.name != ''
        && this.user.email == this.user.cemail
      ) {
        const data = {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        };
        this.auth.signup(data).subscribe(res => {
          registerResponse = res;
          localStorage.setItem('_token', registerResponse.access_token);
          localStorage.setItem('expires_at', JSON.stringify(registerResponse.expires_in));
          const userData = registerResponse.user;
          const user = new User();
          user.id = userData._id;
          user.email = userData.email;
          user.name = userData.name;
          user.role = userData.role;
          user.password = userData.password;
          user.token = registerResponse.access_token;
          user.tokenexpiresin = registerResponse.expires_in;

        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: error.error.message,
            type: 'error',
            confirmButtonText: 'Ok'
          });
        });
      }
      else {
        console.log("Email is not in format")
        Swal.fire({
          title: 'Error',
          text: 'Email is not formated',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      }
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
