import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trajetorias-selecao',
  templateUrl: './trajetorias-selecao.component.html',
  styleUrls: ['./trajetorias-selecao.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrajetoriasSelecaoComponent implements OnInit {

  private title = 'Trajetórias Ismart: Seleção > Ismart - RA 2018-2019';
  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/4-trajetoria-selecao-mobile.jpg',
    imageTablet: 'assets/images/hats/4-trajetoria-selecao-tablet.jpg',
    image: 'assets/images/hats/4-trajetoria-selecao-desktop.jpg',
    title: 'CHAPTER_4.1.TITLE',
    subtitle: 'CHAPTERS.04'
  };

  public relatedInfo = [

  ];
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  constructor(
    public testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/04-trajetoria-smart-selecao-mobile.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Trajetórias Ismart: Seleção > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'O processo seletivo é a oportunidade que alunos de baixa renda com altas habilidades têm para se desenvolverem e conquistarem destaque.'});

    this.translate.get('CHAPTER_4.2').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
