import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatabaseService } from '../../../../services/database/database.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Delivery_Types } from 'src/app/_models/delivery_types.enum';
import { NewPostVideo } from 'src/app/_models/new_post_video/new-post-video';
import { Post_Types } from 'src/app/_models/post_types.enum';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  post: NewPostVideo;
  user_id: string;
  earlyAccess: boolean;
  earlyAccessTime: any;
  earlyAccessDate: '';
  scheduleDate: '';
  scheduleTime: any;

  visible = true;
  chekckbox = false;
  animal: string;
  name: string;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  published = true;
  scheduled = false;

  saveasdrafted = false;
  publicpost = true;
  patronspost = false;
  @ViewChild('drop') drop: ElementRef;
  constructor(private atp: AmazingTimePickerService,
    public dialog: MatDialog,
    public api: DatabaseService,
    private router: Router,
    private auth: AuthService
    ) {
    this.post = new NewPostVideo();
    this.post.delivery_type = Delivery_Types.Publish;
    this.post.post_type = Post_Types.Public;
    this.post.attachment_files = [];
    this.user_id = this.auth.currentUserValue.id;
  }

  set_post_type(type) {
    switch (type) {
      case Post_Types.Public:
        this.post.post_type = Post_Types.Public;
        break;
      case Post_Types.Patron:
        this.post.post_type = Post_Types.Patron;
        break;
      default:
        break;
    }

  }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(VDialogOverviewExampleDialogComponent, {
      width: '550px',
      data: { name: this.name, animal: this.animal }
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
      data: { name: this.name, animal: this.animal }
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
      if (!this.post.tags) {
        this.post.tags = [];
      }
      this.post.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.post.tags.indexOf(fruit);

    if (index >= 0) {
      this.post.tags.splice(index, 1);
    }
  }
  dropd() {
    this.drop.nativeElement.classList.toggle('show');
  }
  fileUpload(event) {
    if (event.target.files.length > 0) {
      if (!this.post.attachment_files) {
        this.post.attachment_files = [];
      }
      this.post.attachment_files.push(event.target.files[0]);
    }
  }

  switch_delivery_types(type) {
    switch (type) {
      case Delivery_Types.Publish:
        this.post.delivery_type = Delivery_Types.Publish;
        break;
      case Delivery_Types.Schedule:
        this.post.delivery_type = Delivery_Types.Schedule;
        break;
      case Delivery_Types.Draft:
        this.post.delivery_type = Delivery_Types.Draft;
        break;
      default:
        break;
    }
  }

  schedule_date_change() {
    if (this.post.scheduled_time) {
      var date = new Date(this.scheduleDate);
      this.post.scheduled_time.setFullYear(date.getFullYear());
      this.post.scheduled_time.setDate(date.getDate());
      this.post.scheduled_time.setMonth(date.getMonth());
    }
    else {
      this.post.scheduled_time = new Date(this.scheduleDate);
    }
    console.log(this.post.scheduled_time);
  }

  early_access_date_change() {
    if (this.post.early_access_time) {
      var date = new Date(this.earlyAccessDate);
      this.post.early_access_time.setFullYear(date.getFullYear());
      this.post.early_access_time.setDate(date.getDate());
      this.post.early_access_time.setMonth(date.getMonth());
    }
    else {
      this.post.early_access_time = new Date(this.earlyAccessDate);
    }
    console.log(this.post.early_access_time);
  }
  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      const hour = Number.parseInt(time.slice(0, time.lastIndexOf(':')));
      const min = Number.parseInt(time.slice(time.lastIndexOf(':') + 1));
      if (this.post.scheduled_time) {
        this.post.scheduled_time.setHours(hour);
        this.post.scheduled_time.setMinutes(min);
      }
      else {
        this.post.scheduled_time = new Date(0, 0, 0, hour, min);
      }
      console.log(this.post.scheduled_time);
    });
  }
  open1() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      const hour = Number.parseInt(time.slice(0, time.lastIndexOf(':')));
      const min = Number.parseInt(time.slice(time.lastIndexOf(':') + 1));
      if (this.post.early_access_time) {
        this.post.early_access_time.setHours(hour);
        this.post.early_access_time.setMinutes(min);
      } else {
        this.post.early_access_time = new Date(0, 0, 0, hour, min);
      }
      console.log(this.post.early_access_time);
    });
  }

  save() {
    console.log(this.post);
    var page_id = '';
    this.api.get_artist_page().subscribe((page_load) => {
      if (page_load.status) {
        page_id = page_load.page._id;
        const data = {
          user_id: this.user_id,
          page_id: page_id,
          post: {
            title: this.post.title,
            story: this.post.story,
            post_type: this.post.post_type,
            scheduled_time: this.post.scheduled_time,
            early_access_time: this.post.early_access_time,
            early_access: this.post.early_access,
            delivery_type: this.post.delivery_type,
            tags: this.post.tags,
            teaser: this.post.teaser_text,
            video: this.post.video_url
          },
        };
        this.api.create_video_post(data).pipe(map((res) => {
          if (res.status) {
            if (this.post.attachment_files.length > 0) {
              var formData = new FormData;
              formData.append('user_id', this.user_id);
              formData.append('post_id', res.post._id);
              this.post.attachment_files.forEach(element => {
                const file_name = Date.now() + element.name;
                formData.append('file_name[]', file_name);
                formData.append('upload[]', element, file_name);
                // Send files here.
              });
              this.api.save_video_post_attachment(formData).subscribe();
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
    }, error => {
      Swal.fire({
        title: 'Error',
        text: error,
        type: 'error',
        confirmButtonText: 'Ok'
      });
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public api: DatabaseService, private auth: AuthService) { }

  onNoClick(): void {
    this.dialogRef.close();
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
  ) { }

  onNoClick(): void {
    this.dialogRef1.close();
  }

}
