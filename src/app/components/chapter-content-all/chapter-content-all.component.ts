import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Subject, Subscription } from 'rxjs';
import { EmitterService } from 'src/app/services/emitter/emitter.service';

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

    EmitterService.get('headerOpen').subscribe( isOpen => {
      if ( isOpen ) {
        this.renderer.setStyle(
          this.floatContainer.nativeElement,
          'transform',
          'translateY(100px)'
        )
      } else {
        this.renderer.removeStyle(
          this.floatContainer.nativeElement,
          'transform'
        )
      }
    })
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
    this.renderer.removeStyle(
      this.floatContainer.nativeElement,
      'transform'
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

  private accordionContent = [
    {
      'title': 'Alicerce',
      'content': 'Oferece um curso preparatório de dois anos de duração no contraturno escolar. O curso acontece em uma escola particular parceira do Ismart. O objetivo é preparar os bolsistas para o ingresso no ensino médio nas escolas em que realizam o curso. Podem se candidatar ao Alicerce alunos matriculados no 7º ano do ensino fundamental, com até 13 anos completos e vindos de famílias com renda per capita de no máximo dois salários mínimos.'
    },
    {
      'title': 'Bolsa Talento',
      'content': 'Conteúdo Bolsa Talento'
    },
    {
      'title': 'Ismart Online',
      'content': 'Conteúdo Ismart Online'
    },
    {
      'title': 'Ensino superior',
      'content': 'Conteúdo Ensino superior'
    },
    {
      'title': 'Alumni',
      'content': 'Conteúdo Alumni'
    }
  ]
}
