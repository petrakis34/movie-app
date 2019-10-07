import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, IMovie } from 'src/app/models/classes/movie.model';
import { HttpClient } from '@angular/common/http';
import { AppEndpoints } from 'src/app/app.endpoints';
import { IMoviesResponse } from '../models/responses/movies.response';
import { map } from 'rxjs/operators';
import { IGenericModel } from '../models/classes/generic.model';
import { IMovieGenresResponse } from '../models/responses/movieGenres.response';
import { SearchResponse } from '../models/responses/search.response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public retrieveMovies(page?: number): Observable<IMoviesResponse> {
    const sort = "popularity.desc";
    const generatedUrl = AppEndpoints.getQueryUrl(AppEndpoints.discoverMovies, page, sort)
    return this.httpClient.get<IMoviesResponse>(generatedUrl).pipe(
      map((res) => { return res; })
    )
  }

  public retrieveGenres(): Observable<IGenericModel[]> {
    return this.httpClient.get<IMovieGenresResponse>(AppEndpoints.genreMovies).pipe(
      map((res) => { return res.genres; })
    );
  }

  public retrieveSearchedMovies(term: string): Observable<SearchResponse> {
    const generatedUrl = AppEndpoints.getQueryUrl(AppEndpoints.searchKeywords, undefined, undefined, term);
    return this.httpClient.get<SearchResponse>(generatedUrl).pipe(
      map((res) => { return res; })
    );
  }
}
