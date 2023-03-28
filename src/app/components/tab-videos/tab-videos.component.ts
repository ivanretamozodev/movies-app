import { MovieVideo } from 'src/app/models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-videos',
    templateUrl: './tab-videos.component.html',
    styleUrls: ['./tab-videos.component.scss']
})
export class TabVideosComponent {
    @Input() movieVideos!: MovieVideo[];
}
