import { TvShowService } from 'src/app/services/tv-show.service';
import { Tv } from 'src/app/models/tv';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tv-shows',
    templateUrl: './tv-shows.component.html',
    styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
    searchValue: string = '';
    tvShows: Tv[] = [];

    constructor(private readonly tvShowService: TvShowService) {}

    ngOnInit(): void {
        this.getPagedTvShows(1, this.searchValue);
    }

    getPagedTvShows(page: number, search?: string) {
        this.tvShowService.searchTvShows(page, search).subscribe((show) => (this.tvShows = show));
    }

    searchChanged() {}

    paginate(event: any) {
        const pageNumber = event.page + 1;
        if (this.searchValue) {
            this.getPagedTvShows(pageNumber, this.searchValue);
        } else {
            this.getPagedTvShows(pageNumber);
        }
    }
}
