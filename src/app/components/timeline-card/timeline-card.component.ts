import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {

  @Input() title: string;
  @Input() excerpt: any;
  @Input() icon: string;
  @Input() last = false;
  constructor() { }

  ngOnInit() {
  }

}
