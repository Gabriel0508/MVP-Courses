import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  Observable,
  catchError,
  map,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { ICourse } from '../models/course.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseUrl = '/assets/api/courses/courses.json';

  constructor(private httpClient: HttpClient) {}

  /**
   * All courses
   * @returns
   */
  getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.courseUrl).pipe(
      map((res) => res),
      shareReplay(),
      catchError(this.handleError)
    );
  }

  /**
   * Method to get the course id
   * @param id
   * @returns
   */
  getCourse(id: number): Observable<ICourse | undefined> {
    return this.getCourses().pipe(
      map((courses: ICourse[]) =>
        courses.find((course) => course.courseId === id)
      )
    );
  }

  getCourseUrl(url: string): Observable<ICourse | undefined> {
    return this.getCourses().pipe(
      map((courses: ICourse[]) => 
      courses.find((course) => course.url === url))      
    );
  }

  /**
   * Error handle
   * @param err
   * @returns
   */
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
