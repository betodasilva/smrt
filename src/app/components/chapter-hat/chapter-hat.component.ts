import { Component, OnInit, Input } from '@angular/core';

interface chapterData {
  image,
  title,
  subtitle
}

@Component({
  selector: 'app-chapter-hat',
  templateUrl: './chapter-hat.component.html',
  styleUrls: ['./chapter-hat.component.scss']
})
export class ChapterHatComponent implements OnInit {

  @Input('data') data: chapterData;
  
  constructor() { }

  ngOnInit() {
    
  }

}
