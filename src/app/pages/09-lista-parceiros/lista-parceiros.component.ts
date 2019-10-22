import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.component.html',
  styleUrls: ['./lista-parceiros.component.scss']
})
export class ListaParceirosComponent implements OnInit {

  title = '09. Lista de parceiros - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/9-lista-de-parceiros-hat.jpg',
    'imageTablet': 'assets/images/hats/9-lista-de-parceiros-tablet.jpg',
    'image': 'assets/images/9-lista.jpg',
    'title': 'Capítulo 09',
    'subtitle': 'Lista de parceiros'
  }

  private accordionContent = [
    {
      'title': 'Escola parceira',
      'content': 'Bandeirantes (São Paulo)<br>Bernoulli (Belo Horizonte)<br>Embraer & Instituto Embraer (São José dos Campos)<br>Escola Eleva (Rio de Janeiro)<br>Etapa (São Paulo)<br>Lourenço Castanho (São Paulo)<br>Magno (São Paulo)<br>Marista Arquidiocesano (São Paulo)<br>Móbile (São Paulo)<br>Objetivo (S.J. dos Campos)<br>Objetivo (São Paulo)<br>Pensi (Rio de Janeiro)<br>pH (Rio de Janeiro)<br>Poliedro (S.J. dos Campos)<br>Poliedro (São Paulo)<br>Santo Américo (São Paulo)<br>Santo Antonio (Belo Horizonte)<br>São Bento (Rio de Janeiro)<br>Sidarta (Cotia)<br>Uirapuru (Sorocaba)<br>'
    },
    {
      'title': 'Escola parceira ismart online',
      'content': 'Conteúdo Escola parceira ismart online'
    },
    {
      'title': 'Apoiadores',
      'content': 'Conteúdo Apoiadores'
    },
    {
      'title': 'Patrocinadores de bolsistas e programas',
      'content': 'Conteúdo Patrocinadores de bolsistas e programas'
    },
    {
      'title': 'Parceiro Pro bono',
      'content': 'Conteúdo Parceiro Pro bono'
    },
    {
      'title': 'Parceiro operacional',
      'content': 'Conteúdo Parceiro operacional'
    },
    {
      'title': 'Cursos de línguas e pré-vestibular',
      'content': 'Conteúdo Cursos de línguas e pré-vestibular'
    },
    {
      'title': 'Conexão profissão',
      'content': 'Conteúdo Conexão profissão'
    },
    {
      'title': 'Mentores universitários',
      'content': 'Conteúdo Mentores universitários'
    },
    {
      'title': 'Coaches de universitários',
      'content': 'Conteúdo Coaches de universitários'
    },
    {
      'title': 'Café com profissional',
      'content': 'Conteúdo Café com profissional'
    },
  ]

  private relatedInfo = [
    {
      'image': 'assets/images/10-expediente-mobile.jpg',
      'title': '10.',
      'subtitle': 'Expediente',
      'url': '10-expediente'
    },
    {
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
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
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/9-lista-de-parceiros-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '09. Lista de parceiros - Ismart'});
  }

}
