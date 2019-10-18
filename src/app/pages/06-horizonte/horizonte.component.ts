import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizonte',
  templateUrl: './horizonte.component.html',
  styleUrls: ['./horizonte.component.scss']
})
export class HorizonteComponent implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/6-horizonte.jpg',
    'title': 'Capítulo 06',
    'subtitle': 'Horizonte'
  }

  constructor() { }

  ngOnInit() {
  }

}
