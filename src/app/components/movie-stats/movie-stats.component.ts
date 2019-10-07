import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/classes/movie.model';

@Component({
  selector: 'app-movie-stats',
  templateUrl: './movie-stats.component.html',
  styleUrls: ['./movie-stats.component.less']
})
export class MovieStatsComponent implements OnInit, OnDestroy {
  private selectedMovieSub: Subscription;
  public movie: Movie;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedMovieSub = this.dataService.selectedMovieObs.subscribe(movie => {
      if(movie) this.movie = movie;
    })
  }

  ngOnDestroy() {
    this.selectedMovieSub.unsubscribe();
  }

}
