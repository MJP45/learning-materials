import { Component, OnInit } from "@angular/core";
import { IMovie, movies } from "src/assets/data/movies";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = movies;
  filteredMovies: IMovie[] = this.movies;

  constructor() {}

  ngOnInit() {}

  filterMovies(search: string) {
    this.filteredMovies = this.movies.filter((movie: IMovie) => {
      return movie.Title.toLowerCase().includes(search.toLowerCase().trim());
    });
  }
}
