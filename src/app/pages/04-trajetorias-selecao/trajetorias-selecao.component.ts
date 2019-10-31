import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-trajetorias-selecao',
  templateUrl: './trajetorias-selecao.component.html',
  styleUrls: ['./trajetorias-selecao.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrajetoriasSelecaoComponent implements OnInit {

  private title: string = '04. Trajetórias Ismart: Seleção - Ismart';
  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/4-trajetorias-hat.jpg',
    'imageTablet': 'assets/images/hats/4-trajetorias-tablet.jpg',
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'CHAPTER_4.1.TITLE',
    'subtitle': 'CHAPTERS.04'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Prática',
      'url': '04-trajetorias-ismart-praticas'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Suporte',
      'url': '04-trajetorias-ismart-suporte'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Internacional',
      'url': '04-trajetorias-ismart-internacional'
    },
    
  ]
  @ViewChild('modal', {static:false}) modal: ModalComponent;

  constructor(
    private testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Seleção - Ismart'});
  }

}
