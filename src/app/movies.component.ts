import { Component, OnInit } from '@angular/core';
import { IMovie } from './IMovie';
import { faHeartbeat, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  allMovies: IMovie[] = [];
  favIcon = faHeart;
  favIconEmpty = faHeartbeat;

  constructor() {}

  onSearchChange(searchValue: string): void {
    // console.log(sessionStorage.getItem('movies'));
    if (searchValue) {
      this.movies = this.movies.filter(
        m => m.Title.toLowerCase().indexOf(searchValue) !== -1
      ); // );
    } else {
      this.movies = JSON.parse(sessionStorage.getItem('movies')); // this.allMovies;
    }
  }

  onFavIconClicked(movieId: number): void {
    const mIndex = this.movies.findIndex(m => m.Id === movieId);
    this.movies[mIndex].IsFavorite = !this.movies[mIndex].IsFavorite;
    sessionStorage.setItem('movies', JSON.stringify(this.movies));
  }

  ngOnInit() {
    if (sessionStorage.getItem('movies') != null) {
      this.movies = JSON.parse(sessionStorage.getItem('movies'));
    } else {
      this.movies.push(
        {
          Id: 1,
          Title: 'Titanic',
          Year: 2000,
          ImageUrl:
            'http://image.tmdb.org/t/p/w500//kHXEpyfl6zqn8a6YuozZUujufXf.jpg',
          Rated: '16+',
          Runtime: '120 Min',
          Genre: 'Romance',
          Director: 'James',
          Writer: 'Jon',
          Actors: 'Kate, Decaprio',
          Plot: 'Amazing plot',
          Language: 'Eng',
          Country: 'USA',
          IsFavorite: true
        },
        {
          Id: 2,
          Title: 'Barbershop',
          Year: 2004,
          ImageUrl:
            'http://image.tmdb.org/t/p/w500//8cHQDaYmyKg1QnI4OeDZHMg5dM.jpg',
          Rated: '16+',
          Runtime: '120 Min',
          Genre: 'Comedy',
          Director: 'Tim',
          Writer: 'Dave',
          Actors: 'Ice Cube, Eve',
          Plot: 'Amazing plot',
          Language: 'Eng',
          Country: 'USA',
          IsFavorite: false
        },
        {
          Id: 3,
          Title: 'Hitch',
          Year: 2004,
          ImageUrl:
            'http://image.tmdb.org/t/p/w500//wY1AsrhhymgxVruhkPtfBoLnUA3.jpg',
          Rated: '16+',
          Runtime: '120 Min',
          Genre: 'Comedy',
          Director: 'Tim',
          Writer: 'Dave',
          Actors: 'Will Smith',
          Plot: 'Amazing plot',
          Language: 'Eng',
          Country: 'USA',
          IsFavorite: false
        },
        {
          Id: 4,
          Title: 'New Year\'s Eve',
          Year: 2004,
          ImageUrl:
            'http://image.tmdb.org/t/p/w500//el1pKVogVwmE1dpbeAO1Ol6y1Vl.jpg',
          Rated: '16+',
          Runtime: '120 Min',
          Genre: 'Comedy',
          Director: 'Tim',
          Writer: 'Dave',
          Actors: 'Will Smith',
          Plot: 'Amazing plot',
          Language: 'Eng',
          Country: 'USA',
          IsFavorite: false
        }
      );
      sessionStorage.setItem('movies', JSON.stringify(this.movies));
    }
  }
}
