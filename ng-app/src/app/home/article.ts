export interface Article {
  articleId: string;
  position: number;
  title: string;
  teaser: string;
  source: string;
  url: string;
  imageUrl: string;
  credit: string;
  category?: string;
  issue: string;
  published: boolean;
  language: string;
  expanded?: boolean;
}
