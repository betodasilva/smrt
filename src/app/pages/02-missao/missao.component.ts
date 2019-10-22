import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-missao',
  templateUrl: './missao.component.html',
  styleUrls: ['./missao.component.scss']
})
export class MissaoComponent implements OnInit {

  title = '02. Missão, Visão e Crenças - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/2-missao-visao-crencas-hat.jpg',
    'imageTablet': 'assets/images/hats/2-missao-visao-crencas-tablet.jpg',
    'image': 'assets/images/missao-visao-crencas.jpg',
    'title': 'Capítulo 02',
    'subtitle': 'Missão, Visão e Crenças'
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
      'image': 'assets/images/05-parceiros-mobile.jpg',
      'title': '05.',
      'subtitle': 'Parceiros Ismart',
      'url': '05-parceiros-ismart'
    }
  ]
  
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/2-missao-visao-crencas-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '02. Missão, Visão e Crenças - Ismart'});
  }
}
