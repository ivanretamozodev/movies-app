import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from '../../models/genre';
import { TvShowService } from 'src/app/services/tv-show.service';

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
    moviesGenres: Genre[] = [];
    tvShowGenres: Genre[] = [];

    constructor(
        private readonly moviesService: MoviesService,
        private readonly tvShowService: TvShowService
    ) {}

    ngOnInit(): void {
        this.getMovieGenre();
    }

    getTvShowGenre() {
        this.tvShowService.getTvShowGenres().subscribe((genresData) => {
            this.tvShowGenres = genresData;
        });
    }
    getMovieGenre() {
        this.moviesService.getMoviesGenres().subscribe((genresData) => {
            this.moviesGenres = genresData;
        });
    }
}
