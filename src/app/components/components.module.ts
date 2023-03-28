import { PrimengModule } from '../primeNG/primeng.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { VideoEmbedComponent } from './video-embed/video-embed.component';
import { TabPhotosComponent } from './tab-photos/tab-photos.component';
import { SliderComponent } from './slider/slider.component';
import { ItemComponent } from './item/item.component';
import { ItemsBannerComponent } from './items-banner/items-banner.component';
import { TabOverviewComponent } from './tab-overview/tab-overview.component';
import { TabVideosComponent } from './tab-videos/tab-videos.component';

@NgModule({
    declarations: [
        ItemsBannerComponent,
        ItemComponent,
        SliderComponent,
        TabOverviewComponent,
        TabPhotosComponent,
        TabVideosComponent,
        VideoEmbedComponent
    ],
    imports: [RouterModule, PrimengModule],
    exports: [
        ItemsBannerComponent,
        ItemComponent,
        SliderComponent,
        TabOverviewComponent,
        TabPhotosComponent,
        TabVideosComponent,
        VideoEmbedComponent
    ]
})
export class ComponentsModule {}
