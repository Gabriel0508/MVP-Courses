import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Output() courseDetails = new EventEmitter<string>();
  @Input() courseImage: string = '';
  @Input() title: string = '';
  @Input() description = '';

  constructor() {}

  ngOnInit(): void {}

  onCourseDetails(): void {
    this.courseDetails.emit('');
  }
}
