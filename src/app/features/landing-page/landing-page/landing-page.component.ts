import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, catchError, map } from 'rxjs';
import { ICourse } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined;
  errorMessage = '';
  courses: ICourse[] = [];

  constructor(
    private router: Router,
    public translate: TranslateService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.onGetCourses();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   * Method to get the Courses
   */
  onGetCourses(): void {
    this.sub = this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => (this.errorMessage = err),
    });

    // const courses$ = this.courseService.getCourses().pipe(
    //   map((courses) => courses.sort(sortCoursesByCategory)),
    //   catchError((err) => (this.errorMessage = err))
    // );

    // this.webCourses$ = courses$.pipe(
    //   map((courses) => {
    //     courses.filter((courses) => courses.category == 'Web-Dev');
    //   })
    // );

    // this.courseService.getCourses().subscribe((res) => {
    //   const courses: ICourse[] = res.sort(sortCoursesByCategory);

    //   this.webCourses = courses.filter(
    //     (course) => course.category == 'Web Development'
    //   );

    //this.advancedCourses = courses.filter(course => course.category == "ADVANCED");
    //});
  }

  /**
   * Method to navigate to all courses component
   * @param url
   */
  onNavigateToCourses(url: string): void {
    const urlName = `/courses`;
    this.router.navigateByUrl(urlName);
  }

  /**
   * Method to navigate to the details of course
   * @param url
   */
  onCourseDetails(url: string): void {
    //const courseUrl = `/courses/${url}`;
    this.router.navigateByUrl('/courses');
  }
}
