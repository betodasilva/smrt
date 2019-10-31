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

  private title: string = '05. Parceiros Ismart - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/5-parceiros-hat.jpg',
    'imageTablet': 'assets/images/hats/5-parceiros-tablet.jpg',
    'image': 'assets/images/5-parceiros.jpg',
    'title': 'Capítulo 05',
    'subtitle': 'Parceiros Ismart'
  }

  private relatedInfo: Array<any> = []

  constructor(
    private testimonials: TestimonialsService,
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/5-parceiros-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '05. Parceiros Ismart - Ismart'});

    this.translate.get('CHAPTER_5').subscribe( (data: any) => {
      this.relatedInfo = data['RELATED'];
    });
  }

}
