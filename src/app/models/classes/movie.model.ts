
export interface IMovie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: Date;
}

export class Movie implements IMovie {
    constructor() {}

    public popularity: number;
    public vote_count: number;
    public video: boolean;
    public poster_path: string;
    public id: number;
    public adult: boolean;
    public backdrop_path: string;
    public original_language: string;
    public original_title: string;
    public genre_ids: number[];
    public title: string;
    public vote_average: number;
    public overview: string;
    public release_date: Date;
}