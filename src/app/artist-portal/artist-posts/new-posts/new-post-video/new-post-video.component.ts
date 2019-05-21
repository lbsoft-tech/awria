import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-new-post-video',
  templateUrl: './new-post-video.component.html',
  styleUrls: ['./new-post-video.component.scss']
})
export class NewPostVideoComponent implements OnInit {

  visible = true;
  chekckbox = false;
  animal: string;
  name: string;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags = [];

  published = true;
  scheduled = false;

  saveasdrafted = false;
  publicpost = true;
  patronspost = false;
  @ViewChild("drop") drop: ElementRef;
  constructor(private atp: AmazingTimePickerService,public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(VDialogOverviewExampleDialogComponent, {
      width: '550px',
      // height:'550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
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
  dropd() {
    this.drop.nativeElement.classList.toggle("show");
  }
  publish() {
    console.log("object");
    this.published = true;
    this.scheduled = false;
    this.saveasdrafted = false;
  }
  schedule() {
    this.published = false;
    this.scheduled = true;
    this.saveasdrafted = false;
  }
  saveasdraft() {
    this.published = false;
    this.scheduled = false;
    this.saveasdrafted = true;
  }
  patrons() {
    this.patronspost = true;
    this.publicpost = false;
  }
  public() {
    this.patronspost = false;
    this.publicpost = true;
  }
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog-overview.html',
  styleUrls: ['./dialog-overview.scss']
})
export class VDialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<VDialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }}