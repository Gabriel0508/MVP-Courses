import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit{
  @Output() courseDetails = new EventEmitter<number>();
  @Input() courseImage: string = '';
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
