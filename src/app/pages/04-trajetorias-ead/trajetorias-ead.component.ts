import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trajetorias-ead',
  templateUrl: './trajetorias-ead.component.html',
  styleUrls: ['./trajetorias-ead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrajetoriasEadComponent implements OnInit {

  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: true}) modal: ModalComponent;

  private title = 'Trajetórias Ismart: EaD > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/04-trajetoria-smart-ead-mobile.jpg',
    imageTablet: 'assets/images/hats/4-trajetoria-ead-tablet.jpg',
    image: 'assets/images/04-trajetoria-smart-ead-desktop.jpg',
    title: 'CHAPTER_4.1.TITLE',
    subtitle: 'CHAPTERS.04'
  };

  public relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    public testimonials: TestimonialsService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/04-trajetoria-smart-ead-mobile.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Trajetórias Ismart: EaD > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'O Instituto aposta na tecnologia, via EaD, como uma maneira de ampliar as oportunidades para mais jovens talentos de baixa renda.'});

    this.translate.get('CHAPTER_4.6').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
