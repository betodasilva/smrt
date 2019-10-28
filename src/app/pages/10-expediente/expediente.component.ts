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
      'content': `
      <p>Adriana Casulari M. Rodrigues</p>
      <p>Aline Moreira Leonelo</p>
      <p>Amanda da Silva Prates</p>
      <p>Ana Carolina Mendes Duarte</p>
      <p>Ana Carolina Miki Martins</p>
      <p>Ana Paula Ciriaco Camargo</p>
      <p>Anelisa Pinto Salles Dias</p>
      <p>Anne Caroline Barreto</p>
      <p>Beatrice Soares de Souza Leite</p>
      <p>Beatriz Arruda</p>
      <p>Beatriz Mantelato</p>
      <p>Bruna Credidio Camara</p>
      <p>Bruna de Almeida Carvalho</p>
      <p>Bruno Gonçalves de Oliveira</p>
      <p>Camila Pinheiro</p>
      <p>Carla Galante Soares</p>
      <p>Carolina Esteves Garcia</p>
      <p>Carolina Zauli Ferreira Pinto</p>
      <p>Caroline M.G. Coelho Ortiz</p>
      <p>Caroline Passarella de Souza</p>
      <p>Cecília Rodrigues</p>
      <p>Celina Seara da Costa Pinto</p>
      <p>Dafne Caroline Z. de Moraes</p>
      <p>Ellen Roncolato Kozuka</p>
      <p>Fabiane Natalia de Souza Pinto</p>
      <p>Fabricio Vicentini de Souza</p>
      <p>Felipe Perroti Pereira</p>
      <p>Fernanda Cardoso F. Fonseca</p>
      <p>Gabriela M. da Conceição Silva</p>
      <p>Gabriela Matos da Silva</p>
      <p>Guilherme Tadeu Chebib</p>
      <p>Ítalo Rodrigues</p>
      <p>Jéssica Isquerdo Rodrigues</p>
      <p>Jessica Maria da Silva Castilho</p>
      <p>Joyce Cristina Ribeiro</p>
      <p>Juliana Maria da Silva</p>
      <p>Karen Santiago V. de Freitas</p>
      <p>Karina Rodrigues E. Gonçalves</p>
      <p>Larissa Dantas S. Bacanhim</p>
      <p>Livia Camaz Vinhosa</p>
      <p>Luana Maria de F. Oliveira</p>
      <p>Lucas Casadei Aprile</p>
      <p>Maria Luiza T. M. Guntovitch</p>
      <p>Mariana B. do Rego Monteiro</p>
      <p>Mariana do N. Cardoso</p>
      <p>Mariana Rodrigues Lopes</p>
      <p>Patricia Teresinha C. de Lima</p>
      <p>Poliana Machado dos Santos</p>
      <p>Rafael Cerqueira Duarte</p>
      <p>Rafael Ribeiro de Souza Maia</p>
      <p>Renata Arantes Lourenço</p>
      <p>Renata Baccarat Ramos</p>
      <p>Renata Nazaré Magalhães</p>
      <p>Renate Mitie Fukunaga</p>
      <p>Roberta Lellis Piozzi</p>
      <p>Rochelly Suemi Tatsumo</p>
      <p>Suzana Souza Oliveira</p>
      <p>Tatiana Lopes da Rocha</p>
      <p>Thiago Delfino</p>
      <p>Vanessa Cerqueira Porto</p>
      <p>Viviane Mendes Machado</p>
      `
    },
    {
      'title': 'Redação',
      'content': '<p>KMZ Conteúdo</p>'
    },
    {
      'title': 'Fotos',
      'content': `
      <p>Aurelio Cristiano Sena</p>
      <p>Douglas Shineidr</p>
      <p>Guilherme Cursino</p>
      <p>Livia Martins</p>
      <p>Lucas Pupio</p>
      <p>Lucíola Vilela</p>
      <p>Tiago Queiroz</p>
      `
    },
    {
      'title': 'Design',
      'content': `<p>Cria Caso | Mariana Nahoum</p>`
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
