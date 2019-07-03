import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/_models/user/user';
import { UserProfile } from 'src/app/_models/UserProfile/user-profile';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile-settings-user-profile',
  templateUrl: './profile-settings-user-profile.component.html',
  styleUrls: ['./profile-settings-user-profile.component.scss']
})
export class ProfileSettingsUserProfileComponent implements OnInit {

  country_list = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
  ];

  profile_img = '';
  profile_img_default = '../../../../assets/images/profile-pic.png';


  password = {
    oldPassword: '',
    newPassword: '',
    cPassword: ''
  };

  htmlContent = '';

  name;
  email;
  country = '';
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
    private auth: AuthService,
    private ngxspinnerservice: NgxSpinnerService,
  ) {
    this.profile_img = this.profile_img_default;
    this.auth.currentUser.subscribe((user: User) => {
      if (user) {
        this.name = user.name;
        this.email = user.email;
      }

    });

    this.auth.currentUserProfile.subscribe((userProfile: UserProfile) => {
      if (userProfile) {
        if (userProfile.profile_photo) {
          this.profile_img = 'http://localhost:3000/static/uploads/' + this.auth.currentUserValue.id + '/profile_pictures/' + userProfile.profile_photo;
        }
        this.country = userProfile.country;
        this.about = userProfile.about;
        if (userProfile.shipping) {
          this.shipping.address = userProfile.shipping.address;
          this.shipping.apt = userProfile.shipping.apartment;
          this.shipping.city = userProfile.shipping.city;
          this.shipping.postCode = userProfile.shipping.postcode;
          this.shipping.state = userProfile.shipping.state;
          this.shipping.sCountry = userProfile.shipping.country;
          this.shipping.name = userProfile.shipping.name;
        }
      }

    });
  }

  ngOnInit() {
  }
  getCountry(event: any) {
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
      const id = this.auth.currentUserValue.id;
      const old_pass = this.password.oldPassword;
      this.api.comparePassword(id, old_pass).subscribe((res) => {
        compareResponse = res;
        if (compareResponse.match) {
          const new_pass = this.password.newPassword;
          this.api.updatePassword(id, new_pass).subscribe((update_pass_res) => {
            updatePasswordResponse = update_pass_res;
            if (updatePasswordResponse.status) {
              this.password.cPassword = '';
              this.password.oldPassword = '';
              this.password.newPassword = '';
              this.update_profile_data();
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

    }
    else {
      Swal.fire({
        title: 'Error',
        text: 'Password mismatch.',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }
  imageUpload(files) {
    let formData = new FormData();
    const file_name = Date.now() + files[0].name;
    formData.append('file_name', file_name);
    formData.append('upload', files[0]);
    formData.append('id', this.auth.currentUserValue.id);
    this.ngxspinnerservice.show();
    this.api.updatePhoto(formData).subscribe(result => {
      if (result.status) {
        this.update_profile_data();
        this.ngxspinnerservice.hide();
        Swal.fire({
          title: 'Success',
          text: 'Profile picture updated.',
          type: 'success',
          confirmButtonText: 'Ok'
        });
      }
    }, err => {
      Swal.fire({
        title: 'Error',
        text: err,
        type: 'error',
        confirmButtonText: 'Ok'
      });
    });
  }

  UserProfileUpdate() {
    const id = this.auth.currentUserValue.id;
    const data = {
      about: this.about,
      country: this.country
    };
    this.api.updateProfile(id, data).subscribe(res => {
      if (res.status) {
        this.update_profile_data();
        Swal.fire({
          title: 'Success',
          text: 'Profile updated.',
          type: 'success',
          confirmButtonText: 'Ok'
        });
      }
    },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: error,
          type: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }
  addShippingAddress() {
    let id = this.auth.currentUserValue.id;
    const data = {
      data: this.shipping,
      id: id
    };

    this.api.addShipping(data).subscribe(result => {
      if (result.status) {
        this.update_profile_data();
        Swal.fire({
          title: 'Success',
          text: 'Shipping address updated.',
          type: 'success',
          confirmButtonText: 'Ok'
        });
      }
    },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: error,
          type: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

  update_profile_data() {
    this.auth.currentUser.subscribe((res) => {
      if (res) {
        this.auth.getUserProfile(res.id).subscribe((res1) => {
          const user_profile = new UserProfile();
          if (res1.profile != null) {
            user_profile._id = res1.profile._id;
            user_profile.user_id = res1.profile.user_id;
            user_profile.country = res1.profile.country;
            user_profile.about = res1.profile.about;
            user_profile.profile_photo = res1.profile.ProfilePhoto;
            if (res1.profile.shipping) {
              user_profile.shipping = {
                name: res1.profile.shipping.Name,
                address: res1.profile.shipping.Address,
                city: res1.profile.shipping.City,
                country: res1.profile.shipping.Country,
                state: res1.profile.shipping.State,
                postcode: res1.profile.shipping.PostCode,
                apartment: res1.profile.shipping.Apartment,
              };
            }

            this.auth.nextProfile = user_profile;
          }
          return user_profile;
        });
      }
    });
  }
}
