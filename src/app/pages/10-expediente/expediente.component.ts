import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;
  
  private title: string = '10. Expediente - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/10-expediente-hat.jpg',
    'imageTablet': 'assets/images/hats/10-expediente-tablet.jpg',
    'image': 'assets/images/10-expediente.jpg',
    'title': 'Capítulo 10',
    'subtitle': 'Expediente'
  }

  private accordionContent = [
    {
      'title': 'Equipe Ismart ',
      'content': 'Conteúdo Equipe Ismart '
    },
    {
      'title': 'Redação',
      'content': 'Conteúdo Redação'
    },
    {
      'title': 'Fotos',
      'content': 'Conteúdo Fotos'
    },
    {
      'title': 'Design',
      'content': 'Conteúdo Design'
    },
  ]

  private relatedInfo = [
    {
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
    },
    {
      'image': 'assets/images/9-lista-de-parceiros-mobile.jpg',
      'title': '09.',
      'subtitle': 'Lista de parceiros',
      'url': '09-lista-parceiros'
    },
    {
      'image': 'assets/images/01-mensagem-do-conselho-mobile.jpg',
      'title': '01.',
      'subtitle': 'Mensagem do conselho',
      'url': '01-mensagem-do-conselho'
    },
  ]

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/10-expediente-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '10. Expediente - Ismart'});
  }

}
