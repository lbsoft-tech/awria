import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DatabaseService } from '../../../services/database/database.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-artist-profile-settings-user-profile',
  templateUrl: './artist-profile-settings-user-profile.component.html',
  styleUrls: ['./artist-profile-settings-user-profile.component.scss']
})
export class ArtistProfileSettingsUserProfileComponent implements OnInit {

  password = {
    oldPassword: '',
    newPassword: '',
    cPassword: ''
  }

  htmlContent = '';

  name;
  email;
  country;
  about;
  image;
  shipping = {
    name: '',
    address: '',
    apt: '',
    city: '',
    sCountry: '',
    state: '',
    postCode: '',
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
    private api: DatabaseService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }
  getCountry(event: any) {
    console.log(event.target.value);
    this.country = event.target.value;
  }
  getShippingCountry(event: any) {
    console.log(event.target.value);
    this.shipping.sCountry = event.target.value;
  }
  changePasssword() {
    var compareResponse;
    var updatePasswordResponse;
    if (this.password.newPassword === this.password.cPassword) {
      const id = this.auth.getCurrentUser().id;
      const old_pass = this.password.oldPassword;
      this.api.comparePassword(id, old_pass).subscribe((res) => {
        compareResponse = res;
        if (compareResponse.match) {
          const new_pass = this.password.newPassword;
          this.api.updatePassword(id, new_pass).subscribe((update_pass_res) => {
            updatePasswordResponse = update_pass_res;
            if(updatePasswordResponse.status)
            {
              Swal.fire({
                title: 'Success',
                text: 'Password updated.',
                type: 'success',
                confirmButtonText: 'Ok'
              });
            }
          },
            (error) => {
              console.log(error);
            });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error',
          text: error.error.message,
          type: 'error',
          confirmButtonText: 'Ok'
        });
      });
      // this.api.getUser(id).subscribe(res => {
      //   this.userData = res;
      //   if (this.password.cPassword == this.userData.password) {
      //     const data = {
      //       name: this.userData.name,
      //       old: this.userData.email,
      //       password: this.password.newPassword
      //     }
      //     this.api.updatePassword(id, data).subscribe(res => {
      //       console.log("PasswordUpdated");
      //     });

      //   }
      //   else {
      //     console.log("old password not matched");
      //   }
      // })

    }
    else {
      console.log("Incorrect passwords");
    }
  }
  imageUpload(event) {
    console.log(event[0]);
    this.image = event[0]
    const formdata = new FormData();
    formdata.append('userprofile', event[0], 'dp.jpg')
    formdata.append('id', localStorage.getItem('uid'))
  }
  UserProfileUpdate() {
    let id = localStorage.getItem('uid');
    this.api.getUser(id).subscribe(res => {
      this.userData = res;
      // this.name=this.userData.name;
      // this.email=this.userData.email;
      // this.about=this.userData.about;
      let data = {
        name: this.name,
        email: this.email,
        about: this.about,
        country: this.country,
        image: this.image,
      }
      this.api.updateProfile(id, data).subscribe(res => {
        console.log("profile Updated");
      })
    })
  }
  addShippingAddress() {
    let id = localStorage.getItem('uid');
    let data = {
      name: this.shipping.name,
      address: this.shipping.address,
      apt: this.shipping.apt,
      city: this.shipping.city,
      country: this.shipping.sCountry,
      state: this.shipping.state,
      postCode: this.shipping.postCode
    }
    this.api.addShipping(id, data).subscribe(res => {

      console.log("Shipping updated");
    });
  }
}
