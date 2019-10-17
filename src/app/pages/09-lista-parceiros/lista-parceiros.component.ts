import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.component.html',
  styleUrls: ['./lista-parceiros.component.scss']
})
export class ListaParceirosComponent implements OnInit {

  private chapterHatInfo = {
    'image': 'assets/images/7-manifesto.jpg',
    'title': 'Capítulo 09',
    'subtitle': 'Lista de parceiros'
  }

  constructor() { }

  ngOnInit() {
  }

}
