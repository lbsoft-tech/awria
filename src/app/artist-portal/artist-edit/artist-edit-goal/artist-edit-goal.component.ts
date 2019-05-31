import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-artist-edit-goal',
  templateUrl: './artist-edit-goal.component.html',
  styleUrls: ['./artist-edit-goal.component.scss']
})
export class ArtistEditGoalComponent implements OnInit {

  upgradflag = false;
  firstgoal_flag = false;
  edit_flag =  false;


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

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  upgrade()
  {
    this.upgradflag = true;
    console.log("upgrade")
  }

  firstgoal()
  {
    this.firstgoal_flag = true;
  }

  delete()
  {
    this.firstgoal_flag =false;
  }

  showless()
  {
    this.edit_flag = false;
  }

  edit()
  {
    this.edit_flag = true;
  }

}
