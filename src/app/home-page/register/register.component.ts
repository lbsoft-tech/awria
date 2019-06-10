import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';

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
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  signup() {
    console.log(this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$"));
    try {
      if (this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$")
        && this.user.password.match("(?=.*[#/?//&/@/$/!/%////\/'/'/}/{/}])(?=.*).{7,}")
        && this.user.name != ''
        && this.user.email == this.user.cemail
      ) {
        const data = {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        };
        this.auth.signup(data).subscribe(res => {

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
