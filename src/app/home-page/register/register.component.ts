import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

user={
  name:'',
  email:'',
  password:'',
}
  constructor() { }

  ngOnInit() {
  }
  signup(){
    let data={
      name:this.user.name,
      email:this.user.email,
      password:this.user.password,
      
    }
    console.log(data);
  
 
  
  }

}
