import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-artist-edit-thanks',
  templateUrl: './artist-edit-thanks.component.html',
  styleUrls: ['./artist-edit-thanks.component.scss']
})
export class ArtistEditThanksComponent implements OnInit {

  marked = false;
  theCheckbox = false;


  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
