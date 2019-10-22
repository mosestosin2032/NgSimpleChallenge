import { Component, OnInit } from '@angular/core';
import { IMovie} from './IMovie';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  movies: IMovie[] = [];
  constructor() { }

  ngOnInit() {
    const mmovies = JSON.parse(sessionStorage.getItem('movies'));
    this.movies = mmovies.filter((m: { IsFavorite: any; }) => m.IsFavorite);
  }

}
