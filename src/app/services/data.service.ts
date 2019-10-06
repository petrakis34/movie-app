import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../models/classes/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedMovieSubj: BehaviorSubject<Movie> = new BehaviorSubject(undefined);
  public selectedMovieObs: Observable<Movie> = this.selectedMovieSubj.asObservable();

  constructor() { }

  public sendMovie(movie: Movie) {
    this.selectedMovieSubj.next(movie);
  }
}
