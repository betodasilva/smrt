import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Injectable, Inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { EmitterService } from 'src/app/services/emitter/emitter.service';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.scss']
})

@Injectable()
export class ChapterContentComponent implements OnInit {

  @ViewChild('articleContainer', {static: true}) articleContainer: ElementRef;
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
    console.log( this.articleContainer.nativeElement.offsetHeight );
    EmitterService.get('headerOpen').subscribe( isOpen => {
      console.log('header open', isOpen);
      if ( isOpen ) {
        this.renderer.setStyle(
          this.floatContainer.nativeElement,
          'top',
          '100px'
        )
      } else {
        this.renderer.removeStyle(
          this.floatContainer.nativeElement,
          'top'
        )
      }
    })
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.floatContainerEndPos = this.articleContainer.nativeElement.offsetHeight - 220;

    }, 2000);
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