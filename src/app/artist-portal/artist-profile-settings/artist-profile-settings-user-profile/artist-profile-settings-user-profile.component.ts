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
  let id =localStorage.getItem('uid');
  this.api.getUser(id).subscribe(res=>{
this.userData=res;
  })
  



}
imageUpload(event){
console.log(event);
console.log(this.htmlContent);
}
}
