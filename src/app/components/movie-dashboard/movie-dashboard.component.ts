import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Movie } from 'src/app/models/classes/movie.model';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.less']
})
export class MovieDashboardComponent implements OnInit {
  public movies: Movie[] = [];
  public movie: Movie;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getMovies();
  }

  private getMovies(){
    this.httpService.retrieveMovies().subscribe((results) => {
      if(results && results.length > 0) {
        results.forEach(r => this.movies.push(r));
      }
    })
  }

  public getClickedMovie(movieId: number) {
    if(movieId) {
      this.movie = this.movies.find(x => x.id == movieId);
    }
  }
}
