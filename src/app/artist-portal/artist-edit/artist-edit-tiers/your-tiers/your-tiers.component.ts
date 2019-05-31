import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-tiers',
  templateUrl: './your-tiers.component.html',
  styleUrls: ['./your-tiers.component.scss']
})
export class YourTiersComponent implements OnInit {

  description : string;
  description_length;

  first_tier_flag = false;

  marked = false;
  theCheckbox = false;

  constructor() { }

  ngOnInit() {
    // let a = this.description.length
    // console.log(a);
  }

  createfirstTier()
  {
      this.first_tier_flag =true;
  }

  abc(a)
  {
    this.description_length = this.description.length;
    console.log( this.description_length)
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}
