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

    constructor() {}

    ngOnInit(): void {}

    searchChanged() {}

    paginate(event: any) {}
}
