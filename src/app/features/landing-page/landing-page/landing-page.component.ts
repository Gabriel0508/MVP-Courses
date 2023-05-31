import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  providedCourses: ICourse[] = [];

  constructor(
    private router: Router,
    public translate: TranslateService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.onGetProvidedCourses();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   * Method to get the provided Courses
   */
  onGetProvidedCourses(): void {
    this.sub = this.courseService.getProvidedCourses().subscribe({
      next: (providedCourses) => {
        this.providedCourses = providedCourses;
      },
      error: (err) => (this.errorMessage = err),
    });
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
   * @param id
   */
  onCourseDetails(id: number): void {
    const courseId = `/courses/${id}`;
    this.router.navigateByUrl(courseId);
  }
}
