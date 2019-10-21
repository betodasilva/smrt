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
      'image': 'assets/images/7-manifesto.jpg',
      'title': '07.',
      'subtitle': 'Resultados 2018',
      'url': ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
