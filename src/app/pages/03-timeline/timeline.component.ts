import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline/timeline.service';
import { Title, Meta } from '@angular/platform-browser';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

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

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/3-timeline-hat.jpg',
    'imageTablet': 'assets/images/hats/3-timeline-tablet.jpg',
    'image': 'assets/images/3-timeline.jpg',
    'title': 'Capítulo 03',
    'subtitle': 'Linha do Tempo'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Contato',
      'url': '04-trajetorias-ismart-contato'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Seleção',
      'url': '04-trajetorias-ismart-selecao'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Prática',
      'url': '04-trajetorias-ismart-praticas'
    },
  ]
  
  constructor(
    private timeline: TimelineService,
    private renderer: Renderer2,
    private titleService: Title,
    private meta: Meta,
    private scroll: ScrollService
  ) 
  { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/3-timeline-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '03. Linha do Tempo - Ismart'});
  }

  onItemNavClick( { target }, navItem ){
    const elToNavigate = this.cards.find( (el: ElementRef) => el.nativeElement.getAttribute('year') === navItem );
    if ( !elToNavigate ) return;

    elToNavigate.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'})
    this.navItems.forEach( el => {
      this.renderer.removeClass( el.nativeElement, 'timeline-nav__item--active');
    });
    this.renderer.addClass( target, 'timeline-nav__item--active');
  }

  animationClass(index, total) {
    if ( index + 1 === total ) return 'visible fadeIn'
    
    return index % 2 === 0 ? 'visible fadeInLeft' : 'visible fadeInRight';
  }

}
