import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CreateCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule
  ],
  exports: [CreateCourseComponent]
})
export class CourseCreationModule { }
