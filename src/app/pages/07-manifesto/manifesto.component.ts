import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManifestoComponent implements OnInit {
  
  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title: string = '07. Manifesto Ismart - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/7-manifesto-hat.jpg',
    'imageTablet': 'assets/images/hats/7-manifesto-ismart-tablet.jpg',
    'image': 'assets/images/7-manifesto.jpg',
    'title': 'CHAPTER_7.TITLE',
    'subtitle': 'CHAPTERS.07'
  }
  
  private relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/7-manifesto-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '07. Manifesto Ismart - Ismart'});

    this.translate.get('CHAPTER_7').subscribe( (data: any) => {
      this.relatedInfo = data['RELATED'];
    });
  }

}
