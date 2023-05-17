import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  providedCourses = [
    {
      courseId: 1,
      title: 'Human Resources',
      description: 'lorem10',
    },
    {
      courseId: 2,
      title: 'Professional Development',
      description: 'lorem10',
    },
    {
      courseId: 3,
      title: 'Training and Education',
      description: 'lorem10',
    },
    {
      courseId: 4,
      title: 'Training and Education',
      description: 'lorem10',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  /**
   * Method to navigate to a specific component
   * @param url
   */
  onNavigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  onCourseDetails(url: string): void {
    this.router.navigate(['/courses', this.providedCourses]);
  }
}
