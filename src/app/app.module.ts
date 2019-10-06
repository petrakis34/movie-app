import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';
import { MoviePreviewComponent } from './components/movie-dashboard/movie-preview/movie-preview.component';
import { MoviesListComponent } from './components/movie-dashboard/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePreviewComponent,
    MovieDashboardComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
