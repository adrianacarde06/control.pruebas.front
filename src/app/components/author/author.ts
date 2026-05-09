import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../../service/api';
import { AuthorEntity } from '../../model/AuthorEntity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  imports: [FormsModule, CommonModule],
  templateUrl: './author.html',
  styleUrl: './author.css',
})
export class Author {

  autores: AuthorEntity[] = [];

  constructor(private apiService: Api) { 
    
  }

  obtenerAutores() {
    this.apiService.getAuthors().then(data => {
      this.autores = data;
    });
  }
}
