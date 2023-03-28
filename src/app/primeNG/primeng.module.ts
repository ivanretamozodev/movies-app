import { NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
    exports: [CarouselModule, ImageModule, TabViewModule, PaginatorModule]
})
export class PrimengModule {}
