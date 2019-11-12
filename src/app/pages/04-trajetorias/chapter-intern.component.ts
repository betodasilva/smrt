import { Component, OnInit, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials/testimonials.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chapter-intern',
  templateUrl: './chapter-intern.component.html',
  styleUrls: ['./chapter-intern.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChapterInternComponent implements OnInit {

  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: true}) modal: ModalComponent;

  private title = '04. Trajetórias Ismart: Contato - Ismart';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/4-trajetorias-hat.jpg',
    imageTablet: 'assets/images/hats/4-trajetorias-tablet.jpg',
    image: 'assets/images/4-trajetorias.jpg',
    title: 'CHAPTER_4.1.TITLE',
    subtitle: 'CHAPTERS.04'
  };
  public relatedInfo: Array<any> = [];
  // public accordionContent: Array<any> = [];
  private accordionContent = [
    {
      title: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_1.TITLE',
      content: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_1.CONTENT'
    },
    {
      title: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_2.TITLE',
      content: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_2.CONTENT'
    },
    {
      title: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_3.TITLE',
      content: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_3.CONTENT'
    },
    {
      title: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_4.TITLE',
      content: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_4.CONTENT'
    },
    {
      title: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_5.TITLE',
      content: 'CHAPTER_4.1.CONTENT.SECTION_7.1.ACCORDION_5.CONTENT'
    }
  ];
  constructor(
    private titleService: Title,
    private meta: Meta,
    public testimonials: TestimonialsService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Contato - Ismart'});

    this.translate.get('CHAPTER_4.1').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }


}
