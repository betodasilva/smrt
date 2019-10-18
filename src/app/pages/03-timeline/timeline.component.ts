import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline/timeline.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @ViewChildren('cards') cards: QueryList<ElementRef>;
  @ViewChildren('navItems') navItems: QueryList<ElementRef>;

  private chapterHatInfo = {
    'image': 'assets/images/3-timeline.jpg',
    'title': 'Capítulo 03',
    'subtitle': 'Linha do Tempo'
  }

  public masonryOptions: NgxMasonryOptions = {
    fitWidth: true,
    gutter: 20
  }

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
