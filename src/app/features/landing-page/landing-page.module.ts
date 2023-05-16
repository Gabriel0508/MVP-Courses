import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LandingPageComponent]
})
export class LandingPageModule { }
