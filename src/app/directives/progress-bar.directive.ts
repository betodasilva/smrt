import { Directive, Inject, ElementRef, OnInit, HostListener } from '@angular/core';
import { WINDOW } from '../services/window.service';
import { ProgressBarService } from '../services/progress-bar/progress-bar.service';
import { EmitterService } from '../services/emitter/emitter.service';

@Directive({
  selector: '[progressBarListener]'
})
export class ProgressBarDirective implements OnInit {

  private endPos = 0;
  private percentage = 0;
  constructor(
    @Inject(WINDOW) private window: Window,
    private el: ElementRef,
    private progressBarService: ProgressBarService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.endPos = this.el.nativeElement.offsetHeight;
      this.calculatePercentage();
    }, 500);

    EmitterService.get('calculateSizes').subscribe( () => {
      this.endPos = this.el.nativeElement.offsetHeight;
      this.calculatePercentage();
    });
  }

  private calculatePercentage() {
    const currentScroll = this.window.pageYOffset;
    this.percentage = (currentScroll / (this.endPos - 100)) * 100;
    if (this.percentage > 30 && this.percentage < 100) {
      this.percentage += 5;
    }
    this.progressBarService.progress = this.percentage;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.calculatePercentage();
  }


}
