import { Component, OnInit, ElementRef,Inject, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DatabaseService } from '../../../../services/database/database.service';
import Swal from 'sweetalert2';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-new-post-image',
  templateUrl: './new-post-image.component.html',
  styleUrls: ['./new-post-image.component.scss']
})
export class NewPostImageComponent implements OnInit {

  title;
story;
image;
attachment;
type;
postingType;
earlyAccess:boolean;
TeaserText;
earlyAccessTime;
earlyAccessDate:'';
scheduleDate:'';
scheduleTime;
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
    this.image= event[0]
    const formdata = new FormData();
         formdata.append('imageFile', event[0], 'imageFile.jpg')
         formdata.append('id', localStorage.getItem('uid'))
  }


publishPost(){
this.publishType="publish";
}
schedulePost(){
this.publishType="schedule";
}
draftPost(){
this.publishType="draft";
}
createPost(){
  if(this.title!=null){

  
let id=localStorage.getItem('uid');
let data={
  title:this.title,
story:this.story,
image:this.api.imagePhoto,
attachment:this.attachment,
type:'image',
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
imageUrl:this.api.imagePhotoUrl
}
console.log(data);
// this.api.addPost(data).subscribe(res=>{
//   console.log("Added");
// })
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
    const dialogRef = this.dialog.open(IDialogOverviewExampleDialogComponent, {
      width: '550px',
      // height:'550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeletePostDialog, {
      width: '500px',
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
  imageUpload(event:any){
    console.log(event[0]);
    this.api.imagePhoto= event[0]
    const formdata = new FormData();
         formdata.append('imagePhoto', event[0], 'imagePhoto.jpg')
         formdata.append('id', localStorage.getItem('uid'))
    }
}
@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog-overview.html',
  styleUrls: ['./dialog-overview.scss']
})
export class IDialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<IDialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }}

  @Component({
    selector: 'deletePostDialog',
    templateUrl: './deletePostDialog.html',
    styleUrls: ['./deletePostDialog.scss']
  })
  export class DeletePostDialog {
  
    constructor(
      public dialogRef1: MatDialogRef<DeletePostDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef1.close();
    }

  }