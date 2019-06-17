import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DatabaseService } from '../../../../services/database/database.service';
import Swal from 'sweetalert2';

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
  videoUrl;
  attachmentName;

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
  constructor(private atp: AmazingTimePickerService,public dialog: MatDialog ,public api:DatabaseService) { }

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
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteVideoPostDialog, {
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
  fileUpload(event){
    console.log(event[0]);
    this.image= event[0]
    const formdata = new FormData();
    this.attachmentName = this.attachment.name.split(".")[1];
         formdata.append('videoFile', event[0], 'videoFile.jpg')
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
// let data={
//   title:this.title,
// story:this.story,
// image:this.api.textPhoto,
// attachment:this.attachment,
// type:'video',
// postingType:this.type,
// earlyAccess:this.earlyAccess,
// TeaserText:this.TeaserText,
// earlyAccessTime:this.earlyAccessTime,
// earlyAccessDate:this.earlyAccessDate,
// scheduleDate:this.scheduleDate,
// scheduleTime:this.scheduleTime,
// publishType:this.publishType,
// userId:id,
// tags:this.tags,
// imageUrl:this.api.textPhotoUrl,
// videoUrl:this.videoUrl
// }
const formdata = new FormData();
formdata.append('title',this.story)
formdata.append('story',this.story)
formdata.append('image',this.api.videoPhoto,this.api.videoPhoto.name)
formdata.append('attachment',this.attachment,this.attachment.name)
formdata.append('type','video ')
formdata.append('postingType',this.type)
// formdata.append('earlyAccess',this.earlyAccess)
formdata.append('TeaserText',this.TeaserText)
formdata.append('earlyAccessTime',this.earlyAccessTime)
formdata.append('earlyAccessDate',this.earlyAccessDate)
formdata.append('scheduleDate',this.scheduleDate)
formdata.append('scheduleTime',this.scheduleTime)
formdata.append('publishType',this.publishType)
formdata.append('userId',id)
formdata.append('tags',JSON.stringify(['this.tags']))
formdata.append('imageUrl',this.api.videoPhotoUrl)
formdata.append('videoUrl',this.videoUrl)
this.api.addPost(formdata).subscribe(res=>{
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
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog-overview.html',
  styleUrls: ['./dialog-overview.scss']
})
export class VDialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<VDialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public api:DatabaseService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  imageUpload(event){
    console.log(event[0]);
    this.api.videoPhoto= event[0]
    const formdata = new FormData();
         formdata.append('videoPhoto', event[0], 'videoPhoto.jpg')
         formdata.append('id', localStorage.getItem('uid'))
    }
}
@Component({
  selector: 'deleteVideoPostDialog',
  templateUrl: './deletePostDialog.html',
  styleUrls: ['./deletePostDialog.scss']
})
export class DeleteVideoPostDialog {

  constructor(
    public dialogRef1: MatDialogRef<DeleteVideoPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef1.close();
  }

}