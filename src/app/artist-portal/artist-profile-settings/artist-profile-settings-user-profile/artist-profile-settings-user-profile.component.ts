import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-artist-profile-settings-user-profile',
  templateUrl: './artist-profile-settings-user-profile.component.html',
  styleUrls: ['./artist-profile-settings-user-profile.component.scss']
})
export class ArtistProfileSettingsUserProfileComponent implements OnInit {

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
