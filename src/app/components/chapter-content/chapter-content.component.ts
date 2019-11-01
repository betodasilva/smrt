import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, HostListener, ViewEncapsulation } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Injectable, Inject } from '@angular/core';



@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

@Injectable()
export class ChapterContentComponent implements OnInit {

  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;

  constructor(
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
  }





}
