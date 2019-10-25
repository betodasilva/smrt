import { Directive, Inject, ElementRef, OnInit, HostListener } from '@angular/core';
import { WINDOW } from '../services/window.service';
import { ProgressBarService } from '../services/progress-bar/progress-bar.service';

@Directive({
  selector: '[progressBarListener]'
})
export class ProgressBarDirective implements OnInit{

  private endPos: number = 0;
  private percentage: number = 0;
  constructor(
    @Inject(WINDOW) private window: Window,
    private el: ElementRef,
    private progressBarService: ProgressBarService
  ) { }

  ngOnInit(){
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      this.endPos = this.el.nativeElement.offsetHeight;
      const currentScroll = this.window.pageYOffset;
      this.percentage = ( currentScroll / (this.endPos - 100) ) * 100;
      if ( this.percentage > 30 && this.percentage < 100 ) {
        this.percentage += 5;
      }
      this.progressBarService.progress = this.percentage;
    }, 500)
  }
  
  @HostListener('window:scroll')
  onScroll(){
    const currentScroll = this.window.pageYOffset;
    this.percentage = ( currentScroll / (this.endPos - 100) ) * 100;
    if ( this.percentage > 30 && this.percentage < 100 ) {
      this.percentage += 5;
    }
    this.progressBarService.progress = this.percentage;
    
  }

}
