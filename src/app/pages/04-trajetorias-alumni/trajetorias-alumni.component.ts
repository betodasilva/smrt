import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trajetorias-alumni',
  templateUrl: './trajetorias-alumni.component.html',
  styleUrls: ['./trajetorias-alumni.component.scss']
})
export class TrajetoriasAlumniComponent implements OnInit {

  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;

  private title = 'Trajetórias Ismart: Alumni > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    imageMobile: 'assets/images/04-trajetoria-smart-alumni-mobile.jpg',
    imageTablet: 'assets/images/hats/4-trajetoria-alumni-tablet.jpg',
    image: 'assets/images/04-trajetoria-smart-alumni-desktop.jpg',
    title: 'CHAPTER_4.1.TITLE',
    subtitle: 'CHAPTERS.04'
  };

  public relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private testimonials: TestimonialsService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/04-trajetoria-smart-alumni-mobile.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Trajetórias Ismart: Alumni > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Rede que busca aproximar e gerar sinergia entre o grupo de graduados e a comunidade Ismart como um todo.'});

    this.translate.get('CHAPTER_4.8').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
