import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Movie } from 'src/app/models/classes/movie.model';
import { PaginationData } from 'src/app/models/classes/paginationData.model';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.less']
})
export class MovieDashboardComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public movie: Movie;
  public paginationData = new PaginationData();
  private searchSub: Subscription;

  constructor(private httpService: HttpService, private dataService: DataService) {}

  ngOnInit() {
    this.getMovies();
    this.searchSub = this.dataService.searchedMovieObs.subscribe(searchTerm => {
      if(searchTerm) this.getSearchedMovies(searchTerm);
    })
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
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

  private getSearchedMovies(searchTerm?: string){
    if(searchTerm) {
      this.httpService.retrieveSearchedMovies(searchTerm).subscribe((res) => {
        if(res && res.results) console.log(res);
      })
    }
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
