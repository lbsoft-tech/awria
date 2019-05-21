import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-artist-edit-about',
  templateUrl: './artist-edit-about.component.html',
  styleUrls: ['./artist-edit-about.component.scss']
})
export class ArtistEditAboutComponent implements OnInit {

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

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}
