import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';


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
<<<<<<< HEAD
console.log("object");
let data={
  name:this.user.name,
  email:this.user.email.toLowerCase().trim(),
  password:this.user.password
}
this.auth.signup(data).subscribe(res=>{
  console.log("registered");
})
=======
        const data = {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        };
        this.auth.signup(data).subscribe(res => {

        });
>>>>>>> 766e0cc6a8dbbbd6b5b55babbe2f9df7ca20be42
      }
      else {
        console.log("Email is not in format")
      }
    }
    catch (error) {
      console.log(error.message);
    }
  }
}
