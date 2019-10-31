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
  
  private title: string = '04. Trajetórias Ismart: Universidades - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/4-trajetorias-hat.jpg',
    'imageTablet': 'assets/images/hats/4-trajetorias-tablet.jpg',
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'CHAPTER_4.1.TITLE',
    'subtitle': 'CHAPTERS.04'
  }

  private relatedInfo: Array<any> = []
  
  constructor(
    private titleService: Title,
    private meta: Meta,
    private testimonials: TestimonialsService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Universidades - Ismart'});

    this.translate.get('CHAPTER_4.7').subscribe( (data: any) => {
      this.relatedInfo = data['RELATED'];
    });
  }

}
