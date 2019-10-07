import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../models/classes/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedMovieSubj: BehaviorSubject<Movie> = new BehaviorSubject(undefined);
  public selectedMovieObs: Observable<Movie> = this.selectedMovieSubj.asObservable();

  private searchedMovieSubj: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public searchedMovieObs: Observable<string> = this.searchedMovieSubj.asObservable();

  constructor() { }

  public sendMovie(movie: Movie) {
    this.selectedMovieSubj.next(movie);
  }

  public searchMovie(term: string) {
    this.searchedMovieSubj.next(term);
  }
}
