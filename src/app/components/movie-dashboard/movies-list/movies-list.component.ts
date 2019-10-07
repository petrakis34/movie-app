import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/models/classes/movie.model';
import { PaginationData } from 'src/app/models/classes/paginationData.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent implements OnInit {
  public totalPages: number;
  public pd: PaginationData;

  @Input()
  movies: Movie[];

  @Input()
  paginationData: PaginationData;

  @Output()
  onMovieClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  onPageSelected: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.paginationData && changes.paginationData.currentValue) {
      this.paginationData = changes.paginationData.currentValue;
    }
  }

  public movieClicked(movieId: number) {
    this.onMovieClicked.emit(movieId);
  }

  public onPageChanged(pageSelected: number) {
    if(pageSelected) this.onPageSelected.emit(pageSelected);
  }
}
