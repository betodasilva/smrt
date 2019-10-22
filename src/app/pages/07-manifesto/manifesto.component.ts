import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.scss']
})
export class ManifestoComponent implements OnInit {

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/7-manifesto-hat.jpg',
    'imageTablet': 'assets/images/hats/7-manifesto-ismart-tablet.jpg',
    'image': 'assets/images/7-manifesto.jpg',
    'title': 'Capítulo 07',
    'subtitle': 'Manifesto Ismart'
  }
  
  private relatedInfo = [
    {
      'image': 'assets/images/08-resultados-mobile.jpg',
      'title': '08.',
      'subtitle': 'Resultados 2018',
      'url': '08-resultados'
    },
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
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
