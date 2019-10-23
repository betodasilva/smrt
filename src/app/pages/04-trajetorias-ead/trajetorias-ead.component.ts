import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-trajetorias-ead',
  templateUrl: './trajetorias-ead.component.html',
  styleUrls: ['./trajetorias-ead.component.scss']
})
export class TrajetoriasEadComponent implements OnInit {

  title = '04. Trajetórias Ismart: Prática - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/4-trajetorias-hat.jpg',
    'imageTablet': 'assets/images/hats/4-trajetorias-tablet.jpg',
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'Capítulo 04',
    'subtitle': 'Trajetórias Ismart'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Universidade',
      'url': '04-trajetorias-ismart-universidade'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Alumni',
      'url': '04-trajetorias-ismart-alumni'
    },
    {
      'image': 'assets/images/05-parceiros-mobile.jpg',
      'title': '05.',
      'subtitle': 'Parceiros Ismart',
      'url': '05-parceiros-ismart'
    },
  ]
  
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Prática - Ismart'});
  }

}