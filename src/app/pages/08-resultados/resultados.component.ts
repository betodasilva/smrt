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
  constructor() { }

  ngOnInit() {
  }

}
