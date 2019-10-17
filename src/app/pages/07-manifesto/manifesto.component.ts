import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.scss']
})
export class ManifestoComponent implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/7-manifesto.jpg',
    'title': 'Capítulo 07',
    'subtitle': 'Manifesto Ismart'
  }
  constructor() { }

  ngOnInit() {
  }

}
