import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {
  @Output() onCloseChapters : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fecharModal(){
    this.onCloseChapters.emit(false);
  }
}
