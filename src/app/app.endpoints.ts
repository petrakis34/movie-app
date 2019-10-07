export class AppEndpoints {
    private static readonly baseUrl = "https://api.themoviedb.org/3";
    private static readonly baseImageUrl = "https://image.tmdb.org/t/p";
    private static readonly api_key = "?api_key=9198fa6d9a9713bc6b03ee9582525917";

    public static discoverMovies = AppEndpoints.baseUrl + "/discover/movie" + AppEndpoints.api_key;
    public static genreMovies = AppEndpoints.baseUrl + "/genre/movie/list" + AppEndpoints.api_key;
    public static posterImage = AppEndpoints.baseImageUrl + "/w500/:p" + AppEndpoints.api_key;
    public static searchKeywords = AppEndpoints.baseUrl + "/search/keyword" + AppEndpoints.api_key;

    public static setUrl(url: string, params: string[]) {
        params.forEach(p => {
            url = url.replace(':p', p);
        })
        return url;
    }

    public static getQueryUrl(url: string, page?: number, sortBy?: string, searchTerm?: string): string{
        if(page) url += '&page=' + page;
        if(sortBy) url += '&sort_by=' + sortBy;
        if(searchTerm) url += '&query=' + searchTerm; 
        return url;
      }
}