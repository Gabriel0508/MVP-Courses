import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  course: ICourse | undefined;
  errorMessage = '';
  safeSrc: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/c9F5kMUfFKk'
    );
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const url = this.route.snapshot.paramMap.get('url');
    if (id) {      
      this.onGetCourse(id);
    } else if (url) {
      this.onGetCourseUrl(url);
    }
  }

  /**
   * Method to get the course
   * @param id
   */
  onGetCourse(id: number): void {
    this.courseService.getCourse(id).subscribe({
      next: (course) => (this.course = course),
      error: (err) => (this.errorMessage = err),
    });
  }

  onGetCourseUrl(url: string): void {
    this.courseService.getCourseUrl(url).subscribe({
      next: (course) => (this.course = course),
      error: (err) => (this.errorMessage = err),
    });
  }

  onNavigateHome(url: string): void {
    const home = `/`;
    this.router.navigateByUrl(home);
  }

  onNavigateToCourses(course: string) {
    const courses = `/courses`;
    this.router.navigateByUrl(courses);
  }

  onNavigateToCourseDetails(det: string) {
    // const details = `/courses`
    // this.router.navigateByUrl(details);
  }
}
