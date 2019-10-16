import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missao',
  templateUrl: './missao.component.html',
  styleUrls: ['./missao.component.scss']
})
export class MissaoComponent implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/missao-visao-crencas.jpg',
    'title': 'Capítulo 02',
    'subtitle': 'Missão, Visão e Crenças'
  }
  constructor() { }

  ngOnInit() {
  }

}
