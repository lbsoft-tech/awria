export class NewPostVideo {
  title?: string;
  story?: string;
  video_url?: string;
  attachment_files?: File[];
  tags?: string[];
  early_access?: boolean;
  early_access_time?: Date;
  teaser_text?: string;
  post_type?: string;
  delivery_type?: string;
  scheduled_time?: Date;
}
