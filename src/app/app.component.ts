import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

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
