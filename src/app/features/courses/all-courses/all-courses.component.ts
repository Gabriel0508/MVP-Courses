import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Subject,
  Subscription,
  debounce,
  debounceTime,
  distinct,
  distinctUntilChanged,
  pipe,
  takeUntil,
} from 'rxjs';
import { ICourse } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit, OnDestroy {
  sub = new Subject<void>();
  errorMessage = '';
  searchForm: FormGroup = new FormGroup({});

  courses: ICourse[] = [];
  filteredCourses: ICourse[] = [];
  // keyWord = new Subject<any>();

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCourses = this.filterCourses(value);
  }

  constructor(
    private courseService: CourseService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initSearchForm();
    this.onGetCourses();
    // this.keyWord
    //   .pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.sub))
    //   .subscribe((keyWord) => this.filterCourses(keyWord));
  }

  ngOnDestroy(): void {
    this.sub.complete();
  }

  /**
   * Method to get the all courses
   */
  onGetCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  // filterCourses(filterBy: string) {
  //   this.courses.filter((course: ICourse) => course.title.includes(filterBy));
  // }

  /**
   * Method to filter the courses
   * @param filterBy 
   * @returns 
   */
  filterCourses(filterBy: string): ICourse[] {
    filterBy = filterBy.toUpperCase();
    return this.courses.filter((course: ICourse) =>
      course.title.includes(filterBy)
    );
  }

  /**
   * Method to navigate to the details of course
   * @param id
   */
  onCourseDetails(id: number) {
    const courseId = `/courses/${id}`;
    this.router.navigateByUrl(courseId);
  }

  onNavigateHome(url: string) {
    const home = `/`;
    this.router.navigateByUrl(home);
  }

  onNavigateToCourses(str: string) {
    const courses = `/courses`;
    this.router.navigateByUrl(courses);
  }

  /**
   * Method to init the search form
   */
  private initSearchForm(): void {
    this.searchForm = this.fb.group({
      search: [''],
    });
  }
}
