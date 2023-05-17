import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  course: ICourse | undefined;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));    
    if (id) {
      this.onGetCourse(id);
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

  onBack(url: string): void {
    this.router.navigateByUrl(url)
  }
}
