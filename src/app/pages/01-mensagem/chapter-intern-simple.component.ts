import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-intern-simple',
  templateUrl: './chapter-intern-simple.component.html',
  styleUrls: ['./chapter-intern-simple.component.scss']
})
export class ChapterInternSimpleComponentm implements OnInit {

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/1-mensagem-do-conselho-hat.jpg',
    'imageTablet': 'assets/images/hats/1-mensagem-do-conselho-tablet.jpg',
    'image': 'assets/images/1-mensagem-do-conselho.jpg',
    'title': 'Capítulo 01',
    'subtitle': 'Mensagem do Conselho'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Contato',
      'url': '04-trajetorias-ismart-contato'
    },
    {
      'image': 'assets/images/7-manifesto-ismart-mobile.jpg',
      'title': '07.',
      'subtitle': 'Resultados 2018',
      'url': ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
