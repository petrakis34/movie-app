export class AppEndpoints {
    private static readonly baseUrl = "https://api.themoviedb.org/3";
    private static readonly api_key = "?api_key=9198fa6d9a9713bc6b03ee9582525917";

    public static discoverMovies = AppEndpoints.baseUrl + "/discover/movie" + AppEndpoints.api_key;

}