import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/classes/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent implements OnInit {
  @Input()
  movies: Movie[];

  @Output()
  onMovieClicked: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  public movieClicked(movieId: number) {
    this.onMovieClicked.emit(movieId);
  }
}
