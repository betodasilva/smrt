import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline/timeline.service';

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
      'image': 'assets/images/05-parceiros-mobile.jpg',
      'title': '05.',
      'subtitle': 'Parceiros Ismart',
      'url': '05-parceiros-ismart'
    },
    {
      'image': 'assets/images/06-horizonte-mobile.jpg',
      'title': '06.',
      'subtitle': 'Horizonte',
      'url': '06-horizonte'
    },
  ]
  
  constructor(
    private timeline: TimelineService,
    private renderer: Renderer2) 
  { }

  ngOnInit() {
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

}
