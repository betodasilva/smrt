import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar', {static: true}) sidebar: ElementRef;
  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.setHostSizes();
  }

  private setHostSizes() {
    this.renderer.setStyle(this.el.nativeElement, 'min-height', `${this.sidebar.nativeElement.offsetHeight}px`);
    this.renderer.setStyle(this.el.nativeElement, 'min-width', `${this.sidebar.nativeElement.offsetWidth}px`);
  }

}
