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

  private title = '04. Trajetórias Ismart: Seleção - Ismart';
  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/4-trajetorias-hat.jpg',
    imageTablet: 'assets/images/hats/4-trajetorias-tablet.jpg',
    image: 'assets/images/4-trajetorias.jpg',
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
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Seleção - Ismart'});

    this.translate.get('CHAPTER_4.2').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
