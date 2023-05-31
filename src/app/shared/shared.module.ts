import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutTemplateComponent } from './layout-template/layout-template.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutTemplateComponent,
    CourseCardComponent,
    BannerComponent,
    GenericCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    TranslateModule,
    BrowserAnimationsModule
  ],
  exports: [HeaderComponent, LayoutTemplateComponent, CourseCardComponent, BannerComponent, GenericCardComponent, FooterComponent]
})
export class SharedModule { }