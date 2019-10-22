import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  private chapterHatInfo = {
    'image': 'assets/images/8-resultados.jpg',
    'imageMobile': 'assets/images/3-timeline.jpg',
    'imageTablet': 'assets/images/4-trajetorias.jpg',
    'title': 'Capítulo 08',
    'subtitle': 'Resultados'
  }
  private relatedInfo = [
    {
      'image': 'assets/images/9-lista-de-parceiros-mobile.jpg',
      'title': '09.',
      'subtitle': 'Lista de parceiros',
      'url': '09-lista-parceiros'
    },
    {
      'image': 'assets/images/10-expediente-mobile.jpg',
      'title': '10.',
      'subtitle': 'Expediente',
      'url': '10-expediente'
    },
    {
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
