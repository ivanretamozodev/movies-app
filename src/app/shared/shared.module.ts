import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [FooterComponent, HeaderComponent],
    imports: [CommonModule],
    exports: [FooterComponent, HeaderComponent]
})
export class SharedModule {}
