import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  public searchTerm: string;

  constructor(private dataService: DataService) {}

  public searchMovie() {
    if(this.searchTerm) this.dataService.searchMovie(this.searchTerm);
  }
}
