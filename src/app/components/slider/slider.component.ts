import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Tv } from 'src/app/models/tv';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('slideFade', [
            state('void', style({ opacity: 0 })),
            transition('void <=> *', [animate('1s')])
        ])
    ]
})
export class SliderComponent implements OnInit {
    @Input() items: Movie[] | Tv[] = [];
    @Input() isBanner: boolean = false;
    @Input() routerButton: string = '';
    @Input() buttonText: string = '';

    currentSlideIndex: number = 0;

    readonly imagesSizes = IMAGES_SIZES;

    ngOnInit(): void {
        if (!this.isBanner) {
            setInterval(() => {
                this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
            }, 5000);
        }
    }
}
