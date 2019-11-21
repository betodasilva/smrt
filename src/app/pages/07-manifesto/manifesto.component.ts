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

  private title = 'Manifesto Ismart > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/7-manifesto-ismart-mobile.png',
    imageTablet: 'assets/images/hats/7-manifesto-tablet.jpg',
    image: 'assets/images/hats/7-manifesto-ismart-desktop.jpg',
    title: 'CHAPTER_7.TITLE',
    subtitle: 'CHAPTERS.07'
  };

  public relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/7-manifesto-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Manifesto Ismart > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Acreditamos no talento do jovem brasileiro e no poder transformador da educação e trabalhamos por um futuro melhor para eles e para o Brasil.'});

    this.translate.get('CHAPTER_7').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
