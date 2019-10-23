import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-trajetorias-internacional',
  templateUrl: './trajetorias-internacional.component.html',
  styleUrls: ['./trajetorias-internacional.component.scss']
})
export class TrajetoriasInternacionalComponent implements OnInit {

  title = '04. Trajetórias Ismart: Seleção - Ismart';

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
      'subtitle': 'EaD',
      'url': '04-trajetorias-ismart-ead'
    },
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
    
  ]

  constructor(
    private titleService: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Seleção - Ismart'});
  }

}
