import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chapter-intern-simple',
  templateUrl: './chapter-intern-simple.component.html',
  styleUrls: ['./chapter-intern-simple.component.scss']
})
export class ChapterInternSimpleComponentm implements OnInit {

  title = '01. Mensagem do Conselho - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/1-mensagem-do-conselho-hat.jpg',
    'imageTablet': 'assets/images/hats/1-mensagem-do-conselho-tablet.jpg',
    'image': 'assets/images/1-mensagem-do-conselho.jpg',
    'title': 'CHAPTER_1.TITLE',
    'subtitle': 'CHAPTERS.01'
  }

  private relatedInfo: Array<any> = []

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/1-mensagem-do-conselho-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '01. Mensagem do Conselho - Ismart'});

    this.translate.get('CHAPTER_1').subscribe( (data: any) => {
      this.relatedInfo = data['RELATED'];
    });
  }

}
