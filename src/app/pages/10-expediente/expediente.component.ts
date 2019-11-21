import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title = 'Expediente > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/10-expediente-hat.jpg',
    imageTablet: 'assets/images/hats/10-expediente-tablet.jpg',
    image: 'assets/images/10-expediente.jpg',
    title: 'CHAPTER_10.TITLE',
    subtitle: 'CHAPTERS.10'
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
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/10-expediente-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Expediente > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Um trabalho que envolve a dedicação de toda a equipe Ismart e várias outras pessoas que acreditam no caminho da educação.'});

    this.translate.get('CHAPTER_10').subscribe( (data: any) => {
      this.accordionContent = data.LIST;
      this.relatedInfo      = data.RELATED;
    });
  }

}
