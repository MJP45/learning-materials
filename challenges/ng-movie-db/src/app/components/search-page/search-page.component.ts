import { Component, OnInit } from "@angular/core";
import { IMovie } from "src/assets/data/movies";
import { MovieServiceService } from "src/app/services/movie-service.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent implements OnInit {
  movie: IMovie;
  search: string;

  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {}

  searchMovie() {
    this.movieService.fetchMovieByTitle(this.search).then((movie: IMovie) => {
      this.movie = movie;
    });
  }
}
