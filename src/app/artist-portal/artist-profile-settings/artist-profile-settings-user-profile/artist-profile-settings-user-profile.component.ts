import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DatabaseService } from '../../../services/database/database.service';


@Component({
  selector: 'app-artist-profile-settings-user-profile',
  templateUrl: './artist-profile-settings-user-profile.component.html',
  styleUrls: ['./artist-profile-settings-user-profile.component.scss']
})
export class ArtistProfileSettingsUserProfileComponent implements OnInit {

password={
  oldPassword:'',
  newPassword:'',
  cPassword:''
}
htmlContent='';
user={
  name:'',
  email:'',
  country:'',
  about:'',

}
userData;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  constructor(
    private api:DatabaseService) {



   }

  ngOnInit() {
  }
country(event:any){
  console.log(event.target.value);
}
changePasssword(){
  if(this.password.newPassword===this.password.cPassword){

    let id =localStorage.getItem('uid');
    this.api.getUser(id).subscribe(res=>{
  this.userData=res;
  if (this.password.cPassword==this.userData.password){
  let data={
    name: this.userData.name,
    email: this.userData.email,
    password: this.password.newPassword
  }
  this.api.updatePassword(id,data).subscribe(res=>{
  console.log("PasswordUpdated");
  })
  
  }
  else{
    console.log("old password not matched");
  }
    })
    
  }
  else{
    console.log("Incorrect passwords");
  }




}
imageUpload(event){
console.log(event);
console.log(this.htmlContent);
}
}
