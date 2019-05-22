import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-artist-profile-userprofile',
  templateUrl: './artist-profile-userprofile.component.html',
  styleUrls: ['./artist-profile-userprofile.component.scss']
})
export class ArtistProfileUserprofileComponent implements OnInit {

  // @ViewChild('countrySelect') countrySelect;
  // setCountry(countryCode) {
  //   this.countrySelect.setCountry(countryCode);
  // }
  // getCountryData() {
  //   return this.countrySelect.getCountryData();
  // }
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

}
