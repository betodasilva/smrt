import { Component, OnInit, Input } from '@angular/core';

interface relatedData {
  title,
  subtile,
  url,
  image
}

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {
  @Input('relatedData') relatedData: relatedData;
  
  constructor() { }

  ngOnInit() {
  }

}
