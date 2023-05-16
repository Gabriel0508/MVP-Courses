import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutTemplateComponent } from './layout-template/layout-template.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  exports: [HeaderComponent, LayoutTemplateComponent]
})
export class SharedModule { }