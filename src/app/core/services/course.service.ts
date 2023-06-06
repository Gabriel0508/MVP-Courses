import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, shareReplay, tap, throwError } from 'rxjs';
import { ICourse } from '../models/course.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseUrl = './assets/api/courses/courses.json';
  private providedCourses = './assets/api/courses/providedCourses.json';

  constructor(private httpClient: HttpClient) {}

  /**
   * All courses
   * @returns
   */
  getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.courseUrl).pipe(
      tap((data) => data),
      shareReplay(),
      catchError(this.handleError)
    );
  }

  /**
   * Provided courses
   * @returns
   */
  getProvidedCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.providedCourses).pipe(
      tap((data) => data),
      shareReplay(),
      catchError(this.handleError)
    );
  }

  /**
   * Course id
   * @param id 
   * @returns 
   */
  getCourse(id: number): Observable<ICourse | undefined> {
    return this.getCourses().pipe(
      map((courses: ICourse[]) => courses.find((p) => p.courseId === id))
    );
  }

  /**
   * providedCourse id
   * @param id 
   * @returns 
   */
  getProvidedCourse(id: number): Observable<ICourse | undefined> {
    return this.getProvidedCourses().pipe(
      map((providedCourses: ICourse[]) => providedCourses.find((p) => p.courseId === id))
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
