import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Author } from './components/author/author';
import { Book } from './components/book/book';
import { CreateAuthor } from './components/create-author/create-author';
import { CreateBook } from './components/create-book/create-book';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Author, Book, CreateBook, CreateAuthor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreProyecto = 'Biblioteca';
  descripcionProyecto = 'Proyecto de control de préstamos de libros en una biblioteca';
  autor = 'Adriana Cardenas';
}
