import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { AmazingTimePickerService } from 'amazing-time-picker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DatabaseService } from 'src/app/services/database/database.service';
import Swal from 'sweetalert2';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog-overview.html',
  styleUrls: ['./dialog-overview.scss']
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public api:DatabaseService) { }

  onNoClick(): void {
    this.dialogRef.close();
    
  }
    imageUpload(event:any){
    console.log(event[0]);
    this.api.textPhoto= event[0]
    const formdata = new FormData();
         formdata.append('textPhoto', event[0], 'textPhoto.jpg')
         formdata.append('id', localStorage.getItem('uid'))
    }
}

@Component({
  selector: 'app-new-post-text',
  templateUrl: './new-post-text.component.html',
  styleUrls: ['./new-post-text.component.scss']
})
export class NewPostTextComponent implements OnInit {
title;
story;
image;
attachment;
type;
postingType;
earlyAccess:boolean;
TeaserText;
earlyAccessTime:any;
earlyAccessDate:'';
scheduleDate:'';
scheduleTime:any;
publishType;





  visible = true;
  chekckbox = false;

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags = [];
  animal: string;
  name: string;
  published = true;
  scheduled = false;

  saveasdrafted = false;
  publicpost = true;
  patronspost = false;
  
  @ViewChild("drop") drop: ElementRef;
  constructor(private atp: AmazingTimePickerService,public dialog: MatDialog,public api:DatabaseService) { }

  ngOnInit() {
  }

    fileUpload(event){
      console.log(event[0]);
      this.attachment= event[0]
      const formdata = new FormData();
           formdata.append('textFile', event[0], 'TextFile.jpg')
           formdata.append('id', localStorage.getItem('uid'))
    }

publishPost(){
this.publishType="publish";
this.createPost();
}
schedulePost(){
  this.publishType="schedule";
  this.createPost();
}
draftPost(){
  this.publishType="draft";
  this.createPost();
}
createPost(){
  if(this.title!=null){

  
  let id=localStorage.getItem('uid');
  let data={
    title:this.title,
story:this.story,
image:this.api.textPhoto,
attachment:this.attachment,
type:'text',
postingType:this.type,
earlyAccess:this.earlyAccess,
TeaserText:this.TeaserText,
earlyAccessTime:this.earlyAccessTime,
earlyAccessDate:this.earlyAccessDate,
scheduleDate:this.scheduleDate,
scheduleTime:this.scheduleTime,
publishType:this.publishType,
userId:id,
tags:this.tags,
imageUrl:this.api.textPhotoUrl
  }
  console.log(data);
  this.api.addPost(data).subscribe(res=>{
    console.log("Added");
  })
}
else{
  Swal.fire({
    title: 'Error',
    text: "Add a title to your post before continuning",
    type: 'warning',
    confirmButtonText: 'Ok'
  });
} 
}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
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
    this.createPost();
  }
  schedule() {
    this.published = false;
    this.scheduled = true;
    this.saveasdrafted = false;
    this.createPost();
  }
  saveasdraft() {
    this.published = false;
    this.scheduled = false;
    this.saveasdrafted = true;
    this.createPost();
  }
  patrons() {
    this.patronspost = true;
    this.publicpost = false;
    this.type="patrons"
  }
  public() {
    this.patronspost = false;
    this.publicpost = true;
    this.type="public"
  }
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      // console.log(time);
      this.scheduleTime=time
    });
  }
  open1() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      // console.log(time);
      this.earlyAccessTime=time
    });
  }
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTextPostDialog, {
      width: '500px',
      // height:'550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'deleteTextPostDialog',
  templateUrl: './deletePostDialog.html',
  styleUrls: ['./deletePostDialog.scss']
})
export class DeleteTextPostDialog {

  constructor(
    public dialogRef1: MatDialogRef<DeleteTextPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

  onNoClick(): void {
    this.dialogRef1.close();
  }

}