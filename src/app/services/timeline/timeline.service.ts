import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  public content = [
    {
      type: 'content',
      title: '1999',
      excerpt: '<p>Lançado, no Rio de Janeiro, o Espaço Talento, primeiro projeto do Ismart, voltado para alunos, a partir de 6 anos, selecionados na rede municipal de ensino.</p>',
      image: 'assets/images/1999.jpg',
      icon: 'assets/images/pencil.svg'
    },
    {
      type: 'content',
      title: '2004',
      excerpt: '<p>Criado o Projeto Alicerce, que oferece a alunos do 7º ano (antiga 6ª série) curso preparatório, no contraturno das aulas da rede pública, para prepará-los para o Ensino médio. Surge também, a partir de parceria com escolas de excelência, o Bolsa Talento, projeto que oferece bolsas de estudos a alunos talentosos que são indicados por professores.</p><p>Transferência da sede do Ismart para São Paulo.</p>',
      image: 'assets/images/2004.jpg',
      icon: 'assets/images/stairs.svg'
    },
    {
      type: 'content',
      title: '2005',
      excerpt: `<p>Alunos selecionados na rede pública do Rio de Janeiro passam a ter acesso ao Projeto Alicerce, por meio de parcerias firmadas na capital fluminense.</p><p>Em São Paulo, o Ismart amplia as parcerias e passa a contar com mais colégios em sua rede.</p>`,
      icon: 'assets/images/chat.svg'
    },
    {
      type: 'content',
      title: '2006',
      excerpt: `<p>O Ismart oficializa a parceria com a Secretaria de Educação do Município de São Paulo.</p>`,
      icon: 'assets/images/leaf.svg'
    },
    {
      type: 'content',
      title: '2007',
      excerpt: `<p>Ismart estabelece parceria com a Secretaria de Educação de São José dos Campos e com a Secretaria de Educação do Estado de São Paulo.</p>
      <p>Início da Convenção de Alunos e Famílias Ismart, evento anual que reúne os alunos e responsáveis dos cursos presenciais de cada praça para inspirar e fortalecer a comunidade Ismart.</p>`,
      image: 'assets/images/2007.jpg',
      icon: 'assets/images/bridge.svg'
    },
    {
      type: 'content',
      title: '2008',
      excerpt: `<p>Em junho, foi realizado 1º Encontro Ismart com professores da rede pública, com edições em São Paulo e no Rio de Janeiro.</p>`,
      icon: 'assets/images/molecule.svg'
    },
    {
      title: '2009',
      excerpt: '<p>Ismart promove seminário internacional a fim de oferecer às escolas parceiras conhecimentos sobre o aprimoramento de práticas de ensino com qualidade.</p><p>O professor Vicente Falconi, conselheiro Ismart, lança seu livro “O verdadeiro Poder” e destina renda ao Ismart.</p>',
      image: 'assets/images/2009.jpg',
      icon: 'assets/images/books.svg'
    },
    {
      title: '2013',
      excerpt: '<p>Início do Summer Program, programa de intercâmbio. Com apoio da associação de ex-alunos brasileiros, bolsistas do Ismart passaram a temporada de verão na Universidade de Notre Dame, em Indiana, Estados Unidos.</p><p>O processo de seleção de bolsistas do Ismart começa a considerar também algumas habilidades socioemocionais para selecionar seus candidatos.</p>',
      icon: 'assets/images/nav.svg'
    },
    {
      title: '2014',
      excerpt: `
      <p>Criação do projeto Liga do Futuro, com a proposta de promover a troca de conhecimentos entre os bolsistas e fortalecer a comunidade.</p>
      <p>Lançamento do Programa de Desenvolvimento de Universitários (PDU), criado para que os universitários apoiados pelo Ismart ampliem o repertório com novas experiências e conquistem oportunidades de destaque no mercado de trabalho.</p>
      <p>Lançamento do programa Ismart Online, plataforma on-line com conteúdos exclusivos para o bolsista, com uma turma de 186 alunos para o 8º ano.</p>
      `,
      icon: 'assets/images/box.svg'
    },
    {
      title: '2015',
      excerpt: `
      <p>Aumento no número de vagas do Ismart Online para 393 alunos.</p>
      <p>Criação do programa Conexão Profissão, com o objetivo de dar aos bolsistas a oportunidade de acompanhar a rotina de uma profissão.</p>
      `,
      icon: 'assets/images/puzzle.svg'
    },
    {
      title: '2016',
      excerpt: `
      <p>Inicialmente planejado para ser um projeto preparatório para alunos dos últimos anos do ensino fundamental, a partir dos excelentes resultados, o Ismart Online passa a atender alunos também ao longo do Ensino médio.</p>
      `,
      icon: 'assets/images/mail.svg'
    },
    {
      title: '2017',
      excerpt: `
      <p>No Rio de Janeiro, o Ismart amplia atuação para a zona oeste da cidade.</p>
      <p>Criação do Alumni Ismart, rede de ex-bolsistas graduados do Ismart.</p>
      `,
      icon: 'assets/images/house.svg'
    },
    {
      title: '2018',
      excerpt: `
      <p>Ismart chega à capital mineira, Belo Horizonte, com os projetos presenciais e on-line.</p>
      <p>Processo seletivo do Ismart bate recorde de inscrições, com mais de 20 mil interessados.</p>
      <p>99% dos bolsistas concluintes do Ensino médio foram aprovados em vestibulares.</p>
      <p>Os alunos da primeira turma do Ismart Online são aprovados em universidades de excelência e recomendados para ingressar como bolsistas universitários do Ismart.</p>
      `,
      image: 'assets/images/2018.jpg',
      icon: 'assets/images/pin.svg'
    },
    {
      title: '2019',
      excerpt: '<p>Ismart completa 20 anos e a história está apenas começando...</p>',
      icon: 'assets/images/positive.svg'
    }
  ]
}
