import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.less']
})
export class MovieDashboardComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getMovies();
  }

  private getMovies(){
    this.httpService.retrieveMovies().subscribe((res) => {
      console.log(res);
    })
  }
}
