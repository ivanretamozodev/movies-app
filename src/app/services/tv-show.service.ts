import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TvDto } from '../models/tv';
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
}
