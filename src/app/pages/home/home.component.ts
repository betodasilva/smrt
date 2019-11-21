import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private title = 'Ismart - RA 2018-2019';

  constructor(private titleService: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/favicon/android-chrome-512x512.png' } );
    this.meta.addTag({property: 'og:title', content: 'Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Há 20 anos o Ismart transforma talentos em protagonistas do futuro através da educação.'});
  }

}
