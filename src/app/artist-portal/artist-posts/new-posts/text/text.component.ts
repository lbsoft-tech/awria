import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  visible = true;
  
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
 tags= [
  
  
  ];
  published=true;
  scheduled=false;
  saveasdrafted=false;

  @ViewChild("drop") drop:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  dropd(){
    this.drop.nativeElement.classList.toggle("show");
  }
  publish(){
    console.log("object");
    this.published=true;
    this.scheduled=false;
    this.saveasdrafted=false;
  }
  schedule(){
    this.published=false;
    this.scheduled=true;
    this.saveasdrafted=false;
  }
  saveasdraft(){
    this.published=false;
    this.scheduled=false;
    this.saveasdrafted=true;
  }

}
