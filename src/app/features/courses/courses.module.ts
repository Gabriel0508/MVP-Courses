import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CreateCourseComponent } from '../course-creation/create-course/create-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AllCoursesComponent, CreateCourseComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoursesModule { }
