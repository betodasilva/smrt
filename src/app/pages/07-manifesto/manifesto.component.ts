import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.scss']
})
export class ManifestoComponent implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/7-manifesto.jpg',
    'title': 'Capítulo 07',
    'subtitle': 'Manifesto Ismart'
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
