import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import{ FormGroup,FormBuilder} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }
country(event:any){
  console.log(event.target.value);
}
changePasssword(){
  



}
imageUpload(event){
console.log(event);
console.log(this.htmlContent);
}
}
