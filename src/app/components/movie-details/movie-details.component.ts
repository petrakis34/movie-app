import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/models/classes/movie.model';
import { AppEndpoints } from 'src/app/app.endpoints';
import { HttpService } from 'src/app/services/http.service';

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
  public genres: string[] = [];

  constructor(private dataService: DataService, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.movieSub = this.dataService.selectedMovieObs.subscribe(movie => {
      if (movie) {
        this.movie = movie;
        this.getMoviePoster(this.movie);
        this.getGenres(movie);
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

  public goToMovieList() {
    this.router.navigate(['/movies']);
  }

  private getGenres(movie: Movie) {
    let tempGenres = [];
    this.httpService.retrieveGenres().subscribe((res) => {
      if (!res || res.length == 0) return;
      res.forEach(r => tempGenres.push(r));
      if(tempGenres.length == 0) return;
      tempGenres.filter(r => movie.genre_ids.includes(r.id)).forEach(x => this.genres.push(x.name));
      console.log(this.genres);
    })
  }
}
