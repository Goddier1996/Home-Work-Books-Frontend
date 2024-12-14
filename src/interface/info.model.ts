export interface BooksInfo {
  _id: string;
  title: string;
  author: string;
  id: string;
  publishedDate: string;
  availableCopies: number;
}
[];


export interface BooksInfoId {
  _id?: string;
  title?: string;
  author?: string;
  id?: string;
  publishedDate?: string;
  availableCopies?: number;
}


export interface ObjectCustomHookSearch {
  typeHowUse?: string;
  valueSearch?: string;
  infoSearch?: any;
}