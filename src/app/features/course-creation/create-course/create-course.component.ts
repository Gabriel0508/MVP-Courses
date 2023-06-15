import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ICourse } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';
import { ValidationsService } from 'src/app/core/services/validations.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit, OnDestroy {
  createCourseForm: FormGroup = new FormGroup({});
  sub: Subscription | undefined;
  errorMessage = '';

  courses: ICourse[] = [];

  constructor(
    private fb: FormBuilder,
    private validationsService: ValidationsService,
    private router: Router,
    private courseService: CourseService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.onCreateCourseForm();
    this.onGetCourses();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   * Method to display the error messages
   * @param field
   * @param errorType
   * @returns
   */
  onInputValidation(field: string, errorType: string): string {
    return this.validationsService.isFieldValid(
      field,
      errorType,
      this.createCourseForm
    );
  }

  /**
   * Method to get the all courses
   */
  onGetCourses(): void {
    this.sub = this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  /**
   * Method to submit the login form
   */
  onCreateCourse(): void {
    if (this.courses.find((item) => item.title === this.createCourseForm.controls['title'].value)) {
      this.showError();
      return;
    }

    const newCourse = this.createCourseForm.value;

    if (this.createCourseForm.valid) {
      // const createCourse$ = this.http.post('/assets/api/courses/courses.json', newCourse);
      // createCourse$.subscribe();

      this.showSuccess();
    }

    this.onNavigateTo('/courses');
  }

  /**
   * Method to init the login form
   */
  private onCreateCourseForm(): void {
    this.createCourseForm = this.fb.group({
      category: [''],
      title: [''],
      description: [''],
      createdBy: [''],
      duration: [''],
    });
  }

  /**
   * Method to navigate to a specific component
   * @param url
   */
  private onNavigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  /**
   * Method to show the success notification
   */
  private showSuccess(): void {
    this.toastr.success(
      'Check again the courses!',
      `The ${this.createCourseForm.controls['title'].value} course was created`,
      {
        timeOut: 5000,
      }
    );
  }

  /**
   * Merthod to show the error notification
   */
  private showError(): void {
    this.toastr.error(
      'Check again the course name!',
      `The ${this.createCourseForm.controls['title'].value} course title already exist`,
      {
        timeOut: 5000,
      }
    );
  }
}
