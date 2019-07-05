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
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  constructor(private router: Router, private atp: AmazingTimePickerService, public dialog: MatDialog, public api: DatabaseService, private auth: AuthService) {
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
  // createPost() {
  //   // if (this.title != null) {

  //   //   if (this.api.textPhoto == null) {


  //   //     let id = localStorage.getItem('uid');
  //   //     const formdata = new FormData();
  //   //     formdata.append('title', this.story)
  //   //     formdata.append('story', this.story)
  //   //     // formdata.append('image',this.api.textPhoto,this.api.textPhoto.name)
  //   //     // formdata.append('attachment',this.attachment,this.attachment.name)
  //   //     formdata.append('type', 'text')
  //   //     formdata.append('postingType', this.type)
  //   //     // formdata.append('earlyAccess',this.earlyAccess)
  //   //     formdata.append('TeaserText', this.TeaserText)
  //   //     formdata.append('earlyAccessTime', this.earlyAccessTime)
  //   //     formdata.append('earlyAccessDate', this.earlyAccessDate)
  //   //     formdata.append('scheduleDate', this.scheduleDate)
  //   //     formdata.append('scheduleTime', this.scheduleTime)
  //   //     formdata.append('publishType', this.publishType)
  //   //     formdata.append('userId', id)
  //   //     formdata.append('tags', JSON.stringify(['this.tags']))
  //   //     formdata.append('imageUrl', this.api.textPhotoUrl)
  //   //   let data={

  //   //     title:this.title,
  //   // story:this.story,
  //   // image:this.api.textPhoto,
  //   // attachment:this.attachment,
  //   // type:'text',
  //   // postingType:this.type,
  //   // earlyAccess:this.earlyAccess,
  //   // TeaserText:this.TeaserText,
  //   // earlyAccessTime:this.earlyAccessTime,
  //   // earlyAccessDate:this.earlyAccessDate,
  //   // scheduleDate:this.scheduleDate,
  //   // scheduleTime:this.scheduleTime,
  //   // publishType:this.publishType,
  //   // userId:id,
  //   // tags:this.tags,
  //   // imageUrl:this.api.textPhotoUrl
  //   //   }

  //   //     console.log(formdata);
  //   //     this.api.addTextPost(formdata).subscribe(res => {
  //   //       console.log("Added");
  //   //     })
  //   //   }
  //   // }
  //   // else {
  //   //   Swal.fire({
  //   //     title: 'Error',
  //   //     text: "Add a title to your post before continuning",
  //   //     type: 'warning',
  //   //     confirmButtonText: 'Ok'
  //   //   });
  //   // }
  // }

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
      if (!this.Post.tags) {
        this.Post.tags = [];
      }
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
    //this.createPost();
  }
  schedule() {
    this.published = false;
    this.scheduled = true;
    this.saveasdrafted = false;
    //this.createPost();
  }
  saveasdraft() {
    this.published = false;
    this.scheduled = false;
    this.saveasdrafted = true;
    //   this.createPost();
  }
  patrons() {
    this.patronspost = true;
    this.publicpost = false;
  }
  public() {
    this.patronspost = false;
    this.publicpost = true;
  }

  save() {
    if (!this.Post.title) {
      Swal.fire({
        title: 'Error',
        text: "Add a title to your post before continuning",
        type: 'warning',
        confirmButtonText: 'Ok'
      });
    }
    else {
      const user_id = this.auth.currentUserValue.id;
      var page_id;
      this.api.get_artist_page().pipe(map((page_load) => {
        if (page_load.status) {
          page_id = page_load.page._id;
          if (this.published) {
            this.Post.delivery_type = Delivery_Types.Publish;
          }
          else if (this.saveasdrafted) {
            this.Post.delivery_type = Delivery_Types.Draft;
          }
          else if (this.scheduled) {
            this.Post.delivery_type = Delivery_Types.Schedule;
          }

          if (this.publicpost) {
            this.Post.post_type = Post_Types.Public;
          } else if (this.patronspost) {
            this.Post.post_type = Post_Types.Patron;
            this.Post.early_access = this.earlyAccess ? true : false;
          }
          const data = {
            user_id: user_id,
            page_id: page_id,
            post: {
              title: this.Post.title,
              story: this.Post.story,
              post_type: this.Post.post_type,
              scheduled_time: this.Post.scheduled_time,
              early_access_time: this.Post.early_access_time,
              early_access: this.Post.early_access,
              delivery_type: this.Post.delivery_type,
              tags: this.Post.tags,
              teaser: this.Post.teaser_text,
            },
          };
          console.log(data);

          this.api.create_text_post(data).pipe(map((res) => {
            if (res.status) {
              if (this.Post.image_file) {
                var formData = new FormData;
                const file_name = Date.now() + this.Post.image_file.name;
                formData.append('file_name', file_name);
                formData.append('upload', this.Post.image_file, file_name);
                formData.append('user_id', user_id);
                formData.append('post_id', res.post._id);
                /// Send file here.
                console.log(formData.getAll('post_id'));
                this.api.save_text_post_photo(formData).subscribe((result) => {
                  console.log(result);
                });
              }
              if (this.Post.attachment_files) {
                var formData = new FormData;
                this.Post.attachment_files.forEach(element => {
                  const file_name = Date.now() + element.name;
                  formData.append('file_name[]', file_name);
                  formData.append('upload[]', element, file_name);
                  // Send files here.
                });
                formData.append('user_id', user_id);
                formData.append('post_id', res.post._id);
                this.api.save_text_post_attachment(formData).subscribe();
              }
              Swal.fire({
                title: 'Success',
                text: 'Post save successful',
                type: 'success',
                confirmButtonText: 'Ok'
              }).then((result) => {
                this.router.navigateByUrl('/artist-portal/posts/new');
              });
            }
          })).subscribe();
        }
      })).subscribe();
    }

  }
  schedule_date_change() {
    if (this.Post.scheduled_time) {
      var date = new Date(this.scheduleDate);
      this.Post.scheduled_time.setFullYear(date.getFullYear());
      this.Post.scheduled_time.setDate(date.getDate());
      this.Post.scheduled_time.setMonth(date.getMonth());
    }
    else {
      this.Post.scheduled_time = new Date(this.scheduleDate);
    }
    console.log(this.Post.scheduled_time);
  }

  early_access_date_change() {
    if (this.Post.early_access_time) {
      var date = new Date(this.earlyAccessDate);
      this.Post.early_access_time.setFullYear(date.getFullYear());
      this.Post.early_access_time.setDate(date.getDate());
      this.Post.early_access_time.setMonth(date.getMonth());
    }
    else {
      this.Post.early_access_time = new Date(this.earlyAccessDate);
    }
    console.log(this.Post.early_access_time);
  }
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      const hour = Number.parseInt(time.slice(0, time.lastIndexOf(':')));
      const min = Number.parseInt(time.slice(time.lastIndexOf(':') + 1));
      if (this.Post.scheduled_time) {
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
      //this.earlyAccessTime = time
      const hour = Number.parseInt(time.slice(0, time.lastIndexOf(':')));
      const min = Number.parseInt(time.slice(time.lastIndexOf(':') + 1));
      if (this.Post.early_access_time) {
        this.Post.early_access_time.setHours(hour);
        this.Post.early_access_time.setMinutes(min);
      } else {
        this.Post.early_access_time = new Date(0, 0, 0, hour, min);
      }
      console.log(this.Post.early_access_time);
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
