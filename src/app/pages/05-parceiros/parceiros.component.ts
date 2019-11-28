import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title = 'Parceiros Ismart > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/5-parceiros-hat.jpg',
    imageTablet: 'assets/images/hats/5-parceiros-tablet.jpg',
    image: 'assets/images/5-parceiros.jpg',
    title: 'CHAPTER_5.TITLE',
    subtitle: 'CHAPTERS.05'
  };

  public relatedInfo: Array<any> = [];

  constructor(
    public testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/5-parceiros-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Parceiros Ismart > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Há 20 anos construímos histórias de excelência na formação e capacitação de jovens talentos ao lado de parceiros fundamentais para o nosso sucesso.'});

    this.translate.get('CHAPTER_5').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
