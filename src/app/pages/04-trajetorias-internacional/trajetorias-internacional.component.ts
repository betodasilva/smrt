import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trajetorias-internacional',
  templateUrl: './trajetorias-internacional.component.html',
  styleUrls: ['./trajetorias-internacional.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrajetoriasInternacionalComponent implements OnInit {

  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;

  private title = 'Trajetórias Ismart: Internacional > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/04-trajetoria-smart-internacional-mobile.jpg',
    imageTablet: 'assets/images/hats/4-trajetoria-internacional-tablet.jpg',
    image: 'assets/images/04-trajetoria-smart-internacional-desktop.jpg',
    title: 'CHAPTER_4.1.TITLE',
    subtitle: 'CHAPTERS.04'
  };

  public relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private testimonials: TestimonialsService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/04-trajetoria-smart-internacional-mobile.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Trajetórias Ismart: Internacional > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Programa, de curta duração, que consiste em enviar alunos do ensino médio para intercâmbio no exterior.'});

    this.translate.get('CHAPTER_4.5').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
