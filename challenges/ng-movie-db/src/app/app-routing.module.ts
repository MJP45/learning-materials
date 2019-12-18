import { NotFoundComponent } from "./components/not-found/not-found.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";
import { ContactComponent } from "./components/contact/contact.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchPageComponent } from "./components/search-page/search-page.component";
import { SelectedMovieComponent } from "./components/selected-movie/selected-movie.component";

const routes: Routes = [
  { path: "movies", component: MovieListComponent },
  { path: "movie/:id", component: SelectedMovieComponent },
  { path: "contact", component: ContactComponent },
  { path: "search", component: SearchPageComponent },
  { path: "favourites", component: FavouritesComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
