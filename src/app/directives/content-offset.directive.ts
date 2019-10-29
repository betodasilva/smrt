import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';
import { ContentOffsetService } from '../services/content-offset/content-offset.service';

@Directive({
  selector: '[contentOffset]'
})
export class ContentOffsetDirective implements OnInit{

  constructor(private el: ElementRef, private contentOffset: ContentOffsetService) { }

  ngOnInit(){
    this.applyElOffset();
  }

  @HostListener('window:resize')
  onResize(){
    this.applyElOffset();
  }

  applyElOffset(){
    const { x } = this.el.nativeElement.getBoundingClientRect();
    this.contentOffset.offsetX = x;
  }
}
