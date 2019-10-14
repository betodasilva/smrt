import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-chapter-content-all',
  templateUrl: './chapter-content-all.component.html',
  styleUrls: ['./chapter-content-all.component.scss']
})
export class ChapterContentAllComponent implements OnInit {

  /**
   * Posição Y do componente testimonial
   * usado para determinar momento de parada 
   * dos elementos fixos
   */
  @Input('testimonialPosition') testimonialPosition: Subject<any>;

  @ViewChild('floatContainer', {static: true}) floatContainer: ElementRef;
  private floatContainerStartPos: number;
  private floatContainerEndPos: number;
  private isFloatContainerFixed: boolean = false;
  
  private subscription: Subscription;

  constructor(
    @Inject(WINDOW) private window: Window,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.floatContainerStartPos = this.floatContainer.nativeElement.offsetTop;
    this.subscription = this.testimonialPosition.subscribe( ({offsetTop, offsetHeight}) => {
      if ( !(offsetTop && offsetHeight) ) return;
      this.floatContainerEndPos = offsetTop + ( offsetHeight / 2 ) - 210;
      if ( this.subscription ) {
        this.subscription.unsubscribe();
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event){
    const currentScroll = this.window.pageYOffset;

    if ( currentScroll >= this.floatContainerStartPos ) {
      this.isFloatContainerFixed = true;
    } else{
      this.isFloatContainerFixed = false; 
    }

    if ( currentScroll + 100 >= this.floatContainerEndPos && this.floatContainerEndPos ) {
      this.setAbsolutePosition();
    } else {
      this.removeAbsolutePosition();
    }

  }

  setAbsolutePosition(){
    this.renderer.setStyle(
      this.floatContainer.nativeElement,
      'transition',
      `none`,
    )
    this.renderer.setStyle(
      this.floatContainer.nativeElement,
      'top',
      `${this.floatContainerEndPos}px`,
    )
    this.renderer.setStyle(
      this.floatContainer.nativeElement,
      'position',
      'absolute',
    )
    this.renderer.setStyle(
      this.floatContainer.nativeElement,
      'width',
      '100%',
    )
  }

  removeAbsolutePosition(){
    setTimeout( () => {
      this.renderer.removeStyle(
        this.floatContainer.nativeElement,
        'transition'
      )
    }, 200)
    
    this.renderer.removeStyle(
      this.floatContainer.nativeElement,
      'top'
    )
    this.renderer.removeStyle(
      this.floatContainer.nativeElement,
      'position'
    )
    this.renderer.removeStyle(
      this.floatContainer.nativeElement,
      'width'
    )
  }

}
