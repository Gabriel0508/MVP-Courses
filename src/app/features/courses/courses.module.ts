import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllCoursesComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
