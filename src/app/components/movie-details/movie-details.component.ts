import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/models/classes/movie.model';
import { AppEndpoints } from 'src/app/app.endpoints';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private movieSub: Subscription;
  private movie: Movie;
  public imageSrc = "";
  public releaseYear: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.movieSub = this.dataService.selectedMovieObs.subscribe(movie => {
      if (movie) {
        this.movie = movie;
        this.getMoviePoster(this.movie);
        this.releaseYear = this.getReleaseYear(this.movie.release_date);
      }
    })
  }

  ngOnDestroy(): void {
    this.movieSub.unsubscribe();
  }

  public getMoviePoster(movie: Movie) {
    if (!movie) return;
    this.imageSrc = AppEndpoints.setUrl(AppEndpoints.posterImage, [movie.poster_path]);
  }

  public getReleaseYear(date: string | Date): string {
    let dateObj: Date;
    if (typeof date === 'string') {
      dateObj = new Date(date);
    } else {
      dateObj = new Date(date);
    }
    console.log(dateObj.getFullYear().toString());
    return dateObj.getFullYear().toString();
  }
}
