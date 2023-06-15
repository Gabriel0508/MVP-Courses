import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-17px)' }),
        animate(800, style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class BannerComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() home = '';
  @Input() courses = '';
  @Input() courseCategory = '';
  @Input() courseTitle = '';
  @Output() navigateHome = new EventEmitter<string>();
  @Output() navigateToCourses = new EventEmitter<string>();
  @Output() navigateToCourseDet = new EventEmitter<string>();

  constructor() {}

  /**
   * Method to navigate to a specific component
   * @param url
   */
  onNavigateHome(url: string): void {
    this.navigateHome.emit(url);
  }

  onNavigateToCourses(url: string): void {
    this.navigateToCourses.emit(url);
  }

  //TODO: after the category filter is done
  onNavigateToCourseDetails(url: string): void {
    this.navigateToCourseDet.emit(url);
  }
}
