import { Component, OnInit, OnDestroy } from '@angular/core';
import { TvShowService } from 'src/app/services/tv-show.service';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';
import { MoviesService } from '../../services/movies.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];
    popularTvShows: Tv[] = [];
    suscriptions$: Subscription[] = [];

    constructor(private moviesService: MoviesService, private tvShowService: TvShowService) {}

    ngOnInit(): void {
        const observabe$1 = this.moviesService.getMovies('popular').subscribe((movies) => {
            this.popularMovies = movies;
        });
        const observabe$2 = this.moviesService.getMovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
        });
        const observabe$3 = this.moviesService.getMovies('upcoming').subscribe((movies) => {
            this.upcomingMovies = movies;
        });
        const observabe$4 = this.tvShowService.getTvs('popular').subscribe((tvShows) => {
            this.popularTvShows = tvShows;
        });
        this.suscriptions$ = [observabe$1, observabe$2, observabe$3, observabe$4];
    }

    ngOnDestroy(): void {
        this.suscriptions$.forEach((subscription) => subscription.unsubscribe());
    }
}
