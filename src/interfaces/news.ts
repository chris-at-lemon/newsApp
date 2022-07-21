export interface INews {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  id?: string;
  read?: false | any;
  fav?: false | any;
}

export interface ICurrentNews {
  currentNews: INews[];
}

export interface ISearchNews {}

export interface ISetNews {}
