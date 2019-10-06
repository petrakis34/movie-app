import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const routes: Routes = [
  {
    path: 'movies', component: MovieDashboardComponent,
    data: { title: 'Movies Dashboard' }
  },
  {
    path: 'movie/:title', component: MovieDetailsComponent,
    data: { title: 'Movie Details' }
  },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
