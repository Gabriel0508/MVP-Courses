import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Output() courseDetails = new EventEmitter<number>();
  @Input() courseImage: string = '';
  @Input() category: string = '';
  @Input() title: string = '';
  @Input() description = '';
  @Input() courseId: number = -1;
  @Input() url: string = '';

  constructor() {}

  ngOnInit(): void {}

  onCourseDetails(): void {
    this.courseDetails.emit(this.courseId);
  }
}
