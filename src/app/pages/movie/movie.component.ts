import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    movieImages!: MovieImages;
    movieCredits: MovieCredits | null = null;
    imagesSizes = IMAGES_SIZES;
    similarMovies: Movie[] = [];
    subscriptions$: Subscription[] = [];

    constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.route.params.pipe().subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideos(id);
            this.getMovieImages(id);
            this.getMovieCredits(id);
            this.getMovieSimilar(id);
        });
    }

    getMovie(id: string) {
        const observable$1 = this.moviesService.getMovie(id).subscribe((movieData) => {
            this.movie = movieData;
        });
        this.subscriptions$ = [observable$1];
    }

    getMovieVideos(id: string) {
        const observable$2 = this.moviesService.getMovieVideos(id).subscribe((movieVideosData) => {
            this.movieVideos = movieVideosData;
        });
        this.subscriptions$.push(observable$2);
    }

    getMovieSimilar(id: string) {
        const observable$3 = this.moviesService
            .getMovieSimilar(id)
            .subscribe((movieSimilarData) => {
                this.similarMovies = movieSimilarData;
            });
        this.subscriptions$.push(observable$3);
    }

    getMovieImages(id: string) {
        const observable$4 = this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
            this.movieImages = movieImagesData;
        });
        this.subscriptions$.push(observable$4);
    }

    getMovieCredits(id: string) {
        const observable$5 = this.moviesService
            .getMovieCredits(id)
            .subscribe((movieCreditsData) => {
                this.movieCredits = movieCreditsData;
            });
        this.subscriptions$.push(observable$5);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((suscription) => suscription.unsubscribe());
    }
}
