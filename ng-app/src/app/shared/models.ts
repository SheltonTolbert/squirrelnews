export interface Issue {
  headline: string;
  teaser: string;
  image: string;
  imageCredit: string;
  language: 'de' | 'en';
  publishedAt: Date;
  title: string;
  issueURL: string;
  showDonation: boolean;
  donationTitle: string;
  donationText: string;
  articles: Article[];
}

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


export interface Donate {
  title: string;
  text: string;
  case?: string;
}