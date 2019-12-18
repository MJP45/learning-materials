import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IMovie } from "src/assets/data/movies";

interface IMovieResponse {
  Year: string;
  Poster: string;
  Title: string;
}

@Injectable({
  providedIn: "root"
})
export class MovieServiceService {
  constructor(private httpClient: HttpClient) {}

  fetchMovieByTitle(search: string): Promise<IMovie> {
    return this.httpClient
      .get(`http://www.omdbapi.com/?apikey=ea07f6af&t=${search}`)
      .toPromise()
      .then((data: IMovieResponse) => {
        const id = Math.floor(Math.random() * 10).toString();
        const { Title, Poster, Year } = data;
        return { Title, Poster, id, Year } as IMovie;
      })
      .catch((err: Error) => {
        throw err;
      });
  }
}
