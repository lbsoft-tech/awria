import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { COMMA, ENTER, END } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatabaseService } from 'src/app/services/database/database.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NewPostText } from 'src/app/_models/new_post_text/new-post-text';
import { Post_Types } from 'src/app/_models/post_types.enum';
import { Delivery_Types } from 'src/app/_models/delivery_types.enum';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public api: DatabaseService, private auth: AuthService) { }

  onNoClick(): void {
    this.dialogRef.close();

  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() === 'png' || ext.toLowerCase() === 'jpg' || ext.toLowerCase() === 'jpeg') {
      return true;
    }
    else {
      return false;
    }
  }

  imageUpload(files) {
    if (this.validateFile(files[0].name)) {
      this.dialogRef.close(files[0]);
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Invalid file type',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    }

    //  let formData = new FormData();
    //  const file_name = Date.now() + files[0].name ;
    //  formData.append('textPhoto', file_name);
    //  formData.append('upload', files[0]);
    //  formData.append('id',this.auth.currentUserValue.id);
    //  this.api.uploadTextImage(formData).subscribe(result => {
    //    if (result.status) {
    //      Swal.fire({
    //        title: 'Success',
    //        text: 'Image Uploaded Successfully',
    //        type: 'success',
    //        confirmButtonText: 'Ok'
    //      });
    //    }
    //  }, err => {
    //    Swal.fire({
    //      title: 'Error',
    //      text: err,
    //      type: 'error',
    //      confirmButtonText: 'Ok'
    //    });
    //  });
  }
}

@Component({
  selector: 'app-new-post-text',
  templateUrl: './new-post-text.component.html',
  styleUrls: ['./new-post-text.component.scss']
})
export class NewPostTextComponent implements OnInit {
  Post: NewPostText;
  type;
  postingType;
  earlyAccess: boolean;
  TeaserText;
  earlyAccessTime: any;
  earlyAccessDate: '';
  scheduleDate: '';
  // scheduleTime: any;
  publishType;

  attachmentName;





  visible = true;
  chekckbox = false;

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // tags = [];
  animal: string;
  name: string;
  published = true;
  scheduled = false;

  saveasdrafted = false;
  publicpost = true;
  patronspost = false;

  @ViewChild("drop") drop: ElementRef;
  constructor(private atp: AmazingTimePickerService, public dialog: MatDialog, public api: DatabaseService, private auth: AuthService) {
    this.Post = new NewPostText;
  }

  ngOnInit() {
  }

  fileUpload(event) {
    if (event.target.files) {
      if (!this.Post.attachment_files) {
        this.Post.attachment_files = [];
      }
      this.Post.attachment_files.push(event.target.files[0]);
    }
    //  let formData = new FormData();
    //  const file_name = Date.now() + files[0].name ;
    //  formData.append('textFile', file_name);
    //  formData.append('upload', files[0]);
    //  formData.append('id',this.auth.currentUserValue.id);
    //  this.api.uploadTextAttachment(formData).subscribe(result => {
    //    if (result.status) {
    //      Swal.fire({
    //        title: 'Success',
    //        text: 'Attachment Uploaded Successfully',
    //        type: 'success',
    //        confirmButtonText: 'Ok'
    //      });
    //    }
    //  }, err => {
    //    Swal.fire({
    //      title: 'Error',
    //      text: err,
    //      type: 'error',
    //      confirmButtonText: 'Ok'
    //    });
    //  });
  }




  // publishPost() {
  //   this.Post.delivery_type = Delivery_Types.Publish;
  // }
  // schedulePost() {
  //   this.Post.delivery_type = Delivery_Types.Schedule;
  // }
  // draftPost() {
  //   this.Post.delivery_type = Delivery_Types.Draft;
  // }
  createPost() {
    // if (this.title != null) {

    //   if (this.api.textPhoto == null) {


    //     let id = localStorage.getItem('uid');
    //     const formdata = new FormData();
    //     formdata.append('title', this.story)
    //     formdata.append('story', this.story)
    //     // formdata.append('image',this.api.textPhoto,this.api.textPhoto.name)
    //     // formdata.append('attachment',this.attachment,this.attachment.name)
    //     formdata.append('type', 'text')
    //     formdata.append('postingType', this.type)
    //     // formdata.append('earlyAccess',this.earlyAccess)
    //     formdata.append('TeaserText', this.TeaserText)
    //     formdata.append('earlyAccessTime', this.earlyAccessTime)
    //     formdata.append('earlyAccessDate', this.earlyAccessDate)
    //     formdata.append('scheduleDate', this.scheduleDate)
    //     formdata.append('scheduleTime', this.scheduleTime)
    //     formdata.append('publishType', this.publishType)
    //     formdata.append('userId', id)
    //     formdata.append('tags', JSON.stringify(['this.tags']))
    //     formdata.append('imageUrl', this.api.textPhotoUrl)
    //   let data={

    //     title:this.title,
    // story:this.story,
    // image:this.api.textPhoto,
    // attachment:this.attachment,
    // type:'text',
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
    // imageUrl:this.api.textPhotoUrl
    //   }

    //     console.log(formdata);
    //     this.api.addTextPost(formdata).subscribe(res => {
    //       console.log("Added");
    //     })
    //   }
    // }
    // else {
    //   Swal.fire({
    //     title: 'Error',
    //     text: "Add a title to your post before continuning",
    //     type: 'warning',
    //     confirmButtonText: 'Ok'
    //   });
    // }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '550px',
      // height:'550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.Post.image_file = result;
        var file_reader = new FileReader();
        file_reader.onload = () => {
          document.getElementById('image_div').innerHTML = '<img style="width:inherit;" src="' + file_reader.result + '"/>';
        };
        file_reader.readAsDataURL(result);
      }
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.Post.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.Post.tags.indexOf(fruit);

    if (index >= 0) {
      this.Post.tags.splice(index, 1);
    }
  }
  dropd() {
    this.drop.nativeElement.classList.toggle("show");
  }
  publish() {
    this.published = true;
    this.scheduled = false;
    this.saveasdrafted = false;
    this.Post.delivery_type = Delivery_Types.Publish;
    //this.createPost();
  }
  schedule() {
    this.published = false;
    this.scheduled = true;
    this.saveasdrafted = false;
    this.Post.delivery_type = Delivery_Types.Schedule;
    //this.createPost();
  }
  saveasdraft() {
    this.published = false;
    this.scheduled = false;
    this.saveasdrafted = true;
    this.Post.delivery_type = Delivery_Types.Draft;
    //   this.createPost();
  }
  patrons() {
    this.patronspost = true;
    this.publicpost = false;
    this.Post.post_type = Post_Types.Patron;
  }
  public() {
    this.patronspost = false;
    this.publicpost = true;
    this.Post.post_type = Post_Types.Public;
  }

  save() {
    console.log(this.Post);
  }
  schedule_date_change() {
    if(this.Post.scheduled_time)
    {
      var date = new Date(this.scheduleDate)
      this.Post.scheduled_time.setFullYear(date.getFullYear());
      this.Post.scheduled_time.setDate(date.getDate());
      this.Post.scheduled_time.setMonth(date.getMonth());
    }
    else {
      this.Post.scheduled_time = new Date(this.scheduleDate);
    }
    console.log(this.Post.scheduled_time);
  }
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      const hour = Number.parseInt(time.slice(0, time.lastIndexOf(':')));
      const min = Number.parseInt(time.slice(time.lastIndexOf(':') + 1));
      if(this.Post.scheduled_time)
      {
        this.Post.scheduled_time.setHours(hour);
        this.Post.scheduled_time.setMinutes(min);
      }
      else {
        this.Post.scheduled_time = new Date(0, 0, 0, hour, min);
      }
      console.log(this.Post.scheduled_time);
    });
  }
  open1() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      // console.log(time);
      this.earlyAccessTime = time
    });
  }
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTextPostDialog, {
      width: '500px',
      // height:'550px',
      data: { name: this.name, animal: this.animal }
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
  ) { }

  onNoClick(): void {
    this.dialogRef1.close();
  }

}
