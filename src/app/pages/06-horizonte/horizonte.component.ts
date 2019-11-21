import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-horizonte',
  templateUrl: './horizonte.component.html',
  styleUrls: ['./horizonte.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HorizonteComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title = 'Horizonte > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/6-horizonte-hat.jpg',
    imageTablet: 'assets/images/hats/6-horizonte-tablet.jpg',
    image: 'assets/images/6-horizonte.jpg',
    title: 'CHAPTER_6.TITLE',
    subtitle: 'CHAPTERS.06'
  };

  public relatedInfo: Array<any> = [];

  @ViewChild('modal01', {static: false}) modal01: ModalComponent;
  @ViewChild('modal02', {static: false}) modal02: ModalComponent;

  constructor(
    public testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/6-horizonte-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Horizonte > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Uma vez no Ismart, a intenção é ajudar os alunos a nunca duvidarem do seu potencial e a se apropriarem da sua história com protagonismo, resiliência e perseverança.'});

    this.translate.get('CHAPTER_6').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });

  }

}
