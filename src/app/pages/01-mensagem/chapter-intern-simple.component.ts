import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-intern-simple',
  templateUrl: './chapter-intern-simple.component.html',
  styleUrls: ['./chapter-intern-simple.component.scss']
})
export class ChapterInternSimpleComponentm implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/chapter-hat.jpg',
    'title': 'Capítulo 01',
    'subtitle': 'Mensagem do Conselho'
  }

  constructor() { }

  ngOnInit() {
  }

}
