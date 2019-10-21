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
    'image': 'assets/images/3-timeline.jpg',
    'title': 'Capítulo 03',
    'subtitle': 'Linha do Tempo'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Contato',
      'url': '04-trajetorias-ismart-contato'
    },
    {
      'image': 'assets/images/7-manifesto.jpg',
      'title': '07.',
      'subtitle': 'Resultados 2018',
      'url': ''
    }
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
