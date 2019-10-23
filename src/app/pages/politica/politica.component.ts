import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.scss']
})
export class PoliticaComponent implements OnInit {

  title = '06. Horizonte - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/6-horizonte-hat.jpg',
    'imageTablet': 'assets/images/hats/6-horizonte-tablet.jpg',
    'image': 'assets/images/6-horizonte.jpg',
    // 'title': 'Capítulo 06',
    'subtitle': 'Política de Privacidade'
  }

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/6-horizonte-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Política de Privacidade - Ismart'});
  }

}
