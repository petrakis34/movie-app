import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/classes/movie.model';
import { HttpClient } from '@angular/common/http';
import { AppEndpoints } from 'src/app/app.endpoints';
import { IMoviesResponse } from '../models/responses/movies.response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public retrieveMovies(): Observable<any> {
    return this.httpClient.get<IMoviesResponse>(AppEndpoints.discoverMovies)
  }

}
