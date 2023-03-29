import {
    Tv,
    TvDto,
    TvShowCredits,
    TvShowImages,
    TvShowVideo,
    TvShowVideoDto
} from './../models/tv';
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
    private readonly apiKey: string = environment.apiKey;
    constructor(private readonly http: HttpClient) {}

    getTvs(type: string = 'latest', count: number = 12) {
        return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }

    getTvShow(id: string) {
        return this.http.get<Tv>(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
    }

    getTvShowVideos(id: string) {
        return this.http
            .get<TvShowVideoDto>(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getTvShowImages(id: string) {
        return this.http.get<TvShowImages>(
            `${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`
        );
    }

    getTvShowCredits(id: string) {
        return this.http.get<TvShowCredits>(
            `${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`
        );
    }
}
