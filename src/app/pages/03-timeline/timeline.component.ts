import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline/timeline.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/3-timeline.jpg',
    'title': 'Capítulo 03',
    'subtitle': 'Linha do Tempo'
  }

  public masonryOptions: NgxMasonryOptions = {
    fitWidth: true,
    gutter: 20
  }

  constructor(private timeline: TimelineService) { }

  ngOnInit() {
  }

}
