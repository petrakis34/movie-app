import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/models/classes/movie.model';
import { AppEndpoints } from 'src/app/app.endpoints';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.less']
})
export class MoviePreviewComponent implements OnInit {
  public imageSrc = "";
  @Input()
  movie: Movie;
  
  constructor() { }

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
}
