import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    exports: [
        ButtonModule,
        CarouselModule,
        ImageModule,
        TabViewModule,
        PaginatorModule,
        InputTextModule
    ]
})
export class PrimengModule {}
