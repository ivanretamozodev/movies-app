import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
    exports: [
        ButtonModule,
        CarouselModule,
        ImageModule,
        InputTextModule,
        TabViewModule,
        PaginatorModule
    ]
})
export class PrimengModule {}
