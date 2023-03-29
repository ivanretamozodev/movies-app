import { NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    exports: [CarouselModule, ImageModule, TabViewModule, PaginatorModule, InputTextModule]
})
export class PrimengModule {}
