import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/models/classes/movie.model';
import { AppEndpoints } from 'src/app/app.endpoints';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.less']
})
export class MoviePreviewComponent implements OnInit {
  public imageSrc = "";
  
  @Input()
  movie: Movie;
  
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.movie && changes.movie.currentValue) {
      this.movie = changes.movie.currentValue;
      this.getMoviePoster(this.movie);
      console.log(this.movie);
    }
  }

  public getMoviePoster(movie: Movie) {
    if(!movie) return;
    this.imageSrc = AppEndpoints.setUrl(AppEndpoints.posterImage, [movie.poster_path]);
  }

  public goToMovie(movie: Movie) {
    this.dataService.sendMovie(movie);
    this.router.navigate(['/movie', movie.title]);
  }
}
