import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.component.html',
  styleUrls: ['./lista-parceiros.component.scss']
})
export class ListaParceirosComponent implements OnInit {
  
  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title: string = '09. Lista de parceiros - Ismart';

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
      'content': `
        <p>Bandeirantes (São Paulo)</p>
        <p>Bernoulli (Belo Horizonte)</p>
        <p>Embraer & Instituto Embraer (São José dos Campos)</p>
        <p>Escola Eleva (Rio de Janeiro)</p>
        <p>Etapa (São Paulo)</p>
        <p>Lourenço Castanho (São Paulo)</p>
        <p>Magno (São Paulo)</p>
        <p>Marista Arquidiocesano (São Paulo)</p>
        <p>Móbile (São Paulo)</p>
        <p>Objetivo (S.J. dos Campos)</p>
        <p>Objetivo (São Paulo)</p>
        <p>Pensi (Rio de Janeiro)</p>
        <p>pH (Rio de Janeiro)</p>
        <p>Poliedro (S.J. dos Campos)</p>
        <p>Poliedro (São Paulo)</p>
        <p>Santo Américo (São Paulo)</p>
        <p>Santo Antonio (Belo Horizonte)</p>
        <p>São Bento (Rio de Janeiro)</p>
        <p>Sidarta (Cotia)</p>
        <p>Uirapuru (Sorocaba)</p>
      `
    },
    {
      'title': 'Escola parceira ismart online',
      'content': `
        <p>Ao Cubo</p>
        <p>Arquidiocesano</p>
        <p>Colégio Dante Alighieri (São Paulo)</p>
        <p>Colégio Marista Glória (São Paulo)</p>
        <p>Colégio Planck (São José dos Campos)</p>
        <p>Elite (Rio de Janeiro)</p>
        <p>Escola Eleva</p>
        <p>Escola Granja Viana</p>
        <p>Escola Internacional de Alphaville (Barueri)</p>
        <p>Mopi (Rio de Janeiro)</p>
        <p>Pensi (Rio de Janeiro)</p>
        <p>Salesiano ( ão Paulo)</p>
        <p>Sarah Dawsey (Rio de Janeiro)</p>
        <p>St Pauls (São Paulo)</p>
      `
    },
    {
      'title': 'Apoiadores',
      'content': `
        <p>Instituto Helena Antipoff</p>
        <p>Ministério da Cidadania</p>
        <p>Secretaria da Educação do Estado de São Paulo</p>
        <p>Secretaria do Estado de Educação de Minas Gerais</p>
        <p>Secretaria Municipal de Educação de Belo Horizonte</p>
        <p>Secretaria Municipal de Educação de São José dos Campos</p>
        <p>Secretaria Municipal de Educação de São Paulo</p>
        <p>Secretaria Municipal de Educação do Rio de Janeiro</p>
      `
    },
    {
      'title': 'Patrocinadores de bolsistas e programas',
      'content': `
        <p>Alexandre Behring Costa</p>
        <p>Alexandre Puigventós Frangioni</p>
        <p>Ana Luiza Garfinkel</p>
        <p>Andrea Dessen de Souza e Silva</p>
        <p>Banco Mundial</p>
        <p>Benjamin Citron</p>
        <p>Bertelsmann</p>
        <p>Blanver</p>
        <p>Bradesco BBI Solidário</p>
        <p>Bruno Potenza</p>
        <p>Christian Telles</p>
        <p>Claudio Garcia</p>
        <p>Dilton Marinho Rodrigues</p>
        <p>Florian Bartunek</p>
        <p>Humberto Machado</p>
        <p>Instituto Credit Suisse Hedging-Griffo</p>
        <p>Juan Vergara</p>
        <p>Manuel de Almeida Marins Gorito</p>
        <p>Marcelo de Sá</p>
        <p>Mattos Filho Advogados</p>
        <p>Pedro Romano</p>
        <p>Ricardo Ermírio de Moraes</p>
        <p>AI Desenvolvimento Imobiliário</p>
        <p>Rodrigo Figueiredo de Souza</p>
        <p>Veirano Advogados</p>
        <p>Vicente Falconi Campos</p>
        <p>Victória de Sá</p>
      `
    },
    {
      'title': 'Parceiro Pro bono',
      'content': `
        <p>Angela Virgolim - Universidade de Brasília</p>
        <p>Arte de viver</p>
        <p>Denise Fleith - Universidade de Brasília</p>
        <p>Edson Saggese - Universidade Federal do Rio de Janeiro</p>
        <p>Elisabeth Veiga - PUC Paraná</p>
        <p>Expo Center Norte</p>
        <p>Fesap Recrutamento e Seleção</p>
        <p>Instituto Hinode</p>
        <p>Itabus</p>
        <p>Machado Meyer</p>
        <p>Maria Cristina de Carvalho Delou - Universidade Federal Fluminense</p>
        <p>Pearson</p>
        <p>Sapiens Instituto de Psicologia</p>
        <p>Ulhôa Canto, Rezende e Guerra Advogados</p>
        <p>Vella Pugliese Buosi e Guidoni Advogados</p>
      `
    },
    {
      'title': 'Parceiro operacional',
      'content': `
        <p>Amigos da Poli</p>
        <p>Andover</p>
        <p>Arpex Capital</p>
        <p>Associação Atlética Tijuca</p>
        <p>Atados Rio</p>
        <p>Atados SP</p>
        <p>B-Abroad</p>
        <p>Bain & Company</p>
        <p>Bem Mudar</p>
        <p>Biblioteca Pública Estadual de Minas Gerais</p>
        <p>blastU</p>
        <p>boostLab</p>
        <p>BrMalls</p>
        <p>BTG Pactual</p>
        <p>Cantina SaveMe</p>
        <p>Canvas</p>
        <p>CCG Psicologia</p>
        <p>CEFE (Centro de Formação do Educador em SJC)</p>
        <p>Centro Cultural João XXIII</p>
        <p>Civi-co</p>
        <p>CK Gestão Empresarial</p>
        <p>Colégio Ao Cubo (Rio de Janeiro)</p>
        <p>Colégio Boni Consilii (São Paulo)</p>
        <p>Colégio Madre Cabrini (São Paulo)</p>
        <p>Colégio Nossa Senhora do Monte Calvário (Belo Horizonte)</p>
        <p>Cultura Inglesa (Rio de Janeiro)</p>
        <p>Dell’Arte Soluções Culturais</p>
        <p>DMS Digital</p>
        <p>Editora Policarpo</p>
        <p>En-Sof Uniformes</p>
        <p>Escola de Mentores</p>
        <p>Escola Superior Dom Helder Camara</p>
        <p>ESPM</p>
        <p>Estácio</p>
        <p>Fábrica de Ideias Brasileiras (FIB)</p>
        <p>Facebook</p>
        <p>FACENS (Sorocaba)</p>
        <p>Falconi Consultores de Resultado</p>
        <p>FEBRACE</p>
        <p>Flow</p>
        <p>Focus</p>
        <p>Fundação Estudar</p>
        <p>Fundação Getulio Vargas - Rio de Janeiro (FGV-Rio)</p>
        <p>Fundação Getulio Vargas - São Paulo (FGV-SP)</p>
        <p>Fundação Lemann</p>
        <p>Future Education</p>
        <p>Google</p>
        <p>GRSA Soluções em Alimentação e Serviços</p>
        <p>Grupo Cia de Talentos</p>
        <p>Harvard University - DRCLAS</p>
        <p>IBMEC</p>
        <p>Insper</p>
        <p>Instituto Europeu de Design (IED)</p>
        <p>Instituto Sol</p>
        <p>Interac</p>
        <p>Itabus</p>
        <p>Itaú Unibanco</p>
        <p>Juliana Souza Deororo ME</p>
        <p>Learn to fly</p>
        <p>Livro Fácil</p>
        <p>LogicPrep</p>
        <p>Máquina Cohn & Wolfe</p>
        <p>MAR</p>
        <p>McKinsey & Company Brasil</p>
        <p>Mereo</p>
        <p>Notre Dame Club of Brazil</p>
        <p>Núcleo Capital</p>
        <p>Objetivo Line</p>
        <p>Ouzaz</p>
        <p>Patente Del Corsi Advogados</p>
        <p>Pearson</p>
        <p>Picarelli Associados</p>
        <p>Plano CDE</p>
        <p>Politize</p>
        <p>Primeira Escolha</p>
        <p>Projeto Gauss</p>
        <p>PUC Minas - campus Coração Eucarístico</p>
        <p>RaiaDrograsil</p>
        <p>Raíz Educação</p>
        <p>Regus do Brasil</p>
        <p>Restaurante Mania Mineira</p>
        <p>Rolim, Viotti & Leite Campos advogados</p>
        <p>Sanrad</p>
        <p>Santa Marcelina</p>
        <p>Santa Marcelina Cultura</p>
        <p>Santander</p>
        <p>Sapore</p>
        <p>Scudra</p>
        <p>Stanford</p>
        <p>Startupfarm</p>
        <p>Stillo’s Produções e Eventos</p>
        <p>Unip - Paraíso</p>
        <p>Universidade Newton Paiva (Belo Horizonte)</p>
        <p>Universidade Paulista (Unip)</p>
        <p>Vittude</p>
        <p>Yale University</p>
        <p>Zasaflor</p>
      `
    },
    {
      'title': 'Cursos de línguas e pré-vestibular',
      'content': `
        <p>Amanda Andersen</p>
        <p>Anelisa Macedo</p>
        <p>CCAA Santo Agostinho (Belo Horizonte)</p>
        <p>CPV Educacional</p>
        <p>Cultura Inglesa</p>
        <p>Intergraus São Paulo</p>
        <p>Objetivo (São Paulo) – Cursinho</p>
        <p>Patrícia Monteiro</p>
        <p>Sociedade Brasileira de Cultura Inglesa (Rio de Janeiro)</p>
        <p>Yázigi</p>
      `
    },
    {
      'title': 'Conexão profissão',
      'content': `
        <p>99 POP</p>
        <p>Aeroporto Internacional de Cabo Frio</p>
        <p>Ambev</p>
        <p>BASF</p>
        <p>Bio-Rad Laboratórios do Brasil</p>
        <p>Blossom Consult</p>
        <p>Bogari</p>
        <p>Bristol-Myers Squibb</p>
        <p>Centro Médico Berrini</p>
        <p>Centro Nacional de Pesquisa em Energia e Materiais</p>
        <p>Coimbra & Chaves Advogados</p>
        <p>DASA</p>
        <p>Departamento de Física da UFMG</p>
        <p>Dr. Oetker</p>
        <p>Efix Aviation Support</p>
        <p>ePay Brasil</p>
        <p>Escola de Negócios SEBRAE</p>
        <p>Everymind</p>
        <p>EXEC</p>
        <p>Faculdade de Medicina Veterinária e Zootecnia USP</p>
        <p>FGV RJ</p>
        <p>Firjan</p>
        <p>Fix Desing</p>
        <p>Fórum Criminal de São José dos Campos</p>
        <p>Fórum Estadual de São José dos Campos</p>
        <p>Fundação Oswaldo Cruz (Fiocruz) (Rio de Janeiro)</p>
        <p>Home Vet</p>
        <p>Hospital A.C.Camargo</p>
        <p>Hospital das Clínicas da UFMG</p>
        <p>Hospital das Clínicas da USP</p>
        <p>Hospital Samaritano RJ</p>
        <p>Hospital Universitário Antônio Pedro (Rio de Janeiro)</p>
        <p>Hospital Universitário Clementino Fraga (Rio de Janeiro)</p>
        <p>Hospital Universitário Gaffrée e Guinle (Rio de Janeiro)</p>
        <p>Hospital Universitário Pedro Ernesto (Rio de Janeiro)</p>
        <p>Hospital Veterinário UNIBH</p>
        <p>Indio da Costa Arquitetura</p>
        <p>Instituto de Ciências Biológicas da UFMG</p>
        <p>Instituto de Física da USP</p>
        <p>Instituto de Pesquisa e Desenvolvimento da Universidade do Vale do Paraíba</p>
        <p>Instituto Fernandes Figueira</p>
        <p>Instituto Nacional de Câncer</p>
        <p>Instituto Nacional de Pesquisas Espaciais</p>
        <p>Integration Consulting</p>
        <p>MFB Advogados</p>
        <p>Moip Pagamentos | Wirecard Brasil S.A.</p>
        <p>MRV Engenharia</p>
        <p>Palácio Guanabara</p>
        <p>Policlin</p>
        <p>Prodesign</p>
        <p>Qmágico</p>
        <p>Rede D’or</p>
        <p>Sampla Belting</p>
        <p>Secretaria Municipal do Meio Ambiente</p>
        <p>Silva Freire Advogados</p>
        <p>Sinergia Studios</p>
        <p>Stone Pagamentos</p>
        <p>Stoodi Ensino e Treinamento a distância LTDA - EPP</p>
        <p>Unidade de Saúde da Polícia Militar do Estado de São Paulo</p>
        <p>Universidade Federal do ABC</p>
        <p>Universidade Federal do Rio de Janeiro</p>
        <p>Veduca</p>
        <p>Vetor Brasil</p>
        <p>Via Varejo</p>
        <p>Votorantim Cimento S.A.</p>
        <p>ZMPBC Advogados</p>
      `
    },
    {
      'title': 'Mentores universitários',
      'content': `
        <p>Alessandra Gomensoro</p>
        <p>Alessandro Takeshi Morita Gagliardi</p>
        <p>Alicia J. Kowaltowski</p>
        <p>Aline Teixeira Soares</p>
        <p>Ana Paula Gouvêa Costa</p>
        <p>André Godoy Farat</p>
        <p>Andre Luis Giorgetti Valente</p>
        <p>Anna Paula de Abreu da Costa Carvalho</p>
        <p>Antônio Augusto Barboza Pinto</p>
        <p>Augusto Banuls</p>
        <p>Barbara Teixeira Faleiro</p>
        <p>Beatriz Abdalla</p>
        <p>Brunna Calil Alves Carneiro</p>
        <p>Bruno Velloso Rodrigues</p>
        <p>Carla Diniz dos Santos da Silva</p>
        <p>Carlos Eduardo Rugani Barcellos</p>
        <p>Carlos Goffredo</p>
        <p>claudia de melo rocha</p>
        <p>Claudia Gonçalves Coelho Pellim</p>
        <p>Claudio Amaral Azzi</p>
        <p>Danielle Lucie Andrade Freitas</p>
        <p>Douglas Pereira</p>
        <p>Eduardo Berardinelli Arraes Carvalho de Oliveira</p>
        <p>Erica Bastos</p>
        <p>Fabio Mele Dall’Acqua</p>
        <p>Felipe de Almeida Maciel Bonfim</p>
        <p>Fernando Thiers</p>
        <p>Flavio Veitzman</p>
        <p>Francisco José Pereira Leite</p>
        <p>Frederico Porto Mendes</p>
        <p>Giovanna Killer Soares de Souza</p>
        <p>Guilherme Carneiro da Cunha Cintra</p>
        <p>Guilherme Kubo</p>
        <p>Henrique Martins Candeias Pontes Coelho</p>
        <p>Iasmim Brandão</p>
        <p>James Felipe Piazza</p>
        <p>Joaquim Rocha</p>
        <p>Juliana Gomes Ramalho Monteiro</p>
        <p>Leonardo Heiji Kuwabara</p>
        <p>Leticia Maegava Gomes</p>
        <p>Luiz Felipe Cavadas de Paiva</p>
        <p>Marcelo Viveiros de Moura</p>
        <p>Marcos H. Y. Matsutani</p>
        <p>Marcus Vinicius Antonio Ayres</p>
        <p>Maria Carolina Paseto</p>
        <p>Maria Isabel Moretti de Miranda</p>
        <p>Maria Isabel Mussnich Pedroso Espirito Santo</p>
        <p>Mariana Sartor</p>
        <p>Mauro Dutra</p>
        <p>Michelle Borensztejn Vilela de Oliveira</p>
        <p>Nadia Ayad</p>
        <p>Nathan Partel</p>
        <p>Nelson Faversani Jr</p>
        <p>Nicolas R Silva</p>
        <p>Octávio de Oliveira Santos Neto</p>
        <p>Pedro Rodrigues</p>
        <p>Rafael Claude Macedo de Larragoiti Lucas</p>
        <p>Rafael Teles</p>
        <p>Raffaella Bignardi</p>
        <p>Ricardo Correa da Silva</p>
        <p>Ricardo Lins Ribeiro</p>
        <p>Rosana de Freitas Correia</p>
        <p>Sandra Medeiros Proença de Gouvea</p>
        <p>Silvia Carrara de Moraes</p>
        <p>Sofia Antonio</p>
        <p>Thais Ramajo Esteves</p>
        <p>Thomaz Xavier Carneiro</p>
        <p>Victor da Silva Pinto</p>
        <p>Wesley Miquelino</p>
      `
    },
    {
      'title': 'Coaches de universitários',
      'content': `
        <p>Adriane Helena Rodrigues</p>
        <p>Ana Carolina Shinoda</p>
        <p>Carla Fritsch</p>
        <p>Claudia Pereira</p>
        <p>Cristiana Saad Castello Branco</p>
        <p>Danilca Galdini</p>
        <p>Eduardo Correa</p>
        <p>Estevão Raffaine Vilas Boas</p>
        <p>Felipe Paiva</p>
        <p>Fernanda Lopes de Macedo Thees</p>
        <p>Janice Valentim</p>
        <p>Luciana Domagala</p>
        <p>Marcia Nizzo de Moura</p>
        <p>Maria Angélica Nassour Nunes Sampaio</p>
        <p>Maria Elci Spaccaquerche Barbosa</p>
        <p>Mariana Lobato</p>
        <p>Marise Raposo Cerqueira</p>
        <p>Mônica Dalgé</p>
        <p>Neide Silva da Rocha Sencovici</p>
        <p>Osório Roberto dos Santos</p>
        <p>Taís Cristina do Amaral</p>
        <p>Thomaz Meirelles</p>
        <p>Vanessa Bassili A Domingos</p>
      `
    },
    {
      'title': 'Café com profissional',
      'content': `
        <p>Alexandre Frangioni</p>
        <p>Alexandre Gonçalves</p>
        <p>Alice Xavier</p>
        <p>Ana Carolina Almeida</p>
        <p>Ana Carolina Azevedo Carneiro</p>
        <p>Ana Flavia Ramos</p>
        <p>Andréa Bandoni</p>
        <p>Andrey Fabiano Lourenço de Aguiar (Graduado Ismart)</p>
        <p>Anna Paula Carvalho</p>
        <p>Anny Mayara</p>
        <p>Arlete Figueiredo Muoio</p>
        <p>Arthur Carneiro</p>
        <p>Beatriz Abdalla</p>
        <p>Beatriz Triano Perusso</p>
        <p>Bruno Rodrigues</p>
        <p>Camila Guimarães</p>
        <p>Carlos Granados</p>
        <p>Carlos Roberto Marton da Silva</p>
        <p>Carolina Crespo</p>
        <p>Carolina Grilo</p>
        <p>Carolina Rosa</p>
        <p>Cássia de Oliveira Lima</p>
        <p>Cássio dos Santos Sousa</p>
        <p>Cássio José</p>
        <p>Clara Rodrigues Alves de Oliveira</p>
        <p>Claudio de Sá Martins</p>
        <p>Diego Aniceto</p>
        <p>Dr. Flavio Hojaij</p>
        <p>Dra. Ho Yeh Li</p>
        <p>Dra. Marcia Roboldi</p>
        <p>Eliana Lemos</p>
        <p>Enya Costa</p>
        <p>Frederico Torres de Souza</p>
        <p>Gabriel Barros (Graduado Ismart)</p>
        <p>Gabriela de Arantes Silva (Graduada Ismart)</p>
        <p>Gabriela Esteves</p>
        <p>Guilherme Lourenço Silva</p>
        <p>Guilherme Melo</p>
        <p>Guilherme Robattom Loverbeck</p>
        <p>Henrique Araujo</p>
        <p>Henrique Weeck</p>
        <p>Isabela Borges</p>
        <p>Isabela Padovan</p>
        <p>Itamize de Oliveira</p>
        <p>Jansen Xavier Fernandes</p>
        <p>João Paulo Guimarães</p>
        <p>João Pedro Rocha</p>
        <p>João Victor Azevedo</p>
        <p>Julia Rocha</p>
        <p>Juliana Brant</p>
        <p>Juliana Gomes de Souza</p>
        <p>Juliana Nunes</p>
        <p>Keicia Pinto</p>
        <p>Laís Inoue Kurusu (Graduada Ismart)</p>
        <p>Lara de Almeida Terra</p>
        <p>Leoberto de Lima</p>
        <p>Leonardo da Silveira Rodrigues</p>
        <p>Leonardo Miranda</p>
        <p>Leonardo Rodrigues</p>
        <p>Leticia Avila (Graduada Ismart)</p>
        <p>Luan Bernardo (Graduado Ismart)</p>
        <p>Lucas dos Santos Gandolfi</p>
        <p>Lucas Weber</p>
        <p>Luiz Fernando</p>
        <p>Manuel Gorito</p>
        <p>Maria José Couto</p>
        <p>Mariana M.</p>
        <p>Mariane Ponte</p>
        <p>Marília José</p>
        <p>Mauricio Emanuel</p>
        <p>Mozart Caruzo (Universitário Ismart)</p>
        <p>Nickolas Andreas</p>
        <p>Oliver Turci</p>
        <p>Paula Carnevalle</p>
        <p>Paulo de Tarso (Graduado Ismart)</p>
        <p>Paulo Lima</p>
        <p>Pedro Rosa</p>
        <p>Ramon da Costa Lima</p>
        <p>Regina Gasparetti</p>
        <p>Renata Nacif</p>
        <p>Renata Proença</p>
        <p>Ricardo Jorgensen Cassella</p>
        <p>Roberto Martins</p>
        <p>Robson Goulart Barreto</p>
        <p>Rodrigo Figeuiredo de Oliveira</p>
        <p>Rodrigo Matsumoto Cobra</p>
        <p>Sandra Blanco</p>
        <p>Sthepanie Santos de Almeida</p>
        <p>Thais Sales</p>
        <p>Thiago Guimarães Moraes</p>
        <p>Thiago Rocha</p>
        <p>Thomas Eichenberg Krahe</p>
        <p>Thomas Lopes Ferreira</p>
        <p>Vandré Vegas</p>
        <p>Vanessa Ribeiro</p>
        <p>Verônica Souza</p>
        <p>Víctor Ramineli</p>
        <p>Vinicius Kuramoto</p>
        <p>Vitor Horvarth</p>
        <p>William Duarte (Graduado Ismart)</p>`
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
