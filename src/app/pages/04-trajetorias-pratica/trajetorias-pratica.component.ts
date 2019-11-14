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

  private title = '04. Trajetórias Ismart: Prática - Ismart';
  public chapterHatInfo = {
    imageMobile: 'assets/images/04-trajetoria-smart-pratica-mobile.jpg',
    imageTablet: 'assets/images/04-trajetoria-smart-pratica-mobile.jpg',
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
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Prática - Ismart'});

    this.translate.get('CHAPTER_4.3').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
