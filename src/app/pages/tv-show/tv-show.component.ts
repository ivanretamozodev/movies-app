import { TvShowService } from 'src/app/services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { Tv, TvShowImages, TvShowVideo, TvShowCredits } from './../../models/tv';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tv-show',
    templateUrl: './tv-show.component.html',
    styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
    tvShow!: Tv;
    tvShowVideos: TvShowVideo[] = [];
    tvShowImages!: TvShowImages;
    tvShowCredits: TvShowCredits | null = null;
    tvshowsimilar: Tv[] = [];
    imagesSizes = IMAGES_SIZES;
    subscriptions$: Subscription[] = [];

    constructor(private route: ActivatedRoute, private tvShowService: TvShowService) {}

    ngOnInit(): void {
        this.route.params.subscribe(({ id }) => {
            this.getTvShow(id);
            this.getTvShowVideos(id);
            this.getTvShowImages(id);
        });
    }

    getTvShow(id: string) {
        this.tvShowService.getTvShow(id).subscribe((tvshow) => (this.tvShow = tvshow));
    }
    getTvShowVideos(id: string) {
        this.tvShowService.getTvShowVideos(id).subscribe((videos) => (this.tvShowVideos = videos));
    }
    getTvShowImages(id: string) {
        this.tvShowService.getTvShowImages(id).subscribe((images) => (this.tvShowImages = images));
    }
    getTvShowCredits(id: string) {
        this.tvShowService
            .getTvShowCredits(id)
            .subscribe((credits) => (this.tvShowCredits = credits));
    }
    getTvShowSimilar(id: string) {}
}
