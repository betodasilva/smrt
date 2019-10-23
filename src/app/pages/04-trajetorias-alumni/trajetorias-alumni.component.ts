import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-trajetorias-alumni',
  templateUrl: './trajetorias-alumni.component.html',
  styleUrls: ['./trajetorias-alumni.component.scss']
})
export class TrajetoriasAlumniComponent implements OnInit {

  title = '04. Trajetórias Ismart: Alumni - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/4-trajetorias-hat.jpg',
    'imageTablet': 'assets/images/hats/4-trajetorias-tablet.jpg',
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'Capítulo 04',
    'subtitle': 'Trajetórias Ismart'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/05-parceiros-mobile.jpg',
      'title': '05.',
      'subtitle': 'Parceiros Ismart',
      'url': '05-parceiros-ismart'
    },
    {
      'image': 'assets/images/06-horizonte-mobile.jpg',
      'title': '06.',
      'subtitle': 'Horizonte',
      'url': '06-horizonte'
    },
    {
      'image': 'assets/images/7-manifesto-ismart-mobile.jpg',
      'title': '07.',
      'subtitle': 'Manifesto Ismart',
      'url': '07-manifesto'
    },
  ]
  
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Alumni - Ismart'});
  }

}
