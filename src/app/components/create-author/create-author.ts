import { Component } from '@angular/core';
import { AuthorEntity } from '../../model/AuthorEntity';
import { Api } from '../../service/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookEntity } from '../../model/BookEntity';

@Component({
  selector: 'app-create-author',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-author.html',
  styleUrl: './create-author.css',
})
export class CreateAuthor {
  
  autor: AuthorEntity = new AuthorEntity();
  book: BookEntity = new BookEntity();
  create: boolean = false;

  constructor(private apiService: Api) { 
      
  }

  guardarAutor() {
    let books: BookEntity[] = [];
    books.push(this.book);
    this.autor.books = books;
    this.apiService.saveAuthor(this.autor).then(data => {
      console.log('Author saved:', data);
      this.create = true;
    });
  }

  createNewAuthor() {
    this.autor = new AuthorEntity();
    this.book = new BookEntity();
    this.create = false;
  }
}