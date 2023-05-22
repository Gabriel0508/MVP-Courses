import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICourse } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined;
  errorMessage = '';

  providedCourses: ICourse[] = [];

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.onGetProvidedCourses();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   * Method to navigate to a specific component
   * @param url
   */
  onNavigateTo(url: string): void {
    this.router.navigateByUrl(url);
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
   * Method to navigate to the details of course
   * @param url 
   */
  onCourseDetails(url: string): void {
    this.router.navigate(['/courses', this.providedCourses]);
  }
}
