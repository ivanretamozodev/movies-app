import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeNG/primeng.module';

@NgModule({
    declarations: [FooterComponent, HeaderComponent],
    imports: [CommonModule, RouterModule, PrimengModule],
    exports: [FooterComponent, HeaderComponent]
})
export class SharedModule {}
