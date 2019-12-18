import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { IMovie, movies } from "src/assets/data/movies";

@Component({
  selector: "app-selected-movie",
  templateUrl: "./selected-movie.component.html",
  styleUrls: ["./selected-movie.component.scss"]
})
export class SelectedMovieComponent implements OnInit {
  movie: IMovie = movies[0];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const urlId = param.get("id");
      this.movie = this.getMovieById(urlId);
    });
  }

  getMovieById(id: string) {
    const filteredArr = movies.filter((movie: IMovie) => {
      return movie.id === id;
    });
    return filteredArr[0];
  }
}
