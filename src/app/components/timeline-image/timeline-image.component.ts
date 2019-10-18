import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-image',
  templateUrl: './timeline-image.component.html',
  styleUrls: ['./timeline-image.component.scss']
})
export class TimelineImageComponent implements OnInit {
  @Input('path') path: string;
  constructor() { }

  ngOnInit() {
  }

}
