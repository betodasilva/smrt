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

  private title = '04. Trajetórias Ismart: Alumni - Ismart';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/4-trajetorias-hat.jpg',
    imageTablet: 'assets/images/hats/4-trajetorias-tablet.jpg',
    image: 'assets/images/4-trajetorias.jpg',
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
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Alumni - Ismart'});


    this.translate.get('CHAPTER_4.8').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
