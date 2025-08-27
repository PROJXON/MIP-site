export type WPStatus = 'open' | 'closed';

export interface WPBlogPost {
  author: number;
  categories: number[];
  comment_status: WPStatus;
  content: WPPostContent;
  date: Date;
  date_gmt: Date;
  excerpt: WPPostContent;
  featured_media: number;
  format:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  guid: WPPostContent;
  id: number;
  link: URL;
  meta: Record<string, string>;
  modified: Date;
  modified_gmt: Date;
  ping_status: WPStatus;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type: string;
  template: string;
  title: WPPostContent;
  [prop: string]: any;
}

export interface WPPostContent {
  protected?: boolean;
  rendered: string;
}
