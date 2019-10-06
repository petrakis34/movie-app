import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';


const routes: Routes = [
  {
    path: 'movies', component: MovieDashboardComponent,
    data: { title: 'Movies Dashboard' }
  },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
