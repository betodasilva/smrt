import { Component, OnInit } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.scss']
})

@Injectable()
export class ChapterContentComponent implements OnInit {
  route: string;
  constructor(@Inject(WINDOW) private window: Window) {

    // console.log(this.window.location.href);
  }
  getURL = this.window.location.href;
  
  ngOnInit() {
    // this.href = this.router.url;
    // console.log(this.router);
  }

}