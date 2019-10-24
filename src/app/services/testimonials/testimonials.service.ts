import { Injectable } from '@angular/core';
import { Observable, observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() {}

  private _testimonial: BehaviorSubject<any> = new BehaviorSubject({});

  public get current(): Observable<any>{
    return this._testimonial;
  }

  public set current(testimonial){
    this._testimonial.next(testimonial);
  }

  private get all() {
    return this._testimonials;
  }

  private _testimonials = {
    selecao: [
      {
        id: 1,
        name: "Nádia Ribeiro",
        excerpt: "Professora de Matemática na Escola Calhim Manuel Abud, na Zona Sul de São Paulo.",
        testimonial: `Para fazer a indicação sempre
        recorro aos meus pares e respeito
        o ponto de vista dos colegas que
        escolhem estudantes com as
        melhores notas. Mas acho que não
        é só isso: desde o primeiro dia de
        aula já vou observando quais são as
        crianças que apresentam um ‘quê’
        diferente. Elas têm um algo a mais
        que consigo ver, mas não explicar.
        Como aplico muitos desafios, observo
        os persistentes, os esforçados, os
        brilhantes e os criativos. Dá pra ver
        as potencialidades em pequenos
        detalhes. Não busco um perfil, mas
        pontos que os diferencie dos demais.
        Para mim, o Ismart é como uma grande
        rede que vai pegando os peixes e
        levando tudo ao seu redor. Observo
        as mudanças nas conversas com os
        bolsistas: certa vez, um deles me disse
        que antes de conhecer o Instituto
        pensava em fazer o ensino médio
        voltado para a área de tecnologia
        e abrir um negócio de informática,
        mas que hoje pensava em morar na
        França, quer conhecer o mundo. Acho
        que o Ismart consegue mostrar a
        esses meninos a dimensão do mundo.
        O que me encanta, e acredito que a
        qualquer educador, é ver aquele brilho 
        nos olhos, aquele sorriso discreto que
        parece dizer ‘ahhhh, então é isso!!!’.
        Sempre acreditei na educação como
        um caminho, para mim o único. Acho
        que o maior desafio dessa profissão é
        fazer com que as pessoas percebam
        que não há futuro, não há mudança
        possível sem educação.`,
        photo: "assets/images/nadia-ribeiro.jpg"
      },
      {
        id: 2,
        name: "Jacqueline MacDowell",
        excerpt: "Professora do Instituto Helena Antipoff, pertence à Secretaria Municipal da Educação do RJ.",
        testimonial: `É muito importante a parceria
        da Secretaria Municipal de Educação
        com o Ismart – que faz toda a
        diferença quando entra nas escolas
        e começa a identificar esses alunos
        a partir do processo seletivo, e
        eles entendem a importância de se
        desenvolver e crescer`
      },
      {
        id: 3,
        name: "Renato Aguiar",
        excerpt: "Professor de Matemática da Escola Municipal República do Peru, no Rio de Janeiro",
        testimonial: `Em 2014 pude conhecer melhor
        o Ismart, pois a bolsista que foi da
        turma para a qual eu lecionava em 2013
        passou a visitar a escola e divulgar os
        projetos. Fiquei muito impressionado
        com a mudança de postura. Ela era uma
        aluna muito tímida e já no primeiro
        ano como bolsista, estava bem mais
        comunicativa, a ponto de entrar nas
        turmas e fazer a apresentação das
        atividades do Ismart. Foi quando
        deparei com os exemplos de vida
        dos bolsistas e as oportunidades
        oferecidas para que desenvolvam o
        máximo do seu potencial. A estrutura
        motiva e apoia os alunos, dando acesso
        a melhores escolas, intercâmbios,
        apoio psicológico, encontro com
        profissionais de várias áreas,
        atividades que os ajudam a chegar bem
        preparados no mercado de trabalho,
        como os programas de mentoria,
        coaching e oficinas que desenvolvem
        habilidades de comunicação, além dos
        encontros periódicos com bolsistas e
        seus familiares. A estrutura acompanha
        desde o ensino fundamental até à
        universidade. A ideia de ajudar a
        encontrar alunos talentosos de baixa
        renda me motivou cada vez mais, de
        modo que comecei a participar do
        encontro de educadores e a sempre
        atualizar e aperfeiçoar os materiais
        que uso no preparo dos estudantes,
        para cada etapa do processo
        seletivo. Costumo indicar que, além
        do potencial, busquem melhorar e
        ampliar os conhecimentos; realizem
        atividades em grupo interagindo
        e expondo seus pontos de vista,
        sem faltar com respeito aos demais
        colegas, por divergirem de opinião;
        e contribuam ajudando a escola não
        só nas atividades solicitadas, mas
        também sendo solidários e auxiliando
        os demais alunos com dificuldade em
        determinados conteúdos. O ingresso
        em um dos projetos do Ismart
        proporciona o contato com um universo diferente da realidade do aluno,
        que o amadurece e impulsiona seu
        pleno desenvolvimento, modificando
        o modo de pensar, agir e olhar o mundo
        ao seu redor, tornando-o um cidadão
        mais crítico, responsável, organizado,
        solidário, participativo e consciente da
        realidade.`,
        photo: "assets/images/renato-aguiar.jpg"
      }
    ],
    parceiros: [
      {
        id: 1,
        name: "Zélia e Alexandre Frangioni",
        excerpt: "Parceiros Ismart",
        testimonial: `Para nós, a Gabrielli (Fonseca)
        tem sido um exemplo de superação,
        não só pelo lado acadêmico, com
        notas que se destacam, mesmo até
        dentro do grupo dos demais alunos
        do Ismart, como nas questões de
        sua vida particular, pois sabemos das
        dificuldades financeiras pelas quais a
        família tem passado e, mesmo nesse
        cenário, seus resultados se mantêm
        nos mesmo níveis. Isso nos mostrou
        sua resiliência, força de vontade
        e dedicação. A possibilidade de
        podermos ajudar nesse processo, por
        meio do Ismart, é muito gratificante
        para nós, e o excelente desempenho
        dela nos deixa muito felizes`
      },
      {
        id: 2,
        name: "Helena Aguiar",
        excerpt: "Diretora de Planejamento e Integração do Colégio Bandeirantes",
        testimonial: `
        Não é só o
        bolsista do Ismart que
        se beneficia por estar aqui.
        Todo o Colégio ganha
        com a parceria`,
        photo: "assets/images/helena-aguiar.png"
      }
    ],
    contato: [
      {
        id: 1,
        name: "Isabela Regina Julio de Moraes",
        excerpt: "18 anos, estudante do Colégio Objetivo, em São José dos Campos - SP",
        testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
        photo: "assets/images/isabela-moraes.jpg"
      },
      {
        id: 2,
        name: "Maria Eduarda Machado",
        excerpt: "Bolsista em Belo Horizonte – MG",
        testimonial: `Minha tia viu um anúncio do
        site BHAZ, de Belo Horizonte, a
        respeito de bolsas de estudos no
        Colégio Bernoulli e enviou para a
        minha mãe. Quando cheguei em casa
        fiquei muito entusiasmada porque
        conhecia a grandeza do colégio
        e queria estudar em uma escola
        de excelência no Ensino médio.
        Tanto que fazia o 9º ano de manhã
        na minha cidade, Brumadinho, e
        estudava num cursinho popular do
        Cefet à tarde. Nesse dia, chegando
        do cursinho, logo que li a matéria
        me inscrevi para o Ismart`
      },
      {
        id: 3,
        name: "Leonardo Frazão",
        excerpt: "Aluno do 3º do Ensino médio no Colégio S. Bento, no Rio de Janeiro – RJ",
        testimonial: `Quando eu estava no 6º ano
        do ensino fundamental, professores
        já comentavam a possibilidade de
        indicação para o Ismart. Minha
        escola, Francisco Manuel, já havia
        tido alguns aprovados e era motivo
        de muito orgulho ter mais alguém se
        candidatando. Também nessa época,
        um primo meu, Matheus Santoro,
        hoje aluno do Instituto Tecnológico
        da Aeronáutica (ITA), me deu apoio
        necessário para chegar ao 7º ano
        com confiança e muita vontade de
        ingressar no projeto. Foi assim que
        tive meus primeiros contatos com o
        Ismart.`,
        photo: "assets/images/leonardo-frazao.jpg"
      },
      {
        id: 4,
        name: "Pedro Henrique C. Navarro",
        excerpt: "Estudante de Engenharia Química na Universidade de Notre Dame, nos EUA",
        testimonial: `Conheci o Ismart em 2012,
        no 9° ano, durante uma consulta
        médica na minha cidade, Sorocaba
        (SP). Minha médica perguntou à
        minha mãe, Ana Paula, se eu era
        um bom aluno na escola pública,
        e minha mãe falou sobre meu
        desempenho. Arlene, a médica,
        que tinha duas filhas no Colégio
        Uirapuru, com a qual o Ismart tem
        parceria em Sorocaba, sugeriu que
        eu entrasse no processo seletivo,
        pois acreditava que eu tinha o perfil
        do programa`,
        photo: "assets/images/pedro-navarro.jpg"
      },
      {
        id: 5,
        name: "Nádia Ribeiro",
        excerpt: "Professora de Matemática na Escola Calhim Manuel Abud, na Zona Sul de São Paulo",
        testimonial: `
        Soube da existência do
        Instituto por um ex-aluno da prefeitura que queria que o inscrevesse
        para o processo seletivo. Meu
        primeiro contato com o Ismart foi
        em 2008, quando tive a alegria de
        aprovar três estudantes. Com isso,
        senti que tinha a responsabilidade
        de acompanhar seu trabalho, haja
        vista ter conectado tantas pessoas
        a ele, pois percebi que quando um
        estudante ingressa no Ismart não é
        só ele que se liga ao Instituto, mas 
        toda sua família se compromete.
        Depois que conheci o Ismart, todos
        os anos, logo nos primeiros dias
        de aula, já falo do programa para
        meus alunos, às vezes convido
        bolsistas para contarem sua história
        aos demais, a fim de incentivá-los.
        Faço o mesmo para apresentar aos
        pais, só que, nesse caso, marco
        uma reunião e convido os pais de
        alunos pré-selecionados pelo corpo
        docente. Na reunião, sempre conto
        com a participação de ao menos um
        bolsista e um pai de bolsista que dão
        depoimentos e reforçam as minhas
        informações`
      },
      {
        id: 6,
        name: "Renato Aguiar",
        excerpt: "Professor de Matemática da Escola Municipal República do Peru",
        testimonial: `
        “Comecei a trabalhar na Escola
          Municipal República do Peru, em
          2011. A escola já participava do
          Ismart desde 2010, mas só fui
          conhecer o Instituto em 2013,
          quando uma aluna do 9° ano, da
          turma na qual eu lecionava, passou
          no processo de seleção de bolsas.
          Eu não tinha ideia da transformação
          que o trabalho faz na vida dos alunos.
          Pensava que era oferecida apenas
          uma bolsa de estudos, composta
          de mensalidade e material didático,
          como tantas outras concedidas por
          escolas particulares, mas percebi
          que o programa de desenvolvimento
          dos alunos agrega demais na vivência desses alunos`,
          photo: "assets/images/renato-aguiar.jpg"
      },
    ],
    horizonte: [
      {
        id: 1,
        name: "Mariana Rego Monteiro",
        excerpt: "Diretora-executiva do Ismart",
        testimonial: `Nosso objetivo se mantém
        como no início: sonhar grande. Mas é
        preciso ter a certeza de que esse sonho
        esteja sempre alinhado aos valores
        e às diretrizes do Ismart, fazendo o
        possível para que possamos atrair e
        desenvolver ainda mais jovens sem
        perder a qualidade do nosso trabalho
        e nosso incríveis resultados`,
        photo: ""
      },
      {
        id: 2,
        name: "Beatriz Mantelato",
        excerpt: "Gerente do ensino superior",
        testimonial: `
        Gostaria que os bolsistas graduados ocupassem posições de destaque no Brasil e no mundo em trilhas
        de carreiras como a acadêmica, empreendedorismo, governo e empresas
        privadas. Que eles sejam os líderes
        responsáveis por criar soluções e tomar decisões que influenciarão na
        resolução dos principais problemas
        da sociedade. No caminho para os
        próximos anos, seguiremos muito
        conectados às tendências do futuro
        do trabalho para oferecer o melhor
        suporte aos nossos alunos na transição para o mercado de trabalho e
        impulsionarmos a realização dos talentos que fazem parte da nossa rede.`,
      },
      {
        id: 3,
        name: "Lívia Camaz",
        excerpt: "Coordenadora de projetos Ismart",
        testimonial: `Imagino o Ismart alcançando
        cada vez mais alunos, em outros
        estados do Brasil. Podemos enviar
        cada vez mais alunos para estudarem
        fora do País e vê-los retornando para
        contribuir com o Brasil. Imagino muitos graduados do Ismart contribuindo
        com o Instituto, mentorando bolsistas
        e sendo apoiadores financeiros.`,
        photo: ""
      },
      {
        id: 4,
        name: "Ana Paula Camargo",
        excerpt: "Gerente da Educação Básica",
        testimonial: `
        Podemos aprimorar todo o
        nosso trabalho de desenvolvimento
        – melhoria contínua é um dos nossos
        mantras. Estamos neste momento
        trazendo conceitos de literacia
        digital, ‘coding’, e outras tendências
        do futuro do mercado para nossos
        alunos. Assim, garantimos o seu
        pleno desenvolvimento alinhado às
        exigências dos próximos anos. Outro
        ponto é a ampliação da nossa atividade
        para que possamos impactar cada vez
        mais talentos Brasil afora`
      },
      {
        id: 5,
        name: "Luiza Toledo Guntovitch",
        excerpt: "Gerente de Gente e Gestão",
        testimonial: `
        Gostaria que o Ismart continuasse realizando mais sonhos,
        com uma equipe referência em
        desenvolvimento de pessoas, com
        foco no aluno e causando ainda mais
        impacto positivo por meio do Ismart
        Online. Em termos de País, queremos
        deixar profissionais mais completos,
        que trabalhem por uma causa com
        que se identifiquem e vejam retorno
        no seu desenvolvimento ao mesmo
        tempo em que desenvolvem jovens.`
      }
    ],
    pratica: [
      {
        id: 1,
        name: "Gabrielli Fonseca de Oliveira",
        excerpt: "18 anos, estudante de Farmácia da Universidade de São Paulo",
        testimonial: `Você enfrentará desafios e terá
        de fazer sacrifícios. Você passará por
        dificuldades e momentos de provação.
        Mas saiba que tudo isso será para
        o seu crescimento pessoal. Ao fim,
        tudo valerá a pena e muitas portas
        serão abertas. Você amadurecerá
        muito. Para mim, o Ismart representa
        transformação.`,
        photo: "assets/images/gabrielli-trajetorias.png"
      },
      {
        id: 2,
        name: "Pedro Henrique C. Navarro",
        excerpt: "Estudante de Engenharia Química na Universidade de Notre Dame, nos Estados Unidos",
        testimonial: `Inspiração foi a palavra que
        mais permaneceu em minha mente,
        não só durante os primeiros meses
        no projeto, mas até hoje. Lembro
        que a cada canto que olhava
        encontrava pessoas incríveis, com
        histórias de vida inspiradoras,
        que haviam criado projetos
        sensacionais, ganhado diversas premiações e conquistado posições em algumas das melhores
        universidades do Brasil e do
        mundo. De repente, me vi em um
        universo infinito de oportunidades,
        e prometi a mim mesmo que tiraria o máximo de tudo aquilo – faria
        valer cada chance e me inspiraria
        ao máximo na história de todos os
        ismartanos que conhecia. Eu me
        sentia extremamente especial em
        fazer parte do mesmo programa
        que todos aqueles bolsistas, e sabia
        que era um privilégio enorme que
        jamais poderia desperdiçar ficando
        na zona de conforto depois de ter
        conquistado a oportunidade maior
        que era a bolsa no Ismart.
        Na escola pública nunca falamos muito sobre a importância de
        buscar oportunidades e inspiração
        ou de sonhar grande – geralmente
        as pessoas não acreditam que
        conquistas grandiosas podem vir
        de pessoas originárias do mesmo
        background social e econômico que
        nós, mas se há investimento através
        de oportunidades e nós aproveitamos,
        há retorno. Meus pais, Hamilton e Ana
        Paula, sempre me incentivaram muito
        nos estudos, especialmente minha
        mãe, que era professora de Português
        em escolas públicas e privadas.
        Sabendo da disparidade entre essas
        duas realidades, ela sempre me
        motivou muito a ter essa vontade de
        conquistar algo a mais a ir além das
        expectativas, independentemente de
        nossa situação financeira. Ela nunca
        poupou em comprar livros ou me
        ajudar com qualquer oportunidade
        acadêmica que encontrasse, e quando
        conheci o Ismart, não foi diferente.
        Meu sonho é garantir que eu
        adiante todas as oportunidades
        que tive até agora, e ver isso
        acontecendo aos poucos não
        tem preço. Quero continuar
        envolvido com projetos educacionais para, no futuro, ver
        os alunos superando todas as
        adversidades econômicas e sociais, conquistando bolsas para o
        Ismart e entrando nas melhores
        universidades do Brasil e do
        mundo`,
        photo: "assets/images/pedro-navarro.jpg"
      },
      {
        id: 3,
        name: "Miguel Alves",
        excerpt: "Estudante de Engenharia de Petróleo na Poli - USP",
        testimonial: `
        Entrei no Ismart em 2010,
        no Colégio Objetivo. O baque de
        perceber a diferença de ensino que
        estava tendo na escola pública e que
        teria agora em uma escola particular
        foi grande. Enquanto na primeira aula
        de Matemática nós estávamos tendo
        revisão de inequação, eu tinha que
        correr atrás do que o “x” significava,
        porque eu sequer havia tido equação.
        De cara eu sentia que não pertencia
        àquele lugar, e esse sentimento eu
        lembro nitidamente, assim como
        da resposta que tive de dar a mim
        mesmo: nunca mais vou sentir que não
        pertenço a algum lugar por um desafio
        que recebi. Abracei essa corrida
        e com a ajuda do colégio que me
        forneceu materiais antigos, entendi
        o que era equação, compreendi como
        funcionavam as inequações e alcancei
        nota máxima na primeira prova de
        Matemática. A matéria que mais me
        assustava se transformou na minha
        favorita. E a partir de então, tudo que
        me instigava, se tornava um gosto em
        superar. Continuei no Objetivo no
        Ensino médio. Escolhi Engenharia de
        Petróleo por ser o curso que abordava
        as matérias de que mais gostava: Física,
        Química, Matemática e Geografia.
        Passei na Poli-USP e trilhei em grupos
        de extensão, iniciação científica,
        centro acadêmico, até me encontrar
        na Enactus e me desenvolver ainda 
        mais, sempre abraçando o que me
        fazia seguir em frente: ser desafiado
        e superar. E todo esse caminho
        construiu alicerces para, durante o
        processo seletivo, eu lembrar de cada
        um desses tropeços, quedas e vezes
        que eu via as falhas como um aviso de
        não pertencimento. Eu mereço estar
        onde eu quiser; mesmo perdendo,
        estou ganhando, seja experiência,
        seja aprendizado. Esses valores, vão
        muito além da educação por si só;
        têm a ver com sentimentos que me
        construíram como cidadão, como
        engenheiro e como ser humano.`
      },
      {
        id: 4,
        name: " Isabela Regina J. de Moraes",
        excerpt: "17 anos, estudante do Colégio Objetivo, em São José dos Campos – SP",
        testimonial: `
        No meu primeiro ano de Ensino
        médio, por causa de um episódio
        pessoal, acabei contraindo distúrbio
        de ansiedade e foi nesse momento que
        a frase de que nós, ismartanos, somos
        uma família, se tornou real. Tanto
        meu analista1
        como os amigos que
        fiz durante os dois anos de Instituto
        foram os responsáveis por eu não
        ter desistido; eles me incentivavam
        e estavam ali comigo para tudo! Eu
        acredito que mais do que uma educação
        de qualidade, o Ismart me empoderou
        como cidadã. Graças ao Instituto eu
        consegui enxergar quem eu era e quais
        eram meus grandes sonhos. Quando
        cheguei na escola onde atualmente
        eu estudo, há quatro anos, eu era
        uma menina cheia de medos e sem
        nenhuma autoconfiança. Foi por meio
        de educação, oportunidades e grandes
        amigos que fiz no projeto, em especial
        os meus analistas, que pude perceber
        que sim, eu era capaz, capaz de mudar
        a minha realidade e o futuro que até
        então era predestinada a ter. Comecei
        no Instituto como um verdadeiro bebê,
        engatinhando, eu amava demais ir em
        todas as atividades, pois até então eu
        não tinha acesso a teatros, museus
        e oportunidades acadêmicas. Mais
        tarde eu comecei a participar do Uma
        Mão Lava a Outra como professora, e
        foi aí que percebi a minha paixão por
        educação e comecei a desenvolver a 
        oratória. Desde então eu participo de
        quase todas as atividades do Instituto
        em conjunto com outras instituições
        e, neste ano, estou fazendo meu
        primeiro projeto social com ajuda, é
        claro, do Ismart.`
      },
      {
        id: 5,
        name: "João Pedro de Oliveira",
        excerpt: "Graduado Ismart, engenheiro mecânico e trainee no Itaú BBA",
        testimonial: `“Eu tinha muita dificuldade
        em me disciplinar e estudar o que
        eu não gostava. Era uma criança
        muito inquieta e não conseguia me
        concentrar e ter autocontrole. Eu
        aprontava muito, e deixava uma
        impressão de menino malcriado entre
        os professores. No 4º ano eu conheci
        a professora Ana Cristina, muito
        querida pela turma e que tinha uma
        paciência sem fim comigo. Foi aí que
        me senti verdadeiramente cuidado, e
        decidi ouvir as advertências quando
        vinham dela. Percebi que meu
        comportamento era infantil, e fui
        aprendendo a ter autocontrole e tirar
        o melhor de mim.`,
        photo: "assets/images/joao-pedro-oliveira.jpg"
      },
    ],
    suporte: [
      {
        id: 1,
        name: "Maria Eduarda Machado",
        excerpt: "Bolsista em Belo Horizonte – MG",
        testimonial: `“Minha história com o Ismart é
        feliz. Eu amo o Ismart: os funcionários,
        meus colegas e as atividades, como
        rodas de conversa e cafés com
        profissional. Todo o meu primeiro
        ano no Instituto me fez crescer
        muito, me tornou mais confiante,
        e a oportunidade de estudar num
        colégio de excelência é indescritível.
        Eu gosto de aprender e o Ismart me
        proporciona todas as ferramentas
        para isso. Às vezes não acredito que
        estou tendo essa oportunidade. No
        início, estava eufórica e nervosa: tudo
        novo pra mim. Um pouco confusa
        também, já que o ensino médio é uma
        experiência totalmente diferente do
        que o fundamental. Mas, apesar do
        nervosismo de estar em uma escola
        nova em que eu conhecia um pouco
        mais de dez pessoas, tinha a sensação
        de que, com o meu esforço, esse
        período seria muito produtivo e minha
        vida mudaria para melhor. Eu sou de
        Brumadinho, então ficava alguns dias
        da semana na casa da minha bisavó,
        em Belo Horizonte, sentindo muita
        falta dos meus pais e do meu irmão,
        o que me chateava. Mas ir para minha
        casa, aturar o ônibus por duas horas
        e acordar no outro dia às quatro da 
        manhã não era fácil. Além disso, a
        adaptação na escola também foi
        difícil, com uma carga horária pesada
        e muitas atividades e provas toda
        semana, mas, acostumando com a
        rotina, isso ficou mais fácil. O que eu
        mais gosto no Ismart são as pessoas:
        meus melhores amigos também são
        bolsistas, e nós nos entendemos
        muito bem, já que nos ajudamos
        mutuamente, tanto no colégio, como
        na vida fora dele. O programa de
        orientação profissional está sendo
        fundamental para a minha escolha
        profissional: antes, eu tinha uma ideia
        vaga do que queria estudar, mas essa
        ideia foi trabalhada nas entrevistas e
        no Trabalho de Escolha Profissional
        (TEP) e hoje estou segura do curso
        a escolher e em que trabalhar, além
        de já ter ideias de faculdades que
        me interessam. Quero ser médica da
        família no SUS.`,
        photo: "assets/images/maria-eduarda-machado.jpg"
      },
    ],
    chegando: [
      {
        id: 1,
        name: "João Pedro de Oliveira",
        excerpt: "Graduado Ismart, engenheiro mecânico e trainee no Itaú BBA",
        testimonial: `Aproveite ao máximo todas as atividades que ele propõe. Procure
        se envolver com os colegas e os analistas e coordenadores, pois eles vão te
        entender e ajudar nessa nada fácil e super empolgante jornada`,
        photo: "assets/images/joao-pedro-oliveira.jpg"
      },
      {
        id: 2,
        name: "Gabrielli Fonseca de Oliveira",
        excerpt: "Universitária Ismart do 1º ano de Farmácia – USP",
        testimonial: `Você enfrentará desafios e terá de fazer sacrifícios. Você passará
        por dificuldades e momentos de provação. Mas saiba que tudo isso será
        para o seu crescimento pessoal. Ao fim, tudo valerá a pena, muitas portas
        serão abertas e você amadurecerá muito`,
        photo: "assets/images/gabrielli-fonseca.jpg"
      },
      {
        id: 3,
        name: "Larissa Fabião",
        excerpt: "Universitária Ismart do curso de Sistema de Informação, na USP",
        testimonial: `Aproveitem ao máximo a oportunidade que estão tendo de ingressar
        nessa comunidade. Participem de todas as atividades possíveis, conversem com o
        máximo de alunos da comunidade, sonhem grande e se dediquem para alcançar os
        sonhos que vão acabar surgindo a partir dessa nova comunidade`
      },
      {
        id: 4,
        name: "Maria Eduarda",
        excerpt: "Bolsista em Belo Horizonte – MG",
        testimonial: `Se você gosta de estudar e acredita que a educação pode impulsionar
        sua vida, mas, mesmo assim, não tem os recursos para estudar nas melhores
        escolas do Brasil, com todo o material necessário e infraestrutura, venha
        para o Ismart! Com bolsa numa grande escola, suporte psicológico e outros
        benefícios, a única coisa que o aluno precisa fazer é se esforçar e estudar para
        chegar aonde ele quiser!`
      },
      {
        id: 5,
        name: "Isabela Regina",
        excerpt: "Bolsista Ismart em São José dos Campos – SP",
        testimonial: `Sonhe! Sonhe o mais alto que quiser; somos capazes e podemos tudo.
        Batalhe por todos os seus objetivos e nunca desista, mesmo que seja difícil.
        Você é forte e só de estar aqui já está lutando!`
      },
      {
        id: 6,
        name: "Pedro Navarro",
        excerpt: "Universitário Ismart de Engenharia Química na Universidade de Notre Dame, nos EUA",
        testimonial: `Aproveite cada oportunidade que surgir, não importa o quão louca ou
        impossível de alcançar ela pareça. Faça amizade com o máximo de pessoas
        possíveis e busque inspiração com a história de cada uma. Não desperdice
        nenhum segundo no projeto, procure crescer sempre, pois o tempo passa
        rápido, e é incrível como o Ismart nos desenvolve em tão pouco tempo.
        Não tenha medo de falhar algumas vezes ou não conquistar algumas das
        oportunidades que encontrar pela frente – ter resiliência é importante, e
        como minha mãe sempre fala, ‘tudo se ajeita’, e de uma forma ou de outra,
        as melhores oportunidades para você irão aparecer. Procure passar adiante
        tudo que receber, e garantir que suas conquistas sejam a de outros também –
        gratidão é o melhor combustível possível, e dentro do Ismart você se torna uma
        pessoa com poder imenso de transformar a realidade de outros ao seu redor`
      },
      {
        id: 7,
        name: "Leonardo de Castro Coelho",
        excerpt: "Graduado em Direito pela Universidade Mackenzie",
        testimonial: `Os momentos difíceis fazem parte do seu crescimento e você não está
        sozinho(a) nessa jornada. O Ismart e sua comunidade estão aqui para apoiálo(a). Você eventualmente irá superar essas etapas com sucesso.`
      },
      {
        id: 8,
        name: "Miguel Alves",
        excerpt: "Universitário Ismart de Engenharia de Petróleo na Poli – USP",
        testimonial: `Eu aprendi a sonhar grande dentro do Ismart. Ainda mais importante do
        que isso, eu compreendi que era capaz de alcançar esses sonhos. Por isso, só
        tenho a dizer uma coisa: sonhe muito grande, alcance o infinito nesse sonho, e
        carregue bem forte consigo a crença no seu próprio potencial. A oportunidade
        você já tem, a capacidade também, nenhum sonho deve ser menor do que
        você mesmo. Hora de concretizar!`
      },
    ],
    ead: [
      {
        id: 1,
        name: "Gabrielli Fonseca de Oliveira",
        excerpt: "Participou do processo seletivo do Ismart em 2013 e iniciou sua trajetória no Ismart participando da primeira turma do programa Ismart Online",
        testimonial: `Foi somente com a jornada do Ismart Online que eu expandi minha visão de mundo sobre me relaciono com a sociedade e posso criar minha própria história, independente de padrões socioeconômicos relacionados à conquista de oportunidades`,
        photo: "assets/images/gabrielli-fonseca.jpg"
      },
      {
        id: 2,
        name: "Letícia Nunes de Campos",
        excerpt: "3o ano Ensino médio - Ismart Online",
        testimonial: ` Letícia de 2016 não tinha muita perspectiva de vida e com o Ismart Online, eu comecei a entender que eu não precisava me limitar, que eu poderia ir muito mais além e escolher os rumos da minha vida. Já no primeiro ano, eu tive que solucionar um problema presente na sociedade e foi aí que o meu caminho cruzou com o do Lucas Nicascio, na época, universitário Ismart e ele mudou completamente a minha forma de enxergar a vida, além de ajudar a buscar novas oportunidades e avaliar perspectivas de carreiras. E você começa a entender que o Ismart Online não é você e uma plataforma apenas, mas é você e toda uma família que se forma. A gente compartilha, aprende, ri, chora e se ajuda na vida, no Ismart, na escola e em tudo. O Ismart Online ajuda com conteúdos, mas para além disso, ele amplia horizontes. O Ismart é transformação social.`
      },
    ],
    universidade: [
      {
        id: 1,
        name: "Miguel Alves",
        excerpt: "Universitário Ismart do curso de Engenharia de Petróleo na Poli - USP",
        testimonial: `O que mais me marcou no Ismart, sem sombra de dúvida, foi a rede, seja por meio das analistas e gerentes, seja por meio dos bolsistas e agora Alumni. Sinto de fato que tenho uma família. Aqui conheci pessoas incríveis, pelas quais sinto profunda admiração pessoal e profissional, que, são exemplos que quero manter por perto, sempre. Participei em meu primeiro ano do Coaching, que transformou minha carreira no mundo acadêmico. Consegui identificar os possíveis obstáculos e onde gostaria de estar me desafiando.`
      },
      {
        id: 2,
        name: "Pedro Henrique C. Navarro",
        excerpt: "Universitário Ismart de Engenharia Química na Universidade de Notre Dame, nos EUA",
        testimonial: `Quando entrei no Ismart, não sabia exatamente como fazia para ingressar em uma universidade. Tudo que lembrava era das palavras da minha mãe, de que eu tinha que
        entrar em uma federal. Logo nos primeiros dois meses no projeto, recebi o convite para uma palestra sobre a University of Notre Dame com alguns ex-alunos no escritório do Ismart em São Paulo. Fiquei maravilhado ao ver as fotos daquele campus e ouvir as histórias de ex-
        alunos brasileiros e americanos sobre o quão enriquecedora tinham sido suas experiências. No fim da palestra, os alunos compartilharam uma oportunidade de um programa de verão de duas semanas na universidade, o iLED, em que teríamos aulas diárias nos diversos colleges com alunos de outros países. Sempre que deparava com uma oportunidade diferente, minha mãe sempre dizia “por que não?”, e foi o que fiz. Enviei minha application, e alguns meses depois eu estava entrando em um avião pela primeira vez na vida rumo
        a uma das melhores universidades dos EUA. A experiência abriu minha mente a novas possibilidades e tirou qualquer medo relacionado ao sonho grande de estudar fora. Apesar do iLED ter sido o motivador principal para eu querer estudar fora, o que deu uma faísca ainda maior foi um vídeo que o Ismart nos mostrou quando os bolsistas foram ao Colégio Santo Américo assinar o contrato da bolsa. Lembrar do vídeo e ter a experiência que tive no iLED foi suficiente para eu definir qual seria o objetivo principal pelo qual mais me dedicaria
        nos próximos anos no Ismart. Graças a todo o networking do Ismart, também pude participar de alguns programas que oferecerem mentoria e apoio financeiro para o
        processo de application ao longo do Ensino médio e, no 3° ano, tive a chance de participar de outros programas de verão em Stanford e UC Berkeley. Essas oportunidades foram
        fundamentais para que eu realizasse minha application para os EUA
        `
      },
      {
        id: 3,
        name: "Miguel Alves",
        excerpt: "Universitário Ismart do curso de Engenharia de Petróleo na Poli - USP",
        testimonial: `Minha primeira experiência profissional foi o estágio de férias na Odebrecht Oil&Gas, no Rio de Janeiro, em julho de 2017. A experiência de morar em outro estado sozinho foi um pouco assustadora, mas me aproximei da rede do Rio, seja com os universitários, seja com o ensino básico, por meio do Uma Mão Lava a Outra. Foi como ter uma família lá, mesmo que eu tenha acabado de conhecer. A experiência profissional foi desafiadora, era a primeira vez que eu tinha mais do que notas para me avaliar. A todo momento eu era desafiado, em comunicação, aprendendo algo novo, montando planejamento. Trabalhei na área de Inteligência de Mercado da companhia, estudando plataformas de perfuração e produção, campos de produção de petróleo e contextos globais envolvendo a geopolítica
        do petróleo. Pela primeira vez, senti meu curso saindo da teoria – uma experiência super motivadora. Realizei um segundo estágio de férias na mesma empresa, agora na área de
        Controladoria & Finanças, entendo um pouco melhor do fluxo de caixa da produção de petróleo. E, em 2019, iniciei estágio regular na Ambev em Trade Marketing, desenvolvendo e aprendendo mais sobre logística, estratégia de marketing e inteligência de Mercado. Ainda não tenho a certeza dos passos que darei e do caminho a trilhar, mas quero impactar
        pessoas ao meu redor da mesma maneira como o Ismart me impactou.
        `
      },
    ]
  }

  public getAll(){
    return this.all;
  }

  public getByPage( page: string ) {
    return this.all[page];
  }

  public navigatePrev(page){
    const all = this.getByPage(page);
    const currentIndex = all.findIndex( testimonial => testimonial.id === this._testimonial.getValue().id );
    const testimonial = currentIndex > 0 ? all[ currentIndex - 1 ] : all[ all.length - 1 ];
    this._testimonial.next(testimonial);
  }

  public navigateNext(page){
    const all = this.getByPage(page);
    const currentIndex = all.findIndex( testimonial => testimonial.id === this._testimonial.getValue().id );
    const testimonial = currentIndex + 1 < all.length ? all[ currentIndex + 1 ] : all[0];
    this._testimonial.next(testimonial);
  }
}
