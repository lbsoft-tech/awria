import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
name;
email;
password;
cemail;
  constructor() { }

  ngOnInit() {
  }
  signup(){
    let data={
      name:this.name,
      email:this.email,
      password:this.password,
      
    }
    console.log(data);
  
    if(this.email===this.cemail){
      let data={
        name:this.name,
        email:this.email,
        password:this.password,
        
      }
      console.log(data);
    }
  
  }

}
