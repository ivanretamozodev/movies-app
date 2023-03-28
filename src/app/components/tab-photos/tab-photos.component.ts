import { Component, Input, OnInit } from '@angular/core';
import { MovieImages } from 'src/app/models/movie';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';

@Component({
    selector: 'app-tab-photos',
    templateUrl: './tab-photos.component.html',
    styleUrls: ['./tab-photos.component.scss']
})
export class TabPhotosComponent {
    @Input() movieImages!: MovieImages;
    imagesSizes = IMAGES_SIZES;
}
