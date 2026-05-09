import { Routes } from '@angular/router';
import { Author } from './components/author/author';
import { Book } from './components/book/book';
import { CreateAuthor } from './components/create-author/create-author';
import { CreateBook } from './components/create-book/create-book';

export const routes: Routes = [
   { path: 'author', component: Author },
   { path: 'create-author', component: CreateAuthor },
   { path: 'book', component: Book } ,
   { path: 'create-book', component: CreateBook },
];
