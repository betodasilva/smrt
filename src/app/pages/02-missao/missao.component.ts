import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-missao',
  templateUrl: './missao.component.html',
  styleUrls: ['./missao.component.scss']
})
export class MissaoComponent implements OnInit {

  private title: string = '02. Missão, Visão e Crenças - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/2-missao-visao-crencas-hat.jpg',
    'imageTablet': 'assets/images/hats/2-missao-visao-crencas-tablet.jpg',
    'image': 'assets/images/missao-visao-crencas.jpg',
    'title': 'CHAPTER_2.TITLE',
    'subtitle': 'CHAPTERS.02'
  }

  private relatedInfo: Array<any> = [];
  
  @ViewChild('share', {static: true, read: ElementRef}) myShare: ElementRef;
  @ViewChild('article', {static: false}) article: ElementRef;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/2-missao-visao-crencas-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '02. Missão, Visão e Crenças - Ismart'});

    this.translate.get('CHAPTER_2').subscribe( (data: any) => {
      this.relatedInfo = data['RELATED'];
    });
  }
}
