export class NewPostText {
  title?: string;
  story?: string;
  image_file?: File;
  attachment_files?: File[];
  tags?: string[];
  early_access?: boolean;
  early_access_time?: Date;
  teaser_text?: string;
  post_type?: string;
  delivery_type?: string;
  scheduled_time?: Date;
}
