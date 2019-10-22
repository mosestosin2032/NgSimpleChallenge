import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieTumbnailComponent } from './movie-tumbnail.component';
import { FavoriteMoviesComponent } from './favorite-movies.component';
import { Error404Component } from './error404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieTumbnailComponent,
    FavoriteMoviesComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
