import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.component.html',
  styleUrls: ['./lista-parceiros.component.scss']
})
export class ListaParceirosComponent implements OnInit {

  private chapterHatInfo = {
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
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Contato',
      'url': '04-trajetorias-ismart-contato'
    },
    {
      'image': 'assets/images/7-manifesto.jpg',
      'title': '07.',
      'subtitle': 'Resultados 2018',
      'url': ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
