import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Injectable, Inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

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
    // this.subscription = this.testimonialPosition.subscribe( ({offsetTop, offsetHeight}) => {
    //   if ( !(offsetTop && offsetHeight) ) return;
    //   this.floatContainerEndPos = offsetTop + ( offsetHeight / 2 ) - 210;
    //   if ( this.subscription ) {
    //     this.subscription.unsubscribe();
    //   }
    // });
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