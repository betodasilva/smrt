import { Component, OnInit, Inject, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  private currentUrl: string;
  @ViewChild('share', {static: true}) shareList: ElementRef;
  constructor(
    @Inject(WINDOW) private window: Window, 
    private el: ElementRef, 
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.currentUrl = this.window.location.href;
    this.setHostSizes();
  }

  private setHostSizes() {
    this.renderer.setStyle(this.el.nativeElement, 'min-height', `${this.shareList.nativeElement.offsetHeight}px`);
    this.renderer.setStyle(this.el.nativeElement, 'min-width', `${this.shareList.nativeElement.offsetWidth}px`);
  }
  
}
