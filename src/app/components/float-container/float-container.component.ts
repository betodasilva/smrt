import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2, Input, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { WINDOW } from 'src/app/services/window.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';

@Component({
  selector: 'app-float-container',
  templateUrl: './float-container.component.html',
  styleUrls: ['./float-container.component.scss']
})
export class FloatContainerComponent implements OnInit {
  @ViewChild('floatContainer', {static: true}) floatContainer: ElementRef;
  @Input() startPosEl: any;
  @Input() endPosEl: any;
  @Input() child: any;
  @Input() endOffset: number | string = 0;
  @Input() fixOffset: number | string = 0;

  private startPos: number;
  private endPos: number;

  private isFloatContainerFixed: boolean = false;
  private subscription: Subscription;

  constructor(
    @Inject(WINDOW) private window: Window,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.listenForHeaderOpen();
    this.listenForRecalculations();
    // console.log(`%c elementos`, 'background: cyan');
    // console.log( this.startPosEl);
    // console.log( this.endPosEl );
    // console.log( this.child );

    // console.log( 'fix offset', this.fixOffset );
  }
  listenForRecalculations() {
    EmitterService.get('calculateSizes').subscribe( () => {
      this.calculateSizes();
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateSizes();
      
      console.log(`inicio ${this.startPos} e fim ${this.endPos}, offset? ${this.endOffset}`);
    }, 500);
   
  }

  public calculateSizes() {
    const isSameElements = this.startPosEl.isEqualNode(this.endPosEl);
    this.startPos = this.startPosEl.offsetTop;
    this.endPos = isSameElements ? this.endPosEl.offsetHeight : this.endPosEl.offsetTop + (this.endPosEl.offsetHeight / 2);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event){
    const currentScroll = this.window.pageYOffset,
          endPos = Number(this.endPos) + Number(this.endOffset);
    
    if ( currentScroll >= this.startPos ) {
      this.isFloatContainerFixed = true;
    } else{
      this.isFloatContainerFixed = false; 
    }

    if ( currentScroll >= endPos - Number(this.fixOffset) ) {
      this.setAbsolutePosition();
    } else {
      this.removeAbsolutePosition();
    }

  }

  listenForHeaderOpen(){
    EmitterService.get('headerOpen').subscribe( isOpen => {
      if ( isOpen && this.window.pageYOffset - 100 > this.startPos ) {
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

  setAbsolutePosition(){
    this.renderer.setStyle(
      this.floatContainer.nativeElement,
      'transition',
      `none`,
    )
    this.renderer.setStyle(
      this.floatContainer.nativeElement,
      'top',
      `${Number(this.endPos) + Number(this.endOffset) - (this.child.offsetHeight) + 200}px`,
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

}
