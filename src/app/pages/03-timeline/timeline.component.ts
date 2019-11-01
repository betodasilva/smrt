import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2, ViewChild, Inject } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline/timeline.service';
import { Title, Meta } from '@angular/platform-browser';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { WINDOW } from 'src/app/services/window.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @ViewChildren('cards') cards: QueryList<ElementRef>;
  @ViewChildren('navItems') navItems: QueryList<ElementRef>;

  @ViewChild('article', {static: false}) article: ElementRef;
  @ViewChild('nav', {static: false}) nav: ElementRef;

  title = '03. Linha do Tempo - Ismart';

  public chapterHatInfo = {
    imageMobile: 'assets/images/hats/3-timeline-hat.jpg',
    imageTablet: 'assets/images/hats/3-timeline-tablet.jpg',
    image: 'assets/images/3-timeline.jpg',
    title: 'CHAPTER_3.TITLE',
    subtitle: 'CHAPTERS.03'
  };

  public relatedInfo: Array<any> = [];

  constructor(
    public timeline: TimelineService,
    private renderer: Renderer2,
    private titleService: Title,
    private meta: Meta,
    public scroll: ScrollService,
    @Inject(WINDOW) public window: Window,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/3-timeline-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '03. Linha do Tempo - Ismart'});

    this.translate.get('CHAPTER_3').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

  onItemNavClick( { target }, navItem ) {
    const elToNavigate = this.cards.find( (el: ElementRef) => el.nativeElement.getAttribute('year') === navItem );
    if ( !elToNavigate ) { return; }

    const yPosition = ( elToNavigate.nativeElement.getBoundingClientRect().top + this.window.scrollY ) - 64;
    this.window.scrollTo({
      top: yPosition,
      behavior: 'smooth'
    });
    // elToNavigate.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'})
    this.navItems.forEach( el => {
      this.renderer.removeClass( el.nativeElement, 'timeline-nav__item--active');
    });
    this.renderer.addClass( target, 'timeline-nav__item--active');
  }

  animationClass(index, total) {
    if ( index + 1 === total ) { return 'visible fadeIn'; }

    return index % 2 === 0 ? 'visible fadeInLeft' : 'visible fadeInRight';
  }

}
