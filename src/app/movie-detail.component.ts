import { Component, OnInit } from '@angular/core';
import { IMovie} from './IMovie';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: IMovie;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const movies = JSON.parse(sessionStorage.getItem('movies'));
    const movieId = this.route.snapshot.params['id'];
    this.movie = movies.filter((m: { Id: number; }) => m.Id === +movieId)[0];
    // console.log(this.route.snapshot.params);
  }

}
