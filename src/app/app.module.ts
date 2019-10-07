import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';
import { MoviePreviewComponent } from './components/movie-dashboard/movie-preview/movie-preview.component';
import { MoviesListComponent } from './components/movie-dashboard/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MovieStatsComponent } from './components/movie-stats/movie-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePreviewComponent,
    MovieDashboardComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
