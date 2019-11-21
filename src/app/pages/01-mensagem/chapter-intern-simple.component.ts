import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chapter-intern-simple',
  templateUrl: './chapter-intern-simple.component.html',
  styleUrls: ['./chapter-intern-simple.component.scss']
})
export class ChapterInternSimpleComponentm implements OnInit {

  title = 'Mensagem do Conselho > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/1-mensagem-do-conselho-hat.jpg',
    imageTablet: 'assets/images/hats/1-mensagem-do-conselho-tablet.jpg',
    image: 'assets/images/1-mensagem-do-conselho.jpg',
    title: 'CHAPTER_1.TITLE',
    subtitle: 'CHAPTERS.01'
  };

  public relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/1-mensagem-do-conselho-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Mensagem do Conselho > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Sonhar grande e transformar esse sonho em realidade são os caminhos para o sucesso e para fazer a diferença na sociedade.'});

    this.translate.get('CHAPTER_1').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
