import { Component, OnInit, ViewChild } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal: ModalComponent;
  title = '05. Parceiros Ismart - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/5-parceiros-hat.jpg',
    'imageTablet': 'assets/images/hats/5-parceiros-tablet.jpg',
    'image': 'assets/images/5-parceiros.jpg',
    'title': 'Capítulo 05',
    'subtitle': 'Parceiros Ismart'
  }

  private relatedInfo = [
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
    {
      'image': 'assets/images/08-resultados-mobile.jpg',
      'title': '08.',
      'subtitle': 'Resultados 2018',
      'url': '08-resultados'
    }
  ]

  constructor(
    private testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/5-parceiros-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '05. Parceiros Ismart - Ismart'});
  }

}
