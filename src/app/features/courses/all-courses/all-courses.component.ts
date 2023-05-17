import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICourse } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined;
  errorMessage = '';

  courses: ICourse[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this, this.onGetCourses();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   * Method to get the courses
   */
  onGetCourses(): void {
    this.sub = this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
