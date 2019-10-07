import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from 'src/app/models/classes/movie.model';
import { PaginationData } from 'src/app/models/classes/paginationData.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent implements OnInit, OnChanges {
  public totalPages: number;
  public selectedRow: number;

  @Input()
  movies: Movie[];

  @Input()
  paginationData: PaginationData;

  @Output()
  onMoviePicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  onPageSelected: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.paginationData && changes.paginationData.currentValue) {
      this.paginationData = changes.paginationData.currentValue;
    }

    if(changes.movies && changes.movies.currentValue) {
      this.setMovie(this.movies[0]);
    }
  }

  public movieClicked(movie: Movie, index: number) {
    this.selectedRow = index;
    this.onMoviePicked.emit(movie.id);
    this.dataService.sendMovie(movie);
  }

  public onPageChanged(pageSelected: number) {
    if(pageSelected) {
      this.selectedRow = undefined;
      this.onPageSelected.emit(pageSelected);
    }
  }

  private setMovie(movie: Movie) {
    if(!movie) return;
    this.onMoviePicked.emit(movie.id);
    this.dataService.sendMovie(movie);
    this.selectedRow = 0;
  }
}
