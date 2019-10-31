import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-horizonte',
  templateUrl: './horizonte.component.html',
  styleUrls: ['./horizonte.component.scss']
})
export class HorizonteComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;
  
  private title: string = '06. Horizonte - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/6-horizonte-hat.jpg',
    'imageTablet': 'assets/images/hats/6-horizonte-tablet.jpg',
    'image': 'assets/images/6-horizonte.jpg',
    'title': 'Capítulo 06',
    'subtitle': 'Horizonte'
  }

  private relatedInfo: Array<any> = []

  @ViewChild('modal01', {static: false}) modal01: ModalComponent;
  @ViewChild('modal02', {static: false}) modal02: ModalComponent;
  
  constructor(
    private testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/6-horizonte-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '06. Horizonte - Ismart'});

    this.translate.get('CHAPTER_6').subscribe( (data: any) => {
      this.relatedInfo = data['RELATED'];
    });

  }

}
