import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trajetorias-pratica',
  templateUrl: './trajetorias-pratica.component.html',
  styleUrls: ['./trajetorias-pratica.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrajetoriasPraticaComponent implements OnInit {


  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;

  private title = 'Trajetórias Ismart: Prática > Ismart - RA 2018-2019';
  public chapterHatInfo = {
    imageMobile: 'assets/images/04-trajetoria-smart-pratica-mobile.jpg',
    imageTablet: 'assets/images/hats/4-trajetoria-pratica-tablet.jpg',
    image: 'assets/images/04-trajetoria-smart-pratica-desktop.jpg',
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
    this.meta.addTag({property: 'og:image', content: 'assets/images/04-trajetoria-smart-pratica-mobile.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Trajetórias Ismart: Prática > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Mais do que uma bolsa de estudos, o Ismart trabalha para mudar a visão de mundo dos bolsistas e torná-los protagonista da própria história'});

    this.translate.get('CHAPTER_4.3').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
