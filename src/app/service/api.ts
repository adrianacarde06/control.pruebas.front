import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorEntity } from '../model/AuthorEntity';
import { BookEntity } from '../model/BookEntity';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private urlBase = 'http://localhost:5088/api/';

  private urlGetAuthors = 'Author/List';
  private urlGetBooks = 'Book/List';
  private urlCreateAuthor = 'Author/Create';
  private urlCreateBook = 'Book/Create';

  constructor(private http: HttpClient) { }

  public getAuthors() : Promise<AuthorEntity[]> {
    return fetch(this.urlBase + this.urlGetAuthors)
      .then(response => response.json())
      .catch(error => console.error('Error fetching authors:', error));
  }

  public saveAuthor(author: AuthorEntity) : Promise<AuthorEntity> {
    return fetch(this.urlBase + this.urlCreateAuthor, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(author)
    })
    .then(response => response.json())
    .catch(error => console.error('Error saving author:', error));
  }

  public getBooks() : Promise<BookEntity[]> {
    return fetch(this.urlBase + this.urlGetBooks)
      .then(response => response.json())
      .catch(error => console.error('Error fetching books:', error));
  }

  public saveBook(book: BookEntity) : Promise<BookEntity> {
    return fetch(this.urlBase + this.urlCreateBook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .catch(error => console.error('Error saving book:', error));
  }
}
