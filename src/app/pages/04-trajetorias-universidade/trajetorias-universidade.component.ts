import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trajetorias-universidade',
  templateUrl: './trajetorias-universidade.component.html',
  styleUrls: ['./trajetorias-universidade.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrajetoriasUniversidadeComponent implements OnInit {

  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: true}) modal: ModalComponent;

  private title = '04. Trajetórias Ismart: Universidades - Ismart';

  public chapterHatInfo = {
    imageMobile: 'assets/images/04-trajetoria-smart-unviversidade-mobile.jpg',
    imageTablet: 'assets/images/04-trajetoria-smart-unviversidade-mobile.jpg',
    image: 'assets/images/04-trajetoria-smart-unviversidade-desktop.jpg',
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
    this.meta.addTag({property: 'og:image', content: 'assets/images/04-trajetoria-smart-unviversidade-mobile.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Universidades - Ismart'});

    this.translate.get('CHAPTER_4.7').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
