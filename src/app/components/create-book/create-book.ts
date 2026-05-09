import { Component } from '@angular/core';
import { BookEntity } from '../../model/BookEntity';
import { Api } from '../../service/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthorEntity } from '../../model/AuthorEntity';

@Component({
  selector: 'app-create-book',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-book.html',
  styleUrl: './create-book.css',
})
export class CreateBook {

  book: BookEntity = new BookEntity();
  autorSeleccionado: number | undefined;
  autores: AuthorEntity[] = [];
  create: boolean = false;

  constructor(private apiService: Api) { 
    this.obtenerAutores();
  }

  guardarLibro() {
    this.book.authorId = this.autorSeleccionado;
      this.apiService.saveBook(this.book).then(data => {
        console.log('Book saved:', data);
      });
  }

  createNewBook() {
    this.book = new BookEntity();
    this.create = false;
  }

  obtenerAutores() {
    this.apiService.getAuthors().then(data => {
      this.autores = data;
    });
  }
    
}
