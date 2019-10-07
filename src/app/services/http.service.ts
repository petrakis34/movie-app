import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, IMovie } from 'src/app/models/classes/movie.model';
import { HttpClient } from '@angular/common/http';
import { AppEndpoints } from 'src/app/app.endpoints';
import { IMoviesResponse } from '../models/responses/movies.response';
import { map } from 'rxjs/operators';
import { IGenre } from '../models/classes/genre.model';
import { IMovieGenresResponse } from '../models/responses/movieGenres.response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public retrieveMovies(page?: number): Observable<IMoviesResponse> {
    const sort = "popularity.desc";
    const generatedUrl = AppEndpoints.getQueryUrl(AppEndpoints.discoverMovies, page, sort)
    return this.httpClient.get<IMoviesResponse>(generatedUrl).pipe(
      map((res) => {
        return res;
      })
    )
  }

  public retrieveGenres(): Observable<IGenre[]> {
    return this.httpClient.get<IMovieGenresResponse>(AppEndpoints.genreMovies).pipe(
      map((res) => { 
        return res.genres })
    );
  }
}
