import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../models/genre';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private readonly baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getMovies(type: string = 'upcoming', count: number = 12) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }

    getMovie(id: string) {
        return this.http.get<Movie>(`${this.baseUrl}/movie/${id}`);
    }

    getMovieVideos(id: string) {
        return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos`).pipe(
            switchMap((res) => {
                return of(res.results);
            })
        );
    }

    getMoviesGenres() {
        return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list`).pipe(
            switchMap((res) => {
                return of(res.genres);
            })
        );
    }

    getMoviesByGenre(genreId: string, pageNumber: number) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getMovieImages(id: string) {
        return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images`);
    }

    getMovieCredits(id: string) {
        return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits`);
    }

    getMovieSimilar(id: string) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, 12));
            })
        );
    }

    searchMovies(page: number, searchValue?: string) {
        const uri = searchValue ? '/search/movie' : '/movie/popular';
        return this.http
            .get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
}
