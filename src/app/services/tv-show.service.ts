import { GenresDto } from './../models/genre';
import { Tv, TvDto, TvShowCredits, TvShowImages, TvShowVideoDto } from './../models/tv';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TvShowService {
    private readonly baseUrl: string = environment.baseUrl;
    constructor(private readonly http: HttpClient) {}

    getTvs(type: string = 'latest', count: number = 12) {
        return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }

    getTvShow(id: string) {
        return this.http.get<Tv>(`${this.baseUrl}/tv/${id}`);
    }

    getTvShowVideos(id: string) {
        return this.http.get<TvShowVideoDto>(`${this.baseUrl}/tv/${id}/videos`).pipe(
            switchMap((res) => {
                return of(res.results);
            })
        );
    }
    getTvShowGenres() {
        return this.http.get<GenresDto>(`${this.baseUrl}/genre/tv/list`).pipe(
            switchMap((res) => {
                return of(res.genres);
            })
        );
    }

    getTvShowImages(id: string) {
        return this.http.get<TvShowImages>(`${this.baseUrl}/tv/${id}/images`);
    }

    getTvShowCredits(id: string) {
        return this.http.get<TvShowCredits>(`${this.baseUrl}/tv/${id}/credits`);
    }

    searchTvShows(page: number, search?: string) {
        const url = search ? '/search/tv' : '/tv/top_rated';
        return this.http.get<TvDto>(`${this.baseUrl}${url}?page=${page}&query=${search}`).pipe(
            switchMap((res) => {
                return of(res.results);
            })
        );
    }
}
