import { Component } from '@angular/core';
import { BookEntity } from '../../model/BookEntity';
import { Api } from '../../service/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule, FormsModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  
  books: BookEntity[] = [];

  constructor(private apiService: Api) { 
     
  }

  obtenerLibros() {
    this.apiService.getBooks().then(data => {
      this.books = data;
    });
  }
}
