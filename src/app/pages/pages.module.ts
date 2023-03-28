import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { ComponentsModule } from '../components/components.module';
import { PrimengModule } from '../primeNG/primeng.module';

@NgModule({
    declarations: [GenresComponent, HomeComponent, MovieComponent, MoviesComponent],
    imports: [RouterModule, ComponentsModule, PrimengModule],
    exports: [GenresComponent, HomeComponent, MovieComponent, MoviesComponent]
})
export class PagesModule {}
