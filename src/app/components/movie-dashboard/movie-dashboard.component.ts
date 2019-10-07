import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Movie } from 'src/app/models/classes/movie.model';
import { PaginationData } from 'src/app/models/classes/paginationData.model';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.less']
})
export class MovieDashboardComponent implements OnInit {
  public movies: Movie[] = [];
  public movie: Movie;
  public paginationData = new PaginationData();

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getMovies();
  }

  private getMovies(page?: number){
    this.httpService.retrieveMovies(page).subscribe((res) => {
      if(res && res.total_results && res.results.length > 0) {
        this.paginationData.totalPages = res.total_pages;
        this.paginationData.totalResults = res.total_results;
        this.paginationData.currentPage = res.page;
        this.refreshMovies(res.results);
      }
    })
  }

  public getClickedMovie(movieId: number) {
    if(movieId) {
      this.movie = this.movies.find(x => x.id == movieId);
    }
  }

  public getSelectedPage(selectedPage: number) {
    if(selectedPage) {
      this.getMovies(selectedPage);
    };
  }

  private refreshMovies(movies: Movie[]) {
    this.movies = movies;
  }
}
