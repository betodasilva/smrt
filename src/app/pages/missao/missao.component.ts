import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missao',
  templateUrl: './missao.component.html',
  styleUrls: ['./missao.component.scss']
})
export class MissaoComponent implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/chapter-hat.jpg',
    'title': 'Capítulo 01',
    'subtitle': 'Mensagem do Conselho'
  }
  constructor() { }

  ngOnInit() {
  }

}
