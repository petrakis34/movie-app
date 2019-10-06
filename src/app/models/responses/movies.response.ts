import { IMovie } from '../classes/movie.model';

export interface IMoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: IMovie[];
}