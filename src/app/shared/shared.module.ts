import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutTemplateComponent } from './layout-template/layout-template.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutTemplateComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  exports: [HeaderComponent, LayoutTemplateComponent, CourseCardComponent]
})
export class SharedModule { }