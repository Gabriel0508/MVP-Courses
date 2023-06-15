import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss'],
})
export class GenericCardComponent implements OnInit {
  @Output() courseDetails = new EventEmitter<string>();
  @Input() courses: ICourse[] = [];
  @Input() url: string = '';

  constructor() {}

  ngOnInit(): void {}

  onCourseDetails(): void {
    this.courseDetails.emit(this.url);
  }
}
