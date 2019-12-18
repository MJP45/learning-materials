import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";
import { SearchPageComponent } from "./components/search-page/search-page.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SelectedMovieComponent } from "./components/selected-movie/selected-movie.component";
import { MovieServiceService } from "./services/movie-service.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    NavBarComponent,
    MovieListComponent,
    SearchBarComponent,
    ContactComponent,
    FavouritesComponent,
    SearchPageComponent,
    NotFoundComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
