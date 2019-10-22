import { FavoriteMoviesComponent } from './favorite-movies.component';
import { MovieDetailComponent } from './movie-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { Error404Component } from './error404.component';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'favoriets', component: FavoriteMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
