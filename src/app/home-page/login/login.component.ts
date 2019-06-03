import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
<<<<<<< HEAD
login(){
  console.log("object");
  if (this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$")){
    let data={
      email:this.user.email.toLowerCase().trim(),
      password:this.user.password
=======
  login() {
    if (this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$")) {
      const data = {
        email: this.user.email,
        password: this.user.password
      };
      this.auth.login(data).subscribe(res => {
        console.log("registered");
      })
    } else {
      console.log("object");
>>>>>>> 766e0cc6a8dbbbd6b5b55babbe2f9df7ca20be42
    }
  }
}
