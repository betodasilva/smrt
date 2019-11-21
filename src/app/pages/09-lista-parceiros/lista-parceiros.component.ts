import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.component.html',
  styleUrls: ['./lista-parceiros.component.scss']
})
export class ListaParceirosComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title = 'Lista de parceiros > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/9-lista-de-parceiros-hat.jpg',
    imageTablet: 'assets/images/hats/9-lista-de-parceiros-tablet.jpg',
    image: 'assets/images/9-lista.jpg',
    title: 'CHAPTER_9.TITLE',
    subtitle: 'CHAPTERS.09'
  };

  public accordionContent: Array<any> = [];
  public relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/9-lista-de-parceiros-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Lista de parceiros > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Para abraçar e transformar cada um desses alunos através da educação, o Instituto conta com parcerias fundamentais no curso dessa jornada.'});


    this.translate.get('CHAPTER_9').subscribe( (data: any) => {
      this.accordionContent = data.LIST;
      this.relatedInfo      = data.RELATED;
    });
  }

}
