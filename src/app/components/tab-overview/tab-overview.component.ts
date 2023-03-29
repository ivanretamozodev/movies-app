import { Movie } from 'src/app/models/movie';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Tv } from 'src/app/models/tv';

@Component({
    selector: 'app-tab-overview',
    templateUrl: './tab-overview.component.html',
    styleUrls: ['./tab-overview.component.scss']
})
export class TabOverviewComponent {
    @Input() movie!: Movie | Tv;
    imagesSizes = IMAGES_SIZES;
}
