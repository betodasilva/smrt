(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/accordion/accordion.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/accordion/accordion.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" id=\"accordionExample\">\n    <div class=\"accordion__card\" *ngFor=\"let accordion of accordiondata; let i = index;\">\n        <div class=\"accordion__card--header\" [attr.id]=\"'heading-'+ i\">\n            <h2 class=\"mb-0\">\n                <button class=\"btn btn-link accordion__card--link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse-'+ i\" [attr.aria-expanded]=\"i === 0? true : false\" [attr.aria-controls]=\"'#collapse-'+ i\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" class=\"plus\">\n                    <path fill=\"#028ED4\" fill-rule=\"evenodd\" d=\"M10 7.879L17.425.454a1.5 1.5 0 0 1 2.12 2.121L12.122 10l7.425 7.425a1.5 1.5 0 0 1-2.121 2.12L10 12.122l-7.425 7.425a1.5 1.5 0 0 1-2.12-2.121L7.878 10 .454 2.575A1.5 1.5 0 0 1 2.575.455L10 7.878z\"/>\n                </svg> {{ accordion.title }}\n                </button>\n            </h2>\n        </div>\n        \n        <div [attr.id]=\"'collapse-'+ i\" class=\"collapse show\" [ngClass]=\"{'show': i === 0 }\" [attr.aria-labelledby]=\"'heading-'+ i\" data-parent=\"#accordionExample\">\n            <div class=\"accordion__card--body\">\n                <div [innerHTML]=\"accordion.content\"></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chapter-content-all/chapter-content-all.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chapter-content-all/chapter-content-all.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"chapter-content\">\n    <div\n        #floatContainer \n        class=\"fix-scroll\" \n        [class.fixed]=\"isFloatContainerFixed\">\n        <ul \n            class=\"share\">\n            <li class=\"share--item\">\n                <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://google.com\" target=\"_blank\" class=\"share--link\">\n                    <i class=\"fa fa-facebook-f\"></i>\n                </a>\n            </li>\n            <li class=\"share--item\">\n                <a href=\"#\" class=\"share--link\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n            </li>\n            <li class=\"share--item\">\n                <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=http://google.com&title=Mensagem%20do%20Conselho&source=Ismart\" target=\"_blank\" class=\"share--link\">\n                    <i class=\"fa fa-linkedin\"></i>\n                </a>\n            </li>\n        </ul>\n        <!-- Sidebar -->\n        <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <span class=\"tag\">Contato</span>\n                <h2 class=\"chapter-content__title\">Espaço Talento deu início à transformação</h2>\n                <h3 class=\"chapter-content__subtitle\">Estudantes como João Pedro de Oliveira tiveram a chance de revelar seus talentos</h3>\n                <p>A história de João Pedro de Oliveira, um carioca de 22 anos, se confunde com a do Ismart. Estudante de escola pública, morador do conjunto habitacional Cruzada de São Sebastião, uma favela vertical em pleno Leblon, zona sul do Rio de Janeiro, ele foi o único aprovado em sua escola – uma grande felicidade para si e sua família, apesar da insegurança gerada pelo novo desafio. O jovem fez parte do primeiro projeto desenvolvido pelo Ismart, no Rio de Janeiro, o Espaço Talento, cujo objetivo era ajudar os alunos a ingressarem em escolas técnicas federais.</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <figure class=\"chapter-content__img\">\n                <img src=\"assets/images/chapter-center.jpg\" alt=\"\">\n                <div class=\"container\">\n                    <blockquote class=\"blockquote__image blockquote__quote\">\"Conheci o Ismart aos 6 anos de idade, no fim do primeiro ano do Ensino Fundamental I, quando uma equipe do instituto foi a minha escola, apresentou o projeto e aplicou uma prova de seleção\"\n                    <cite>João Pedro de Oliveira, 22, Ex-Ismart</cite>\n                    </blockquote>\n                </div>\n            </figure>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>Em 1999, o Ismart nasceu do sonho de ver jovens com grandes habilidades, vindos de famílias de baixa renda e escola pública, ingressar em universidades de excelência, no Brasil e no exterior. A proposta era não só dar oportunidade de transformar vidas, mas também contribuir para a transformação do País. Como o acesso ao ensino superior era muito restrito, em geral favorecendo estudantes que cursavam o Ensino Médio em escolas particulares, decidiu-se criar um projeto que favorecesse o desenvolvimento dos bolsistas antes do vestibular.</p>\n                <p>Assim surgiu Espaço Talento, do qual o João Pedro fez parte. O projeto selecionava os alunos desde muito novos, ainda no Ensino Fundamental I, e oferecia, no contraturno da escola regular, atividades de desenvolvimento ligadas aos interesses pessoais e aulas de Português e de Matemática. Os alunos eram atendidos em pequenos grupos na sede do Ismart, no Rio de Janeiro, e cada turma era orientada por uma psicopedagoga. Ao final do Ensino Fundamental II, eles faziam o exame de seleção para ingressar em uma escola particular. “Eu fui estudar no Colégio Rana Cosac, uma escola pequena na Urca. De manhã, tínhamos atividades e oficinas em grupo na sede do instituto e comigo estavam diversas crianças de origem humilde com muito potencial. Eu lembro que achava tudo muito divertido. Eu tinha acesso a diversos brinquedos, como Lego, e jogos de tabuleiro. Nas oficinas, aprendi sobre mitologia grega, xadrez, física, arte... e fiz amizade com pessoas incríveis, algumas com as quais convivo até hoje. Foi aí que eu realmente conheci o Ismart”, relembra João Pedro.</p>\n                <blockquote class=\"blockquote__quote blockquote__white\">\"Eu fui estudar no Colégio Rana Cosac, uma escola pequena na Urca. De manhã, tínhamos atividades e oficinas em grupo na sede do instituto e comigo estavam diversas crianças de origem humilde com muito potencial.\"\n                <cite>João Pedro de Oliveira, 22, Ex-Ismart</cite>\n                </blockquote>\n            </div>\n        </div>\n        <div class=\"row\">\n            <figure class=\"chapter-content__img\">\n                <img src=\"assets/images/content.jpg\" alt=\"\">  \n                <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                    <figcaption><img src=\"assets/images/camera.svg\" alt=\"\"> Alunos do ensino médio</figcaption>\n                </div>\n            </figure>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>De 1999 até o início de 2004, o Espaço Talento foi o principal projeto do Ismart. Em 2004, quando o Instituto transferiu sua sede para São Paulo, um novo modelo de gestão foi implementado com a criação de projetos como o Alicerce e o Bolsa Talento. O foco principal passou a ser os programas de apoio a jovens do Ensino Fundamental II, sem deixar de acompanhar os bolsistas egressos do Espaço Talento, como João Pedro.  Nos últimos anos, a essas duas iniciativas somaram-se outros três projetos: o Ismart Online, Ensino Superior e o Alumni.</p>\n                <p>Para a diretora-executiva do Ismart, Mariana Rego Monteiro, todo esse trabalho representa vinte anos de identificação de talentos acadêmicos e incentivo ao esforço e à dedicação, inspirando jovens a sonharem grande, realizarem seus sonhos e fazerem a diferença!</p>\n                <blockquote class=\"blockquote__big\">\"São vinte anos desenvolvendo a melhor forma de encontrar jovens talentos de baixa renda, os melhores programas para atender a cada um dos nossos alunos e famílias Ismart e buscando as parcerias mais condizentes com nossos valores e objetivos.\"\n                <cite>Mariana Rego Monteiro | Diretora-executiva do Ismart</cite>\n                </blockquote>\n\n                <p>Acrescenta ainda que “Há vinte anos o Ismart encontra jovens que querem escrever sua própria história e transformar suas realidades, com potencial de promover no Brasil e no mundo um impacto extremamente positivo. O Ismart trabalha diariamente para que possamos continuar crescendo e, ano após ano, oferecer a mais jovens a oportunidade de sonhar mais alto e chegar mais longe.\"</p>\n\n                <h3 class=\"chapter-content__title--section\">Determinação</h3>\n                <p>Ao longo da graduação, João Pedro participou de atividades de voluntariado para o Ismart, além de desenvolver projeto social para a sua comunidade. “Já participei como mentor para o 3º ano do Ensino Médio, tanto de um aluno do Ismart presencial como de um grupo do Ismart Online. Sempre senti necessidade de retribuir ao Instituto o investimento que ele fez em mim. Na ocasião das mentorias, vi que o que eu podia agregar de maior valor era ensinar jovens que passavam pelas mesmas dificuldades e desafios que eu já tinha vivido anteriormente”. Hoje, formado em Engenharia Mecânica e de Automóvel, no Instituto Militar de Engenharia, João Pedro foi aprovado como trainee no Itaú BBA.</p>\n\n                <figure class=\"chapter-content__img\">\n                    <img src=\"assets/images/chapter-center.jpg\" alt=\"\">\n                    <figcaption><img src=\"assets/images/camera.svg\" alt=\"\"> João Pedro fala sobre sua jornada no Ismart</figcaption>\n                </figure>\n\n                <h3 class=\"chapter-content__title--section\">Suporte ao alcance dos jovens</h3>\n                <!-- Accordion -->\n                <app-accordion [accordiondata]=\"accordionContent\"></app-accordion>\n\n                <p>“O impacto do Ismart nos últimos 20 anos no Brasil reflete a certeza de que estamos contribuindo para formar cidadãos conscientes e preparados para lidar com os desafios do País. Se refletirmos sobre nossa crença de que os bons exemplos têm efeito multiplicador, que iniciamos em 1999 com apenas seis alunos e que nestes 20 anos tivemos mais de 4.800 alunos impactados pelos projetos que hoje estão pelo Brasil e pelo mundo, conseguimos visualizar o impacto exponencial do Instituto”, ressalta Celina Seara da Costa Pinto, gerente Praça Rio/BH.</p>\n\n                <h3 class=\"chapter-content__title--section\">Envolvimento</h3>\n                <p>O trabalho do Ismart se dá com a colaboração de uma rede de parceiros institucionais – apoiadores financeiros, escolas e secretarias de educação, –, além da equipe interna, para desenvolvimento dos bolsistas e educadores. É essa qualificada rede que permite ao Ismart identificar jovens talentosos de baixa renda ao apoiar a divulgação dos projetos desenvolvidos pelo Instituto. </p>\n\n                <h3 class=\"chapter-content__title--section\">Principais públicos estratégicos</h3>\n                <ul class=\"list\">\n                    <li>Estudantes talentosos de baixa renda (potencial bolsista)</li>\n                    <li>Bolsistas Ismart</li>\n                    <li>Familiares responsáveis pelo bolsista Ismart</li>\n                    <li>Secretarias de Educação</li>\n                    <li>Educador da rede pública</li>\n                    <li>Dirigente de escola particular de excelência</li>\n                    <li>Apoiadores financeiros</li>\n                </ul>\n            </div>  \n        </div>\n    </div>\n</article>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chapter-content/chapter-content.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chapter-content/chapter-content.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article \n    class=\"chapter-content\"\n    #articleContainer>\n    <div \n        class=\"fix-scroll\"\n        [class.fixed]=\"isFloatContainerFixed\"\n        #floatContainer>\n        <ul class=\"share\">\n            <li class=\"share--item\">\n                <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://google.com\" target=\"_blank\" class=\"share--link\">\n                    <i class=\"fa fa-facebook-f\"></i>\n                </a>\n            </li>\n            <li class=\"share--item\">\n                <a href=\"#\" class=\"share--link\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n            </li>\n            <li class=\"share--item\">\n                <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=http://google.com&title=Mensagem%20do%20Conselho&source=Ismart\" target=\"_blank\" class=\"share--link\">\n                    <i class=\"fa fa-linkedin\"></i>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>Nós, do Ismart, sempre acreditamos na educação como força transformadora da sociedade. Investir na área, portanto, representa a forma mais eficaz de contribuir para o desenvolvimento do Brasil. Por isso, ao longo dos últimos anos, buscamos participar da construção não só de uma sociedade mais justa, mas também mais eficiente, oferecendo oportunidade para jovens com muito talento, muita garra e pouco poder aquisitivo.</p>\n                <p>Nosso objetivo sempre foi transformar esse potencial em realidade e, ao completarmos 20 anos, nos orgulhamos de ter beneficiado 4.800 jovens. Desde o início do trabalho, esse foi o principal propósito, pois temos a convicção de que é possível encontrar diferentes formas de talento em todas as classes sociais: basta oferecer oportunidade e estimular cada um a dar o máximo de si para alcançar os resultados desejados.</p>\n                <p>Sonhar grande e transformar esse sonho em realidade são o melhor caminho para o sucesso pessoal e para fazer a diferença na sociedade. Os sonhos sem ação, porém, não levam a lugar nenhum. É preciso coragem e resiliência para, dia após dia, trabalhar, planejar, querer muito e fazer escolhas para atingir o objetivo e não perder o foco. E é isso que propomos aos bolsistas.</p>\n                <p>Nosso trabalho começa no momento em que um jovem se inscreve para o processo seletivo. Funcionamos como um ecossistema do qual fazem parte órgãos públicos, por meio das secretarias de educação e seus professores, as escolas parceiras e toda a nossa equipe Ismart. Assim, a trajetória de um bolsista tem início nas salas de aula das escolas públicas, onde educadores identificam jovens com elevadas habilidades e os orientam a participar do processo seletivo. Rigoroso, ele visa avaliar, conhecer, entender, selecionar e engajar os futuros bolsistas que, em seguida, serão encaminhados às escolas parceiras – outra ponta desse ecossistema.</p>\n                <blockquote class=\"blockquote__simple blockquote__white\">Sonhar grande e transformar esse sonho em realidade são o melhor caminho para o sucesso pessoal e para fazer a diferença na sociedade.</blockquote>\n            </div>\n        </div>\n        <div class=\"row\">\n            <figure class=\"chapter-content__img\">\n                <img src=\"assets/images/chapter-center.jpg\" alt=\"\">\n                <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                    <figcaption><img src=\"assets/images/camera.svg\" alt=\"\">Giovanna, Jean, Carlos e Lucca Muliterno</figcaption>\n                </div>\n            </figure>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>Nesses 20 anos, se obtivemos níveis de excelência na formação e capacitação de jovens talentos foi porque contamos com grandes escolas parceiras, cujo papel fundamental é receber os alunos bolsistas, desenvolvê-los por meio de uma educação de excelência e ajudá-los em sua adaptação. Toda essa organização envolve ainda a dedicação da equipe Ismart, que entende que é preciso ter foco, metas estabelecidas para obter resultados excepcionais, além de ofertar suporte psicológico e emocional.</p>\n                <p>Aprendemos muito nesses anos, incorporamos valores fundamentais, como a importância de desenvolver as competências socioemocionais paralelamente à formação acadêmica e, assim, dar suporte aos bolsistas para sonhar cada vez mais e mais alto.</p>\n                <p>Ao constatarmos que a tecnologia digital é uma realidade e vem provocando grandes transformações na sociedade, introduzimos a educação a distância ao nosso modelo, o que tem permitido ampliar a capacidade de atender jovens talentos, além do limite físico.</p>\n                <p>Ao completarmos duas décadas, temos já os primeiros jovens formados pelo Ismart Online, o que nos motiva a continuar nesse caminho, investindo no mundo digital e na possibilidade de multiplicar a capacidade de atendimento. Outro objetivo para os próximos anos é manter a participação, conexão e atuação de ex-bolsistas em nossas atividades. Esse é o desafio do grupo Alumni: criar uma rede de apoio para os jovens que estão ingressando em nossos projetos, mostrar a eles exemplos de pessoas que, por meio do esforço, conseguiram mudar de vida e estão atuando e mudando a sociedade.</p>\n                <p>Com base nessa bem-sucedida trajetória, pedimos aos bolsistas, aos parceiros e à equipe do Ismart que nunca deixem de ir atrás dos seus sonhos!</p>\n                <blockquote class=\"blockquote__simple blockquote__white\">Ao constatarmos que a tecnologia digital é uma realidade e vem provocando grandes transformações na sociedade, introduzimos a educação a distância ao nosso modelo, o que tem permitido ampliar a capacidade de atender jovens talentos, além do limite físico. </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"gallery\">\n            <div class=\"row\">\n                <div class=\"col-md-3 offset-md-3\">\n                    <div class=\"gallery__item\">\n                        <img src=\"assets/images/signature.png\" alt=\"\" class=\"img-fluid\">\n                        <p>Claudio de Moura Castro</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"gallery__item\">\n                        <img src=\"assets/images/signature.png\" alt=\"\" class=\"img-fluid\">\n                        <p>Juan Manuel Vergara Galvis</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 offset-md-3\">\n                    <div class=\"gallery__item\">\n                        <img src=\"assets/images/signature.png\" alt=\"\" class=\"img-fluid\">\n                        <p>Marcel Herrmann Telles</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"gallery__item\">\n                        <img src=\"assets/images/signature.png\" alt=\"\" class=\"img-fluid\">\n                        <p>Vicente Falconi Campos</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n<div class=\"container\">\n    <hr>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chapter-hat/chapter-hat.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chapter-hat/chapter-hat.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter-hat\" [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"chapter-hat__title\">\n                    <h2>{{ data.title }}</h2>\n                    <h1>{{ data.subtitle }}</h1>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chapters/chapters.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chapters/chapters.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"chapters\">\n\t<div class=\"container\">\n\t\t<div class=\"header__chapters--top\">\n\t\t\t<h3 class=\"chapters__title\">{{ 'CHAPTERS.TITLE' | translate }}</h3>\n\t\t\t<button type=\"button\" class=\"btn chapters__hide\" aria-label=\"Fechar\" (click)=\"fecharModal()\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"row no-gutters chapters__list\">\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/01-mensagem-do-conselho']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t01.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.01' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/02-missao-visao-valores']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t02.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.02' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t03.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.03' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/04-trajetorias-ismart-contato']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.04' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.05' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.06' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.07' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.08' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.09' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.10' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t04. Trajetórias Ismart\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.11' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/05-parceiros-ismart']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t05.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.12' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/06-horizonte']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t06.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.13' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/07-manifesto']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t07.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.14' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t08.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.15' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/09-lista-parceiros']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t09.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.16' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-12 col-md-3 chapters__item\">\n\t\t\t\t<a [routerLink]=\"['/chapter-intern-simple']\" (click)=\"fecharModal()\">\n\t\t\t\t\t<figure class=\"chapters__item--figure\">\n\t\t\t\t\t\t<img src=\"assets/images/card.jpg\" alt=\"\" class=\"chapters__item--image\">\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"chapters__item--content\">\n\t\t\t\t\t\t<span class=\"chapters__item--number\">\n\t\t\t\t\t\t\t10.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h4 class=\"chapters__item--title\">\n\t\t\t\t\t\t\t{{ 'CHAPTERS.17' | translate }}\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/float-container/float-container.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/float-container/float-container.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n\tclass=\"float-container\"\n\t[class.fixed]=\"isFloatContainerFixed\"\n\t#floatContainer>\n\t<ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n\t<div class=\"container\">\n\t\t<div class=\"footer__content\">\n\t\t\t<div class=\"row justify-content-between align-items-center\">\n\t\t\t\t<div class=\"col-12 col-md-2\">\n\t\t\t\t\t<div class=\"footer__brand\">\n\t\t\t\t\t\t<a [routerLink]=\"['/home']\">\n\t\t\t\t\t\t\t<img src=\"assets/images/logo-footer.svg\" alt=\"\" class=\"footer__brand--image\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-8\">\n\t\t\t\t\t<ul class=\"footer__nav\">\n\t\t\t\t\t\t<li class=\"footer__nav--item\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/home']\" class=\"footer__nav--link\">{{ 'NAV.HOME' | translate }}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"footer__nav--item\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/download']\" class=\"footer__nav--link\">{{ 'NAV.DOWNLOAD' | translate }}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"footer__nav--item\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/versoes']\" class=\"footer__nav--link\">{{ 'NAV.VERSIONS' | translate }}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"footer__nav--item\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/sobre']\" class=\"footer__nav--link\">{{ 'NAV.ABOUT' | translate }}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"footer__nav--item\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/contato']\" class=\"footer__nav--link\">{{ 'NAV.CONTACT' | translate }}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-2\">\n\t\t\t\t\t<ul class=\"footer__social\">\n\t\t\t\t\t\t<li class=\"footer__social--item\">\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/ismart.oficial/\" target=\"_blank\" class=\"footer__social--link\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-f\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"footer__social--item\">\n\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/ismart.oficial/\" target=\"_blank\" class=\"footer__social--link\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"footer__social--item\">\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/company/instituto-ismart/\" target=\"_blank\" class=\"footer__social--link\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t</div>\n\t\t<div class=\"footer__helper\">\n\t\t\t<div class=\"row justify-content-between align-items-center\">\n\t\t\t\t<div class=\"col-12 col-md-4\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a [routerLink]=\"['/termos']\">{{ 'FOOTER.TERMS' | translate }}</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-4 text-center\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t{{ 'FOOTER.COPYRIGHT' | translate }}\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-4 text-right\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBy\n\t\t\t\t\t\t<a href=\"http://weef.com.br\" target=\"_blank\">Weef</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header\n\t#header\n\t[ngClass]=\"{\n\t\t'header': true,\n\t\t'chapters-opened': hasChaptersOpened,\n\t\t'menu__open': hasMenuOpened,\n\t\t'menu__close': !hasMenuOpened\n\t}\"\n\t[ngStyle]=\"headerStyle\"\n\t>\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-between align-items-center\">\n\t\t\t<div class=\"col-4 col-xs-3\">\n\t\t\t\t<button class=\"header__button header__button--chapters\" (click)=\"toggle()\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"header__button--icon\">\n\t\t\t\t\t\t<path id=\"a\" d=\"M6.5.5H1.25C.8.5.5.8.5 1.25V6.5c0 .45.3.75.75.75H6.5c.45 0 .75-.3.75-.75V1.25C7.25.8 6.95.5 6.5.5zm-.75 5.25H2V2h3.75v3.75zm9-5.25H9.5c-.45 0-.75.3-.75.75V6.5c0 .45.3.75.75.75h5.25c.45 0 .75-.3.75-.75V1.25c0-.45-.3-.75-.75-.75zM14 5.75h-3.75V2H14v3.75zm.75 3H9.5c-.45 0-.75.3-.75.75v5.25c0 .45.3.75.75.75h5.25c.45 0 .75-.3.75-.75V9.5c0-.45-.3-.75-.75-.75zM14 14h-3.75v-3.75H14V14zM6.5 8.75H1.25c-.45 0-.75.3-.75.75v5.25c0 .45.3.75.75.75H6.5c.45 0 .75-.3.75-.75V9.5c0-.45-.3-.75-.75-.75zM5.75 14H2v-3.75h3.75V14z\"/>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<span class=\"header__button--text\">{{ 'HEADER.BUTTONS.CHAPTERS' | translate }}</span>\n\t\t\t\t</button>\n\t\t\t\t<div class=\"header__chapters\">\n\t\t\t\t\t<app-chapters *ngIf=\"hasChaptersOpened\" (onCloseChapters)=\"toggle($event)\"></app-chapters>\n\t\t\t\t</div>\n\t\t\t\t<button \n\t\t\t\t\tclass=\"header__button\"\n\t\t\t\t\t(click)=\"onAvailableLanguageClick()\">\n\t\t\t\t\t\t<img src=\"assets/images/globe.svg\" \n\t\t\t\t\t\t\talt=\"\" \n\t\t\t\t\t\t\tclass=\"header__button--icon\">\n\t\t\t\t\t{{ availableLanguage.split('-')[0] }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-4 col-xs-6 text-center\">\n\t\t\t\t<a [routerLink]=\"['/home']\">\n\t\t\t\t\t<div class=\"header__title\">\n\t\t\t\t\t\t<img src=\"assets/images/logo-header.svg\" alt=\"\" class=\"header__title--image\">\n\t\t\t\t\t\t<h1 class=\"header__title--excerpt\">{{ 'HEADER.EXCERPT' | translate }}</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-4 col-xs-3 text-right\">\n\t\t\t\t<button class=\"header__toggle\" (click)=\"toggleMenu()\">\n\t\t\t\t\t<span class=\"header__toggle--text\">{{ 'HEADER.BUTTONS.MENU' | translate }}</span>\n\t\t\t\t\t<div class=\"header__toggle--icon\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-menu (onCloseMenu)=\"toggleMenu()\"></app-menu>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n    <button class=\"menu__toggle\" (click)=\"fecharMenu()\">\n        <span class=\"menu__toggle--text\">{{ 'HEADER.BUTTONS.MENU' | translate }}</span>\n        <div class=\"menu__toggle--icon\">\n            <span></span>\n            <span></span>\n        </div>\n    </button>\n    <ul class=\"menu__list\">\n        <li class=\"menu__item\">\n            <a [routerLink]=\"['/home']\" (click)=\"fecharMenu()\">\n                <img src=\"assets/images/logo-footer.svg\" alt=\"\" class=\"menu__item--brand\">\n            </a>\n        </li>\n        <li class=\"menu__item\">\n            <a href=\"\" class=\"menu__link menu__link--strong\">Relatório de atividades 2018-2019</a>\n        </li>\n        <li class=\"menu__item\">\n            <a href=\"\" class=\"menu__link\">Página inicial</a>\n        </li>\n        <li class=\"menu__item\">\n            <a href=\"\" class=\"menu__link\">Download do Relatório 2018-2019</a>\n        </li>\n        <li class=\"menu__item\">\n            <a href=\"\" class=\"menu__link\">Versões anteriores</a>\n        </li>\n        <li class=\"menu__item\">\n            <a href=\"\" class=\"menu__link\">Sobre a Ismart</a>\n        </li>\n    </ul>\n    <ul class=\"menu__language\">\n        <li \n            class=\"menu__language--item\"\n            *ngFor=\"let lang of translate.getLangs()\"\n            [class.menu__language--active]=\"translate.currentLang === lang\"\n            (click)=\"changeLanguage(lang)\">\n            {{ lang.split('-')[0] }}\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #template>\n    <div class=\"modal__exit\" data-dismiss=\"modal\" aria-label=\"Fechar\" (click)=\"modalRef.hide()\"><img src=\"assets/images/plus.svg\" alt=\"\"></div>\n    <div class=\"modal__top\">\n        <button \n            type=\"button\" \n            class=\"btn slick-prev slick-arrow\"\n            (click)=\"onModalPrevClick()\">\n                <img src=\"assets/images/arrow.svg\">\n        </button>\n        <figure class=\"modal__img\">\n            <img [src]=\"content.photo\" alt=\"content.name\">\n        </figure>\n        <button \n            type=\"button\" \n            class=\"btn slick-next slick-arrow\"\n            (click)=\"onModalNextClick()\">\n                <img src=\"assets/images/arrow.svg\">\n        </button>\n    </div>\n    <div class=\"modal__text\">\n        <h4 class=\"modal__name\">{{ content.name }}</h4>\n        <p class=\"modal__about\">{{ content.excerpt }}</p>\n    </div>\n    <div class=\"modal__quote\">\n        <p>\"{{ content.testimonial }}\"</p>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/overview/overview.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/overview/overview.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overview\">\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-center\">\n\t\t\t<div class=\"col-12 col-md-10\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-10 col-md-8 col-lg-5\">\n\t\t\t\t\t\t<p class=\"overview__tag\">{{ 'HOME.OVERVIEW.TAG' | translate }}</p>\n\t\t\t\t\t\t<h2 class=\"overview__title\">{{ 'HOME.OVERVIEW.TITLE' | translate }}</h2>\n\t\t\t\t\t\t<p class=\"overview__excerpt\">{{ 'HOME.OVERVIEW.EXCERPT' | translate }}</p>\n\t\t\t\t\t\t<a href=\"#\" class=\"overview__button\">\n\t\t\t\t\t\t\t{{ 'HOME.OVERVIEW.BUTTON' | translate }}\n\t\t\t\t\t\t\t<img src=\"assets/images/double-arrow.svg\" alt=\"\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/related/related.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/related/related.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"related\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h2 class=\"related__title\">Leia Também</h2>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <a class=\"related__single\" [routerLink]=\"['/04-trajetorias-ismart']\">\n                    <figure>\n                        <img src=\"assets/images/related.jpg\" alt=\"\">\n                    </figure>\n                    <div class=\"related__single--title\">\n                        <h4>Capítulo 01</h4>\n                        <h3>Mensagem do Conselho</h3>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-4\">\n                <a class=\"related__single\" [routerLink]=\"['/04-trajetorias-ismart']\">\n                    <figure>\n                        <img src=\"assets/images/related.jpg\" alt=\"\">\n                    </figure>\n                    <div class=\"related__single--title\">\n                        <h4>Capítulo 01</h4>\n                        <h3>Mensagem do Conselho</h3>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-md-4\">\n                <a class=\"related__single\" [routerLink]=\"['/04-trajetorias-ismart']\">\n                    <figure>\n                        <img src=\"assets/images/related.jpg\" alt=\"\">\n                    </figure>\n                    <div class=\"related__single--title\">\n                        <h4>Capítulo 01</h4>\n                        <h3>Mensagem do Conselho</h3>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/share/share/share.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/share/share/share.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"share\">\n\t<li class=\"share--item\">\n\t\t\t<a [href]=\"'https://www.facebook.com/sharer/sharer.php?u='+ currentUrl\" target=\"_blank\" class=\"share--link\">\n\t\t\t\t\t<i class=\"fa fa-facebook-f\"></i>\n\t\t\t</a>\n\t</li>\n\t<li class=\"share--item\">\n\t\t\t<a href=\"#\" class=\"share--link\">\n\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t</a>\n\t</li>\n\t<li class=\"share--item\">\n\t\t\t<a [href]=\"'https://www.linkedin.com/shareArticle?mini=true&url=' + currentUrl\" target=\"_blank\" class=\"share--link\">\n\t\t\t\t\t<i class=\"fa fa-linkedin\"></i>\n\t\t\t</a>\n\t</li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n    <div class=\"sidebar__title\">\n        <p>04</p>\n        <h5>Trajetórias Ismart</h5>\n    </div>\n    <ul class=\"sidebar__body\">\n        <li class=\"sidebar__item sidebar__item--active\">\n            <a href=\"\" class=\"sidebar__link sidebar__link--active\">Contato</a>\n        </li>\n        <li class=\"sidebar__item\">\n            <a href=\"\" class=\"sidebar__link\">Seleção</a>\n        </li>\n        <li class=\"sidebar__item\">\n            <a href=\"\" class=\"sidebar__link\">Prática</a>\n        </li>\n        <li class=\"sidebar__item\">\n            <a href=\"\" class=\"sidebar__link\">Suporte</a>\n        </li>\n        <li class=\"sidebar__item\">\n            <a href=\"\" class=\"sidebar__link\">Internacional</a>\n        </li>\n        <li class=\"sidebar__item\">\n            <a href=\"\" class=\"sidebar__link\">EaD</a>\n        </li>\n        <li class=\"sidebar__item\">\n            <a href=\"\" class=\"sidebar__link\">Universidade</a>\n        </li>\n        <li class=\"sidebar__item\">\n            <a href=\"\" class=\"sidebar__link\">Alumni</a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slider/slider.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slider/slider.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick-carousel class=\"carousel\" \n                    #slickModal=\"slick-carousel\" \n                    [config]=\"slideConfig\" \n                    (init)=\"slickInit($event)\"\n                    (breakpoint)=\"breakpoint($event)\"\n                    (afterChange)=\"afterChange($event)\"\n                    (beforeChange)=\"beforeChange($event)\">\n    <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide\">\n\t\t<img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n    </div>\n</ngx-slick-carousel>\n\n<button (click)=\"addSlide()\">Add</button>\n<button (click)=\"removeSlide()\">Remove</button>\n<button (click)=\"slickModal.slickGoTo(2)\">slickGoto 2</button>\n<button (click)=\"slickModal.unslick()\">unslick</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/testimonials/testimonials.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/testimonials/testimonials.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"testimonials\" [class.testimonials__dark]=\"modeDark\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-9 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <h3 class=\"testimonials__title\">Testemunhos</h3>\n                <ngx-slick-carousel class=\"testimonials__carousel\" \n                    #slickModal=\"slick-carousel\" \n                    [config]=\"slideConfig\">\n                    <div \n                        ngxSlickItem \n                        *ngFor=\"let slide of slides\" \n                        class=\"testimonials__single\"\n                        (click)=\"onTestimonialClick(slide)\">\n                        <figure class=\"testimonials__img\">\n                            <img [src]=\"slide.photo\" [alt]=\"slide.name\">\n                        </figure>\n                        <h4 class=\"testimonials__name\">{{ slide.name }}</h4>\n                        <p class=\"testimonials__about\">{{ slide.excerpt }}</p>\n                        <a href=\"\" data-toggle=\"modal\" data-target=\"#exampleModal\" class=\"testimonials__link\">Ver depoimento</a>\n                    </div>\n                </ngx-slick-carousel>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/timeline-card/timeline-card.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/timeline-card/timeline-card.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n\t[ngClass]=\"{\n\t\t'timeline-card': true, \n\t\t'timeline-card--last': last\n\t}\">\n\t<div class=\"timeline-card__icon\">\n\t\t<img [src]=\"icon\">\n\t</div>\n\t<h2 class=\"timeline-card__title\">\n\t\t{{ title }}\n\t</h2>\n\t<div class=\"timeline-card__excerpt\" [innerHTML]=\"excerpt\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/timeline-image/timeline-image.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/timeline-image/timeline-image.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img \n\tclass=\"timeline-image\"\n\t[src]=\"path\">\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/01-mensagem/chapter-intern-simple.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/01-mensagem/chapter-intern-simple.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-chapter-hat [data]=\"chapterHatInfo\"></app-chapter-hat>\n<app-chapter-content></app-chapter-content>\n<app-related></app-related>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/02-missao/missao.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/02-missao/missao.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chapter-hat [data]=\"chapterHatInfo\"></app-chapter-hat>\n<article class=\"chapter-content\">\n    <!-- Inserir o share -->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <div class=\"mission\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <h2 class=\"mission__title\">Missão</h2>\n                            <p class=\"mission__text\">Concretizar o pleno potencial proissional de jovens talentos acadêmicos de baixa renda através de programas calcados na valorização da excelência, da ética e da criatividade produtiva.</p>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <h2 class=\"mission__title mt-lg-0 mt-3\">Visão</h2>\n                            <p class=\"mission__text\">Formar e colocar no mercado de trabalho, até 2020, 250 bolsistas do Ismart nas carreiras apoiadas e em posições de destaque.</p>\n                        </div>\n                    </div>\n                </div>\n                <img src=\"assets/images/mission.png\" alt=\"\" class=\"img-fluid\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <div class=\"beliefs\">\n                    <h3 class=\"beliefs__title\">Crenças</h3>\n                    <div class=\"beliefs__block\">\n                        <h6 class=\"beliefs__block--title\">As diferentes formas de talento se distribuem por todas as classes sociais.</h6>\n                        <p class=\"beliefs__block--content\">O lugar de onde você vem não determina quem você vai ser. É só procurar que a gente acha milhares de jovens talentosos pelo Brasil afora!</p>\n                    </div>\n                    <div class=\"beliefs__block\">\n                        <h6 class=\"beliefs__block--title\">As boas oportunidades catalisam a promoção social.</h6>\n                        <p class=\"beliefs__block--content\">Segure as oportunidades com força para transformar sua vida. Grandes coisas acontecem quando o talento encontra a oportunidade: quando ela cruzar o seu caminho, não deixe passar!</p>\n                    </div>\n                    <div class=\"beliefs__block\">\n                        <h6 class=\"beliefs__block--title\">O talento só se concretiza por meio do esforço pessoal.</h6>\n                        <p class=\"beliefs__block--content\">Para ter sucesso não basta só talento; é preciso ralar muito.</p>\n                    </div>\n                    <div class=\"beliefs__block\">\n                        <h6 class=\"beliefs__block--title\">A excelência é a base para os resultados desejados.</h6>\n                        <p class=\"beliefs__block--content\">Para ter sucesso não basta só talento e ralar muito: tem que fazer bem feito sempre. Dê o seu melhor e vai chegar lá.</p>\n                    </div>\n                    <div class=\"beliefs__block\">\n                        <h6 class=\"beliefs__block--title\">Nossa definição de sucesso é a transformação do seu sonho grande em uma atividade produtiva, com ética e responsabilidade social.</h6>\n                        <p class=\"beliefs__block--content\">Para o Ismart, o sucesso acontece quando você sonha grande, realiza, faz a diferença e transforma o seu mundo para melhor.</p>\n                    </div>\n                    <div class=\"beliefs__block\">\n                        <h6 class=\"beliefs__block--title\">Os bons exemplos têm efeito multiplicador.</h6>\n                        <p class=\"beliefs__block--content\">Inspire com seu bom exemplo: primeiro um irmão, depois o vizinho, a turma da rua, a escola, a comunidade... transforme seu mundo!</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n    </div>\n</article>\n<app-related></app-related>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/03-timeline/timeline.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/03-timeline/timeline.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chapter-hat [data]=\"chapterHatInfo\"></app-chapter-hat>\n\n\t<article\n\t\t#article\n\t\tclass=\"chapter-content\">\n\t\t<div class=\"timeline__line\"></div>\n\t\t<app-float-container\n\t\t\t[startPosEl]=\"article\"\n\t\t\t[endPosEl]=\"article\"\n\t\t\t[child]=\"nav\">\n\t\t\t<nav\n\t\t\t\t#nav \n\t\t\t\tclass=\"timeline-nav\">\n\t\t\t\t<a\n\t\t\t\t\t#navItems\n\t\t\t\t\t*ngFor=\"let navItem of timeline.content; let index = index;\" \n\t\t\t\t\t(click)=\"onItemNavClick( $event, navItem.title )\"\n\t\t\t\t\tclass=\"timeline-nav__item\"\n\t\t\t\t\t[class.timeline-nav__item--active]=\"index === 0\">\n\t\t\t\t\t{{ navItem.title }}\n\t\t\t\t</a>\n\t\t\t</nav>\n\t\t\t<app-share></app-share>\n\t\t</app-float-container>\n\t\t<ul class=\"container\">\n\t\t<li\n\t\t\t#cards\n\t\t\t*ngFor=\"let item of timeline.content; let i = index;\"\n\t\t\t[attr.year]=\"item.title\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'col-12': true, \n\t\t\t\t'timeline__item': true, \n\t\t\t\t'timeline__item--img': !!item.image\n\t\t\t}\">\n\t\t\t<app-timeline-card\n\t\t\t\t[title]=\"item.title\"\n\t\t\t\t[icon]=\"item.icon\"\n\t\t\t\t[excerpt]=\"item.excerpt\"\n\t\t\t\t[style.order]=\"i % 2 !== 0 ? '1' : '0'\"\n\t\t\t\t[last]=\"i + 1 === timeline.content.length\">\n\t\t\t</app-timeline-card>\n\t\t\t<app-timeline-image\n\t\t\t\t*ngIf=\"item.image\"\n\t\t\t\t[path]=\"item.image\">\n\t\t\t</app-timeline-image>\n\t\t</li>\n\t\t</ul>\n\t</article>\n\n<app-related></app-related>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/04-trajetorias/chapter-intern.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/04-trajetorias/chapter-intern.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chapter-hat\n\t[data]=\"chapterHatInfo\"></app-chapter-hat>\n<app-chapter-content-all\n\t[testimonialPosition]=\"testimonialPosition\">\n</app-chapter-content-all>\n<app-testimonials\n\t#testimonialComponent\n\t(onTestimonialCardClick)=\"modal.openModal()\">\n</app-testimonials>\n<app-related></app-related>\n<app-modal\n\t#modal\n\t[testimonial]=\"testimonials.current\"\n\t(onPrev)=\"onPrevTestimonial()\"\n\t(onNext)=\"onNextTestimonial()\">\n</app-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/05-parceiros/parceiros.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/05-parceiros/parceiros.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chapter-hat [data]=\"chapterHatInfo\"></app-chapter-hat>\n<article \n    class=\"chapter-content\"\n    #articleContainer>\n    <!-- Share aqui -->\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>“Não é só o bolsista do Ismart que se beneficia por estar aqui. Todo o Colégio ganha com a parceria”, destaca Helena Aguiar, diretora de Planejamento e Integração do Colégio Bandeirantes, um dos mais tradicionais da capital paulista e que recebe alunos do Ismart no Projeto Alicerce. “Os alunos acabam se ajudando mutuamente, em grupos de estudo, por exemplo, e isso é maravilhoso”, explica. “Alguns fazem muito esforço para estar aqui porque sabem que isso não vai mudar somente a história deles, mas a de suas famílias também. Isso inspira todo mundo. O que fazemos, então, é unir essa vontade de superação, que já é deles – e é por isso que eles foram selecionados pelo Ismart – a todas as oportunidades que uma escola de excelência pode oferecer: é a combinação perfeita!”, completa.</p>\n                <p>No Rio de Janeiro (RJ), Marcel Lima, Diretor-Geral do Colégio pH, também destaca a troca de experiências: “Os alunos, pelas diferentes realidades, expõem diferentes pontos de vista em sala de aula e isso é muito enriquecedor porque estimula o pensamento crítico – uma de nossas premissas”.</p>\n                <p>A trajetória de superação desses jovens, para Marcel, é o que os motiva a fazer a diferença depois de formados. “Esses alunos desenvolvem uma sensação de pertencimento a uma so-ciedade para a qual eles querem dar um retorno. O futuro deles, portanto, não será nada menos que brilhante, uma página em branco na qual eles poderão desenhar o que quiserem”, finaliza.</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <figure class=\"chapter-content__img\">\n                <img src=\"assets/images/helena-aguiar.jpg\" alt=\"\">\n                <div class=\"container-fluid\">\n                    <blockquote class=\"blockquote__image blockquote__quote\">Não é só o bolsista do Ismart que se beneficia por estar aqui. Todo o Colégio ganha com a parceria\n                    <cite>Helena Aguiar - diretora de Planejamento e Integração do Colégio Bandeirantes</cite>\n                    </blockquote>\n                    <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                        <figcaption><img src=\"assets/images/camera.svg\" alt=\"\">Giovanna, Jean, Carlos e Lucca Muliterno</figcaption>\n                    </div>\n                </div>\n            </figure>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>Bruno Resende Domingues reforça essa resolução. Egresso do Colégio Bandeirantes e do curso de Engenharia de Produção da Universidade de São Paulo (USP), o jovem tem passagens por grandes empresas. Começou a estagiar no Citibank, onde foi efetivado e trabalhou nas áreas de Planejamento, Risco de Mercado e Asset Management. Depois ingressou na Ambev, onde trabalha atualmente.</p>\n                <p>“O Bruno sempre demonstrou muito potencial, muita vontade de trabalhar, de resolver, de ajudar e, além de tudo, capacidades analítica e técnica excepcionais”, destaca Ronaldo Rozenbaum, diretor da área de Orçamento e Planejamento Financeiro da Ambev e chefe do Bruno.</p>\n                <p>Nos últimos quatro anos, Bruno passou por três funções, relativas a cada uma das linhas do demonstrativo financeiro. Mais recentemente, começou a atuar como gerente, sendo responsável por todas as três responsabilidades anteriores. Ao listar os elementos que impulsionaram a carreira de seu funcionário, Rozenbaum destaca a vontade de entregar sempre além do esperado. “Acho excepcional o trabalho do Ismart de dar uma oportunidade a pessoas que não necessariamente a teriam de maneira fácil, abrindo um caminho para termos um País com menos desigualdade”, conclui.</p>\n                <p>Linaldo Vilar, Diretor de Produ-ção da DASA, a maior empresa de medicina diagnóstica da América Latina, também destaca a capacidade analítica de Felipe Oliveira Machado, trainee de sua equipe e ex-bolsista do Ismart. Após concluir o ensino médio no Colégio Sidarta, em Cotia (SP), Felipe cursou Química na Universidade de São Paulo, período em que integrou a entidade Enactus também, uma organização internacional dedicada a inspirar alunos a melhorar o mundo por meio da ação empreendedora.</p>\n                <p>O protagonismo na busca por conhecimento é, para Vilar, um dos diferenciais do jovem. “Ele sempre está interessado em buscar informa-ções sobre o setor em que atua”, conta. Para o Diretor, o futuro do jovem será promissor, vindo a ocupar cargos de gestão futuramente. “A participação de executivos na formação dos alunos Ismart proporciona a eles uma visão correta sobre o mundo corporativo”, completa.</p>\n                <blockquote class=\"blockquote__quote blockquote__white\">Esses alunos desenvolvem uma sensação de pertencimento a uma sociedade para a qual eles querem dar um retorno\n                <cite>Marcel Lima - Diretor-Geral do Colégio PH</cite>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n</article>\n<app-testimonials\n\t#testimonialComponent\n\t(onTestimonialCardClick)=\"modal.openModal()\">\n</app-testimonials>\n<app-related></app-related>\n<!-- <app-modal\n\t#modal\n\t[testimonial]=\"testimonials.current\"\n\t(onPrev)=\"onPrevTestimonial()\"\n\t(onNext)=\"onNextTestimonial()\">\n</app-modal> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/06-horizonte/horizonte.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/06-horizonte/horizonte.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chapter-hat [data]=\"chapterHatInfo\"></app-chapter-hat>\n<article \n    class=\"chapter-content\"\n    #articleContainer>\n    <!-- Share aqui -->\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>O grande desafio continua sen-do tornar o Ismart conhecido para que mais jovens talen-tosos possam ter a oportunidade de se desenvolver por meio da educação. Uma vez no projeto, a intenção é ajudá-los a nunca duvidarem do seu potencial e a se apropriarem da sua história com protagonismo, resiliência e perseverança. </p>\n                <p>Quanto ao trabalho do Instituto e os programas de desenvolvimento oferecidos aos jovens, há o constante monitoramento de tendências de mercado. Uma das principais mudanças nos programas de desenvolvimento dos bolsistas foi o início do trabalho com foco em competências socio-emocionais, a reestruturação do pro-grama de orientação profissional, a aprendizagem baseada em projetos e a integração desses alunos às tendências de letramento digital.</p>\n                <p>Entre muitas expectativas, há também um sonho grande: a de que um dia um graduado pelo Ismart venha a fazer parte do Conselho do Instituto, representando a comunidade e dando voz aos principais interessados no projeto: bolsistas e Alumni.</p>\n                <p class=\"text-big\">Nos últimos 20 anos, mais de quatro mil jovens mudaram sua realidade e estão contribuindo para uma sociedade melhor. Para os próximos 20 anos...</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <figure class=\"chapter-content__img mb-0\">\n                <img src=\"assets/images/eduardo-braga.jpg\" alt=\"\">\n                <div class=\"container-fluid\">\n                    <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                        <figcaption><img src=\"assets/images/camera.svg\" alt=\"\">Eduardo Braga da Costa - Projeto Ismart Online - São Paulo</figcaption>\n                    </div>\n                </div>\n            </figure>\n        </div>\n    </div>\n</article>\n<app-testimonials\n\t#testimonialComponent\n\t(onTestimonialCardClick)=\"modal.openModal()\">\n</app-testimonials>\n<app-testimonials\n    [modeDark]=\"true\"\n\t(onTestimonialCardClick)=\"modal.openModal()\">\n</app-testimonials>\n<app-related></app-related>\n<!-- <app-modal\n\t#modal\n\t[testimonial]=\"testimonials.current\"\n\t(onPrev)=\"onPrevTestimonial()\"\n\t(onNext)=\"onNextTestimonial()\">\n</app-modal> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/07-manifesto/manifesto.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/07-manifesto/manifesto.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chapter-hat [data]=\"chapterHatInfo\"></app-chapter-hat>\n<article \n    class=\"chapter-content\"\n    #articleContainer>\n    <!-- Share aqui -->\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <p>Não existe lugar tão alto que não se possa alcançar, nem tão longe que não se possa chegar.</p>\n                <p>Temos altas expectativas. Temos sonhos.</p>\n                <p>Acreditamos no talento do jovem brasileiro e no poder transformador da educação.</p>\n                <p>Acreditamos no mérito e no esforço individual porque tudo que é conquistado tem mais valor.</p>\n                <p>Vivemos em uma sociedade desigual.</p>\n                <p>Tanto potencial desperdiçado pela falta de oportunidades.</p>\n                <p>Somos todos responsáveis.</p>\n                <p>Eu, você, nós do Ismart.</p>\n                <p>Os alunos. Seus pais.</p>\n                <p> Os professores. A escola.</p>\n                <p>Trabalhando em conjunto com outros agentes de transformação, identificamos talentos acadêmicos de baixa renda e oferecemos a estes jovens a oportunidade de ser mais, de sonhar mais alto, de chegar mais longe. Damos acesso à melhor educação de ensino médio para que conquistem uma vaga nas melhores universidades, desenvolvam seu pleno potencial e se tornem profissionais de sucesso em suas áreas de atuação.</p>\n                <p>Para que se tornem, um dia, também eles, agentes de transformação. Motivamos e apoiamos nossos alunos na longa jornada da educação, na longa jornada da vida em busca do sucesso e da felicidade. </p>\n                <p>Trabalhamos por um futuro melhor para os jovens e para o Brasil.</p>\n            </div>\n        </div>\n    </div>\n</article>\n<app-related></app-related>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/09-lista-parceiros/lista-parceiros.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/09-lista-parceiros/lista-parceiros.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chapter-hat [data]=\"chapterHatInfo\"></app-chapter-hat>\n<article class=\"chapter-content mt-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12\">\n                <app-accordion [accordiondata]=\"accordionContent\"></app-accordion>\n            </div>\n        </div>\n    </div>\n</article>\n<app-related></app-related>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-overview></app-overview>\n<app-chapters></app-chapters>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_01_mensagem_chapter_intern_simple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/01-mensagem/chapter-intern-simple.component */ "./src/app/pages/01-mensagem/chapter-intern-simple.component.ts");
/* harmony import */ var _pages_04_trajetorias_chapter_intern_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/04-trajetorias/chapter-intern.component */ "./src/app/pages/04-trajetorias/chapter-intern.component.ts");
/* harmony import */ var _pages_02_missao_missao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/02-missao/missao.component */ "./src/app/pages/02-missao/missao.component.ts");
/* harmony import */ var _pages_03_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/03-timeline/timeline.component */ "./src/app/pages/03-timeline/timeline.component.ts");
/* harmony import */ var _pages_05_parceiros_parceiros_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/05-parceiros/parceiros.component */ "./src/app/pages/05-parceiros/parceiros.component.ts");
/* harmony import */ var _pages_06_horizonte_horizonte_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/06-horizonte/horizonte.component */ "./src/app/pages/06-horizonte/horizonte.component.ts");
/* harmony import */ var _pages_07_manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/07-manifesto/manifesto.component */ "./src/app/pages/07-manifesto/manifesto.component.ts");
/* harmony import */ var _pages_09_lista_parceiros_lista_parceiros_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/09-lista-parceiros/lista-parceiros.component */ "./src/app/pages/09-lista-parceiros/lista-parceiros.component.ts");












const routes = [
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '01-mensagem-do-conselho', component: _pages_01_mensagem_chapter_intern_simple_component__WEBPACK_IMPORTED_MODULE_4__["ChapterInternSimpleComponentm"] },
    { path: '02-missao-visao-valores', component: _pages_02_missao_missao_component__WEBPACK_IMPORTED_MODULE_6__["MissaoComponent"] },
    { path: '03-linha-do-tempo', component: _pages_03_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"] },
    { path: '04-trajetorias-ismart-contato', component: _pages_04_trajetorias_chapter_intern_component__WEBPACK_IMPORTED_MODULE_5__["ChapterInternComponent"] },
    { path: '05-parceiros-ismart', component: _pages_05_parceiros_parceiros_component__WEBPACK_IMPORTED_MODULE_8__["ParceirosComponent"] },
    { path: '06-horizonte', component: _pages_06_horizonte_horizonte_component__WEBPACK_IMPORTED_MODULE_9__["HorizonteComponent"] },
    { path: '07-manifesto', component: _pages_07_manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_10__["ManifestoComponent"] },
    { path: '09-lista-parceiros', component: _pages_09_lista_parceiros_lista_parceiros_component__WEBPACK_IMPORTED_MODULE_11__["ListaParceirosComponent"] }
    // { path: '**', component: PageNotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let AppComponent = class AppComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        translate.addLangs(['pt-BR', 'en']);
        translate.setDefaultLang('pt-BR');
        translate.use('pt-BR');
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_01_mensagem_chapter_intern_simple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/01-mensagem/chapter-intern-simple.component */ "./src/app/pages/01-mensagem/chapter-intern-simple.component.ts");
/* harmony import */ var _pages_02_missao_missao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/02-missao/missao.component */ "./src/app/pages/02-missao/missao.component.ts");
/* harmony import */ var _pages_04_trajetorias_chapter_intern_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/04-trajetorias/chapter-intern.component */ "./src/app/pages/04-trajetorias/chapter-intern.component.ts");
/* harmony import */ var _pages_03_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/03-timeline/timeline.component */ "./src/app/pages/03-timeline/timeline.component.ts");
/* harmony import */ var _pages_05_parceiros_parceiros_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/05-parceiros/parceiros.component */ "./src/app/pages/05-parceiros/parceiros.component.ts");
/* harmony import */ var _pages_06_horizonte_horizonte_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/06-horizonte/horizonte.component */ "./src/app/pages/06-horizonte/horizonte.component.ts");
/* harmony import */ var _pages_07_manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/07-manifesto/manifesto.component */ "./src/app/pages/07-manifesto/manifesto.component.ts");
/* harmony import */ var _pages_09_lista_parceiros_lista_parceiros_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/09-lista-parceiros/lista-parceiros.component */ "./src/app/pages/09-lista-parceiros/lista-parceiros.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/components/overview/overview.component.ts");
/* harmony import */ var _components_chapters_chapters_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/chapters/chapters.component */ "./src/app/components/chapters/chapters.component.ts");
/* harmony import */ var _components_chapter_hat_chapter_hat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/chapter-hat/chapter-hat.component */ "./src/app/components/chapter-hat/chapter-hat.component.ts");
/* harmony import */ var _components_chapter_content_chapter_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/chapter-content/chapter-content.component */ "./src/app/components/chapter-content/chapter-content.component.ts");
/* harmony import */ var _components_related_related_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/related/related.component */ "./src/app/components/related/related.component.ts");
/* harmony import */ var _components_chapter_content_all_chapter_content_all_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/chapter-content-all/chapter-content-all.component */ "./src/app/components/chapter-content-all/chapter-content-all.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ "./src/app/components/testimonials/testimonials.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/emitter/emitter.service */ "./src/app/services/emitter/emitter.service.ts");
/* harmony import */ var _components_timeline_card_timeline_card_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/timeline-card/timeline-card.component */ "./src/app/components/timeline-card/timeline-card.component.ts");
/* harmony import */ var _components_timeline_image_timeline_image_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/timeline-image/timeline-image.component */ "./src/app/components/timeline-image/timeline-image.component.ts");
/* harmony import */ var _components_float_container_float_container_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/float-container/float-container.component */ "./src/app/components/float-container/float-container.component.ts");
/* harmony import */ var _components_share_share_share_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/share/share/share.component */ "./src/app/components/share/share/share.component.ts");






// Pages

































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_30__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_16__["SliderComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__["OverviewComponent"],
            _components_chapters_chapters_component__WEBPACK_IMPORTED_MODULE_19__["ChaptersComponent"],
            _pages_01_mensagem_chapter_intern_simple_component__WEBPACK_IMPORTED_MODULE_7__["ChapterInternSimpleComponentm"],
            _components_chapter_hat_chapter_hat_component__WEBPACK_IMPORTED_MODULE_20__["ChapterHatComponent"],
            _components_chapter_content_chapter_content_component__WEBPACK_IMPORTED_MODULE_21__["ChapterContentComponent"],
            _components_related_related_component__WEBPACK_IMPORTED_MODULE_22__["RelatedComponent"],
            _pages_04_trajetorias_chapter_intern_component__WEBPACK_IMPORTED_MODULE_9__["ChapterInternComponent"],
            _components_chapter_content_all_chapter_content_all_component__WEBPACK_IMPORTED_MODULE_23__["ChapterContentAllComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SidebarComponent"],
            _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_25__["AccordionComponent"],
            _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_26__["TestimonialsComponent"],
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_27__["MenuComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_28__["ModalComponent"],
            _pages_02_missao_missao_component__WEBPACK_IMPORTED_MODULE_8__["MissaoComponent"],
            _pages_03_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
            _components_timeline_card_timeline_card_component__WEBPACK_IMPORTED_MODULE_35__["TimelineCardComponent"],
            _components_timeline_image_timeline_image_component__WEBPACK_IMPORTED_MODULE_36__["TimelineImageComponent"],
            _pages_05_parceiros_parceiros_component__WEBPACK_IMPORTED_MODULE_11__["ParceirosComponent"],
            _pages_06_horizonte_horizonte_component__WEBPACK_IMPORTED_MODULE_12__["HorizonteComponent"],
            _pages_07_manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_13__["ManifestoComponent"],
            _pages_09_lista_parceiros_lista_parceiros_component__WEBPACK_IMPORTED_MODULE_14__["ListaParceirosComponent"],
            _components_float_container_float_container_component__WEBPACK_IMPORTED_MODULE_37__["FloatContainerComponent"],
            _components_share_share_share_component__WEBPACK_IMPORTED_MODULE_38__["ShareComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__["SlickCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"]]
                }
            }),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_33__["ModalModule"].forRoot()
        ],
        providers: [_services_window_service__WEBPACK_IMPORTED_MODULE_32__["WINDOW_PROVIDERS"], _services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_34__["EmitterService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/accordion/accordion.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.accordion {\n  margin-bottom: 40px;\n}\n.accordion__card {\n  border-bottom: solid 1px #b7c1d2;\n}\n.accordion__card--header {\n  padding: 25px 0;\n}\n.accordion__card--link {\n  font-size: 18px;\n  font-weight: bold;\n  color: #012461;\n  font-family: \"Montserrat\", Arial, Verdana;\n  line-height: 1.33;\n  letter-spacing: 1.13px;\n  text-transform: uppercase;\n  padding-left: 0;\n}\n.accordion__card--link[aria-expanded=true] .plus {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.accordion__card--link:focus {\n  text-decoration: none;\n}\n.accordion__card--link:hover {\n  text-decoration: none;\n}\n.accordion__card--link:hover .plus path {\n  fill: #f2665e;\n}\n.accordion__card--link .plus {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  margin-right: 20px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.accordion__card--body {\n  padding: 0 0 40px 45px;\n  font-size: 18px;\n  line-height: 1.78;\n  color: #012461;\n}\n@media (max-width: 768px) {\n  .accordion__card--body {\n    font-size: 16px;\n    line-height: 1.5;\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iZXRvL0RvY3VtZW50cy9kZXYvaXNtYXJ0LXJhMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ2ZEO0FDSEE7RUFDSSxtQkFBQTtBRE1KO0FDTEk7RUFDSSxnQ0FBQTtBRE9SO0FDTlE7RUFDSSxlQUFBO0FEUVo7QUNOUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNGQ0c7RUVBSCx5Q0ZSRztFRVNILGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURRWjtBQ05nQjtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7QURRcEI7QUNMWTtFQUNJLHFCQUFBO0FET2hCO0FDTFk7RUFDSSxxQkFBQTtBRE9oQjtBQ0xvQjtFQUNJLGFBQUE7QURPeEI7QUNIWTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURLaEI7QUNGUTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0YvQkc7QUNtQ2Y7QUNESTtFQUVRO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFREVkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuLmFjY29yZGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uYWNjb3JkaW9uX19jYXJkIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiN2MxZDI7XG59XG4uYWNjb3JkaW9uX19jYXJkLS1oZWFkZXIge1xuICBwYWRkaW5nOiAyNXB4IDA7XG59XG4uYWNjb3JkaW9uX19jYXJkLS1saW5rIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBsZXR0ZXItc3BhY2luZzogMS4xM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uYWNjb3JkaW9uX19jYXJkLS1saW5rW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gLnBsdXMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uYWNjb3JkaW9uX19jYXJkLS1saW5rOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFjY29yZGlvbl9fY2FyZC0tbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hY2NvcmRpb25fX2NhcmQtLWxpbms6aG92ZXIgLnBsdXMgcGF0aCB7XG4gIGZpbGw6ICNmMjY2NWU7XG59XG4uYWNjb3JkaW9uX19jYXJkLS1saW5rIC5wbHVzIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uYWNjb3JkaW9uX19jYXJkLS1ib2R5IHtcbiAgcGFkZGluZzogMCAwIDQwcHggNDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS43ODtcbiAgY29sb3I6ICMwMTI0NjE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFjY29yZGlvbl9fY2FyZC0tYm9keSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5hY2NvcmRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgJl9fY2FyZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYjdjMWQyO1xuICAgICAgICAmLS1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgICB9XG4gICAgICAgICYtLWxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4xM3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICZbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICAgICAgICAgICAgICAgIC5wbHVzIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAucGx1cyB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2YyNjY1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wbHVzIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi0tYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgNDBweCA0NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzg7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAmX19jYXJkIHtcbiAgICAgICAgICAgICYtLWJvZHkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.ts ***!
  \*************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccordionComponent = class AccordionComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.accordiondata);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('accordiondata')
], AccordionComponent.prototype, "accordiondata", void 0);
AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accordion',
        template: __webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/accordion/accordion.component.html"),
        styles: [__webpack_require__(/*! ./accordion.component.scss */ "./src/app/components/accordion/accordion.component.scss")]
    })
], AccordionComponent);



/***/ }),

/***/ "./src/app/components/chapter-content-all/chapter-content-all.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/chapter-content-all/chapter-content-all.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n.chapter-content .tag {\n  font-size: 12px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #ffffff;\n  background-color: #028ed4;\n  padding: 9px 14px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  display: inline-block;\n  margin-bottom: 24px;\n}\n.chapter-content__title {\n  font-size: 56px;\n  line-height: 1.14;\n  font-weight: bold;\n  margin-bottom: 24px;\n  color: #012461;\n  font-family: \"Montserrat\", Arial, Verdana;\n}\n.chapter-content__title--section {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: \"Montserrat\", Arial, Verdana;\n  text-transform: uppercase;\n  color: #012461;\n  letter-spacing: -0.5px;\n  margin-bottom: 20px;\n  margin-top: 70px;\n}\n.chapter-content__subtitle {\n  font-size: 21px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #012461;\n  text-transform: uppercase;\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n.chapter-content .text-big {\n  font-size: 24px;\n  line-height: 1.33;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 90px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  position: relative;\n}\n.chapter-content .blockquote__quote {\n  position: absolute;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  line-height: 1.33;\n  max-width: 280px;\n  font-size: 24px;\n  color: #012461;\n  width: 40%;\n  top: 50%;\n  margin-bottom: 0;\n  left: 100%;\n}\n.chapter-content .blockquote__quote:before {\n  content: \"\";\n  position: absolute;\n  top: -70px;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__quote cite {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.71;\n  color: #012461;\n  display: block;\n  margin-top: 15px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__quote cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 8px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .blockquote__quote.blockquote__white {\n  background-color: #ffffff;\n  padding: 90px 0 20px 0;\n}\n.chapter-content .blockquote__quote.blockquote__white:before {\n  top: 20px;\n}\n.chapter-content .blockquote__image {\n  color: #ffffff;\n  right: 4%;\n  left: initial;\n}\n.chapter-content .blockquote__image:before {\n  background-image: url('left-quote.svg');\n}\n.chapter-content .blockquote__image cite {\n  color: #ffffff;\n}\n.chapter-content .blockquote__image cite:before {\n  content: \"\";\n  background-image: url('triangle-small-white.svg');\n}\n.chapter-content .blockquote__big {\n  padding-top: 70px;\n  margin: 40px 0;\n  font-size: 24px;\n  color: #012461;\n  line-height: 1.33;\n  position: relative;\n}\n.chapter-content .blockquote__big:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__big cite {\n  font-size: 14px;\n  font-weight: bold;\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__big cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 5px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .list {\n  padding-left: 27px;\n  margin: 0;\n  list-style-image: url('triangle-orange.svg');\n}\n.chapter-content .list li {\n  font-size: 18px;\n  line-height: 1.78;\n  color: #012461;\n  margin-bottom: 20px;\n}\n@media (max-width: 992px) {\n  .chapter-content__title {\n    font-size: 42px;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .blockquote__quote {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 100%;\n    font-size: 22px;\n    max-width: inherit;\n    margin-top: 120px;\n  }\n  .chapter-content .blockquote__quote.blockquote__image:before {\n    left: 15px;\n    background-image: url('left-quote-blue.svg');\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content {\n    padding: 30px 0;\n  }\n  .chapter-content__title {\n    font-size: 24px;\n  }\n  .chapter-content__title--section {\n    font-size: 16px;\n  }\n  .chapter-content__subtitle {\n    font-size: 16px;\n  }\n  .chapter-content p {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n  .chapter-content__img {\n    margin: 30px 0;\n  }\n  .chapter-content .blockquote__quote {\n    font-size: 21px;\n    color: #012461;\n    padding: 0 15px;\n  }\n  .chapter-content .list li {\n    font-size: 16px;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWNvbnRlbnQtYWxsL2NoYXB0ZXItY29udGVudC1hbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcHRlci1jb250ZW50LWFsbC9jaGFwdGVyLWNvbnRlbnQtYWxsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYmV0by9Eb2N1bWVudHMvZGV2L2lzbWFydC1yYTIwMTkvc3JjL2FwcC9jb21wb25lbnRzL2NoYXB0ZXItY29udGVudC9jaGFwdGVyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iZXRvL0RvY3VtZW50cy9kZXYvaXNtYXJ0LXJhMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBREEsb0ZBQUE7QUFDQSxrR0FBQTtBQWdCUjtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUNiRDtBRFdBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ1JEO0FDVkE7RUFDSSxlQUFBO0FEYUo7QUNaSTtFQUNJLGVBQUE7RUFDQSxjRk9PO0VFTlAsaUJBQUE7QURjUjtBQ1JvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURVeEI7QUNKSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRE1SO0FDTFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRE9aO0FDTFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnRCRztFRXVCSCxnQkFBQTtBRE9aO0FDTlk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURRaEI7QUNKSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0Z2Q087RUV3Q1AsZUFBQTtFQUNBLHlCRjlDSztBQ29EYjtBQ0pJO0VBQ0ksaUJBQUE7QURNUjtBQ0xRO0VBQ0ksa0JBQUE7QURPWjtBQ05ZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRFFoQjtBQ0pJO0VBQ0ksZ0JBQUE7RUFDTixVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ00sUUFBQTtFQUNBLE1BQUE7QURNUjtBQ0xFO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QURPSDtBQ05HO0VBQ0MsYUFBQTtBRFFKO0FDTEU7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNTLFlBQUE7RUFDVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0YxRVk7RUUyRUgsaUJBQUE7RUFDQSxlQUFBO0VBQ1Qsa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FET0g7QUNORztFQUNDLHFCRmpGTTtFRWtGTixtQkZsRk07RUVtRk4scUJBQUE7RUFDQSxjRnhGUztBQ2dHYjtBQ0pJO0VBQ0k7SUFDSSxXQUFBO0VETVY7QUFDRjtBQ0pJO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RURNVjtBQUNGO0FDSkk7RUFDSTtJQUNJLFdBQUE7RURNVjtFQ0xVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RURPZDtFQ0pNO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7WUFBQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VETVY7QUFDRjtBQ0pJO0VBQ0k7SUFDSSxVQUFBO0VETVY7RUNKTTtJQUNJLGFBQUE7RURNVjtBQUNGO0FDRkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZ0VBQUE7RUFBQSx3REFBQTtFQUFBLGdEQUFBO0VBQUEsOEVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QURLSjtBQ0pJO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRE1SO0FDSEk7RUFmSjtJQWdCUSxjQUFBO0VETU47QUFDRjtBRWhLSTtFQUNJLGVBQUE7RUFDQSx5Q0hETztFR0VQLGNIQ0s7RUdBTCx5QkhJRTtFR0hGLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUZtS1I7QUVqS0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0hQTztFR1FQLHlDSGhCTztBQ21MZjtBRWxLUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDSHBCRztFR3FCSCx5QkFBQTtFQUNBLGNIZEc7RUdlSCxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUZvS1o7QUVqS0k7RUFDSSxlQUFBO0VBQ0EseUNIOUJPO0VHK0JQLGNIdkJPO0VHd0JQLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRm1LUjtBRWpLSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRm1LUjtBRTdKb0I7RUFDSSxlQUFBO0VBQ0EsY0hwQ2Q7RUdxQ2MsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUYrSnhCO0FFekpJO0VBQ0ksa0JBQUE7QUYySlI7QUV4SlE7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNIekRHO0VHMERILFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FGMEpaO0FFekpZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FGMkpoQjtBRXpKWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0gzRUQ7RUc0RUMsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FGMkpoQjtBRTFKZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUY0SnBCO0FFekpZO0VBQ0kseUJIakdIO0VHa0dHLHNCQUFBO0FGMkpoQjtBRTFKZ0I7RUFDSSxTQUFBO0FGNEpwQjtBRXhKUTtFQUNJLGNIekdDO0VHMEdELFNBQUE7RUFDQSxhQUFBO0FGMEpaO0FFekpZO0VBQ0ksdUNBQUE7QUYySmhCO0FFekpZO0VBQ0ksY0hoSEg7QUMyUWI7QUUxSmdCO0VBQ0ksV0FBQTtFQUNBLGlEQUFBO0FGNEpwQjtBRXhKUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjSHRIRztFR3VISCxpQkFBQTtFQUNBLGtCQUFBO0FGMEpaO0FFekpZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FGMkpoQjtBRXpKWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRjJKaEI7QUUxSmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FGNEpwQjtBRXZKSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0FGeUpSO0FFeEpRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0g3Skc7RUc4SkgsbUJBQUE7QUYwSlo7QUV2Skk7RUFDSTtJQUNJLGVBQUE7RUZ5SlY7QUFDRjtBRXZKSTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7WUFBQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUZ5SlY7RUV2SmM7SUFDSSxVQUFBO0lBQ0EsNENBQUE7RUZ5SmxCO0FBQ0Y7QUVySkk7RUFsTUo7SUFtTVEsZUFBQTtFRndKTjtFRXZKTTtJQUNJLGVBQUE7RUZ5SlY7RUV4SlU7SUFDSSxlQUFBO0VGMEpkO0VFdkpNO0lBQ0ksZUFBQTtFRnlKVjtFRXZKTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFRnlKVjtFRXZKTTtJQUNJLGNBQUE7RUZ5SlY7RUV2Sk07SUFDSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUZ5SlY7RUVySlU7SUFDSSxlQUFBO0VGdUpkO0FBQ0Y7QUVsSkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZ0VBQUE7RUFBQSx3REFBQTtFQUFBLGdEQUFBO0VBQUEsOEVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUZxSko7QUVwSkk7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FGc0pSO0FFbkpJO0VBZko7SUFnQlEsY0FBQTtFRnNKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWNvbnRlbnQtYWxsL2NoYXB0ZXItY29udGVudC1hbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uY2hhcHRlci1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBsaW5lLWhlaWdodDogMS43ODtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuY29sLW1kLTYgPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiA4OHB4O1xuICBjb2xvcjogI2YyNjY1ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcge1xuICBtYXJnaW46IDQwcHggMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX2ltZyBmaWdjYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWF4LXdpZHRoOiAxNnB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAxMDAlO1xuICB3aWR0aDogNDElO1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeV9faXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YzFkMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDI4ZWQ0O1xuICBiYWNrZ3JvdW5kOiAjMDI4ZWQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgICB3aWR0aDogNDNweDtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgbGVmdDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMDtcbn1cbi5maXgtc2Nyb2xsLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuZml4LXNjcm9sbCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmNoYXB0ZXItY29udGVudCAudGFnIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyOGVkNDtcbiAgcGFkZGluZzogOXB4IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9fdGl0bGUge1xuICBmb250LXNpemU6IDU2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG59XG4uY2hhcHRlci1jb250ZW50X190aXRsZS0tc2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9fc3VidGl0bGUge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLmNoYXB0ZXItY29udGVudCAudGV4dC1iaWcge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xufVxuLmNoYXB0ZXItY29udGVudCAucm93OmZpcnN0LWNoaWxkIC5jb2wtbWQtNiA+IHA6Zmlyc3Qtb2YtdHlwZTpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDg4cHg7XG4gIGNvbG9yOiAjZjI2NjVlO1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX2ltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICB3aWR0aDogNDAlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGVmdDogMTAwJTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnXCIpO1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBsZWZ0OiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUgY2l0ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZSBjaXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC1vcmFuZ2Uuc3ZnXCIpO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZS5ibG9ja3F1b3RlX193aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDkwcHggMCAyMHB4IDA7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZS5ibG9ja3F1b3RlX193aGl0ZTpiZWZvcmUge1xuICB0b3A6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19pbWFnZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICByaWdodDogNCU7XG4gIGxlZnQ6IGluaXRpYWw7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19pbWFnZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xlZnQtcXVvdGUuc3ZnXCIpO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2UgY2l0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2UgY2l0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLXdoaXRlLnN2Z1wiKTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2JpZyB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBtYXJnaW46IDQwcHggMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2JpZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnXCIpO1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBsZWZ0OiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fYmlnIGNpdGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2JpZyBjaXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC1vcmFuZ2Uuc3ZnXCIpO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG4uY2hhcHRlci1jb250ZW50IC5saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAyN3B4O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtb3JhbmdlLnN2Z1wiKTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmxpc3QgbGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2hhcHRlci1jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZS5ibG9ja3F1b3RlX19pbWFnZTpiZWZvcmUge1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnXCIpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudF9fdGl0bGUtLXNlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50X19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudF9faW1nIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGNvbG9yOiAjMDEyNDYxO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5saXN0IGxpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMDtcbn1cbi5maXgtc2Nyb2xsLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuZml4LXNjcm9sbCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmNoYXB0ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogNzBweCAwO1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc4O1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAuY29sLW1kLTYge1xuICAgICAgICAgICAgICAgICYgPiBwIHtcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlOmZpcnN0LWxldHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDg4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDg5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9faW1nIHtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgZmlnY2FwdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDQxJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xlYXI7XG4gICAgfVxuICAgIC5nYWxsZXJ5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2hhcmUge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcblx0XHQmLS1pdGVte1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRtYXJnaW46IDhweCAwO1xuXHRcdFx0JjpmaXJzdC1jaGlsZHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ji0tbGlua3tcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDUycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUycHg7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdFx0Jjpob3Zlcntcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkYmx1ZTtcblx0XHRcdFx0YmFja2dyb3VuZDogJGJsdWU7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Y29sb3I6ICRjbGVhcjtcblx0XHRcdH1cblx0XHR9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgICAgLnNoYXJlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5zaGFyZSB7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICYtLWxpbmsge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDNweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IGluaGVyaXQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICB9XG4gICAgICAgIC5zaGFyZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZml4LXNjcm9sbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDA7XG4gICAgJi5maXhlZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9jaGFwdGVyLWNvbnRlbnQvY2hhcHRlci1jb250ZW50LmNvbXBvbmVudC5zY3NzXCI7XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICAgIC50YWcge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgY29sb3I6ICRjbGVhcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICAgIHBhZGRpbmc6IDlweCAxNHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0O1xuICAgICAgICAmLS1zZWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG4gICAgLnRleHQtYmlnIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgLmNvbC1tZC02IHtcbiAgICAgICAgICAgICAgICAmID4gcCB7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZTpmaXJzdC1sZXR0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICZfX2ltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmJsb2NrcXVvdGUge1xuICAgICAgICAmX19xdW90ZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogLTcwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xlZnQtcXVvdGUtYmx1ZS5zdmcnKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNpdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5ibG9ja3F1b3RlX193aGl0ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNsZWFyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDkwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgICAgICByaWdodDogNCU7XG4gICAgICAgICAgICBsZWZ0OiBpbml0aWFsO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLnN2ZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2l0ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjbGVhcjtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtd2hpdGUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX2JpZyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xlZnQtcXVvdGUtYmx1ZS5zdmcnKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNpdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLW9yYW5nZS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubGlzdCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjdweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtb3JhbmdlLnN2ZycpO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43ODtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5ibG9ja3F1b3RlX19xdW90ZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IGluaGVyaXQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICAgICAgICAgICYuYmxvY2txdW90ZV9faW1hZ2Uge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xlZnQtcXVvdGUtYmx1ZS5zdmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgJi0tc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cbiAgICAgICAgJl9faW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9ja3F1b3RlX19xdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAxMjQ2MTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgei1pbmRleDogMDtcbiAgICAmLmZpeGVkIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/chapter-content-all/chapter-content-all.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/chapter-content-all/chapter-content-all.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChapterContentAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterContentAllComponent", function() { return ChapterContentAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emitter/emitter.service */ "./src/app/services/emitter/emitter.service.ts");




let ChapterContentAllComponent = class ChapterContentAllComponent {
    constructor(window, renderer) {
        this.window = window;
        this.renderer = renderer;
        this.isFloatContainerFixed = false;
        this.accordionContent = [
            {
                'title': 'Alicerce',
                'content': 'Oferece um curso preparatório de dois anos de duração no contraturno escolar. O curso acontece em uma escola particular parceira do Ismart. O objetivo é preparar os bolsistas para o ingresso no ensino médio nas escolas em que realizam o curso. Podem se candidatar ao Alicerce alunos matriculados no 7º ano do ensino fundamental, com até 13 anos completos e vindos de famílias com renda per capita de no máximo dois salários mínimos.'
            },
            {
                'title': 'Bolsa Talento',
                'content': 'Conteúdo Bolsa Talento'
            },
            {
                'title': 'Ismart Online',
                'content': 'Conteúdo Ismart Online'
            },
            {
                'title': 'Ensino superior',
                'content': 'Conteúdo Ensino superior'
            },
            {
                'title': 'Alumni',
                'content': 'Conteúdo Alumni'
            }
        ];
    }
    ngOnInit() {
        this.floatContainerStartPos = this.floatContainer.nativeElement.offsetTop;
        this.subscription = this.testimonialPosition.subscribe(({ offsetTop, offsetHeight }) => {
            if (!(offsetTop && offsetHeight))
                return;
            this.floatContainerEndPos = offsetTop + (offsetHeight / 2) - 210;
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        });
        src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EmitterService"].get('headerOpen').subscribe(isOpen => {
            if (isOpen) {
                this.renderer.setStyle(this.floatContainer.nativeElement, 'transform', 'translateY(100px)');
            }
            else {
                this.renderer.removeStyle(this.floatContainer.nativeElement, 'transform');
            }
        });
    }
    onWindowScroll(event) {
        const currentScroll = this.window.pageYOffset;
        if (currentScroll >= this.floatContainerStartPos) {
            this.isFloatContainerFixed = true;
        }
        else {
            this.isFloatContainerFixed = false;
        }
        if (currentScroll + 100 >= this.floatContainerEndPos && this.floatContainerEndPos) {
            this.setAbsolutePosition();
        }
        else {
            this.removeAbsolutePosition();
        }
    }
    setAbsolutePosition() {
        this.renderer.setStyle(this.floatContainer.nativeElement, 'transition', `none`);
        this.renderer.setStyle(this.floatContainer.nativeElement, 'top', `${this.floatContainerEndPos}px`);
        this.renderer.setStyle(this.floatContainer.nativeElement, 'position', 'absolute');
        this.renderer.setStyle(this.floatContainer.nativeElement, 'width', '100%');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'transform');
    }
    removeAbsolutePosition() {
        setTimeout(() => {
            this.renderer.removeStyle(this.floatContainer.nativeElement, 'transition');
        }, 200);
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'top');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'position');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'width');
    }
};
ChapterContentAllComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('testimonialPosition')
], ChapterContentAllComponent.prototype, "testimonialPosition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('floatContainer', { static: true })
], ChapterContentAllComponent.prototype, "floatContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], ChapterContentAllComponent.prototype, "onWindowScroll", null);
ChapterContentAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter-content-all',
        template: __webpack_require__(/*! raw-loader!./chapter-content-all.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chapter-content-all/chapter-content-all.component.html"),
        styles: [__webpack_require__(/*! ./chapter-content-all.component.scss */ "./src/app/components/chapter-content-all/chapter-content-all.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]))
], ChapterContentAllComponent);



/***/ }),

/***/ "./src/app/components/chapter-content/chapter-content.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/chapter-content/chapter-content.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWNvbnRlbnQvY2hhcHRlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXB0ZXItY29udGVudC9jaGFwdGVyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iZXRvL0RvY3VtZW50cy9kZXYvaXNtYXJ0LXJhMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ2ZEO0FDSEE7RUFDSSxlQUFBO0FETUo7QUNMSTtFQUNJLGVBQUE7RUFDQSxjRk9PO0VFTlAsaUJBQUE7QURPUjtBQ0RvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURHeEI7QUNHSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRERSO0FDRVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBREFaO0FDRVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnRCRztFRXVCSCxnQkFBQTtBREFaO0FDQ1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURDaEI7QUNHSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0Z2Q087RUV3Q1AsZUFBQTtFQUNBLHlCRjlDSztBQzZDYjtBQ0dJO0VBQ0ksaUJBQUE7QUREUjtBQ0VRO0VBQ0ksa0JBQUE7QURBWjtBQ0NZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRENoQjtBQ0dJO0VBQ0ksZ0JBQUE7RUFDTixVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ00sUUFBQTtFQUNBLE1BQUE7QUREUjtBQ0VFO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QURBSDtBQ0NHO0VBQ0MsYUFBQTtBRENKO0FDRUU7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNTLFlBQUE7RUFDVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0YxRVk7RUUyRUgsaUJBQUE7RUFDQSxlQUFBO0VBQ1Qsa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FEQUg7QUNDRztFQUNDLHFCRmpGTTtFRWtGTixtQkZsRk07RUVtRk4scUJBQUE7RUFDQSxjRnhGUztBQ3lGYjtBQ0dJO0VBQ0k7SUFDSSxXQUFBO0VERFY7QUFDRjtBQ0dJO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUREVjtBQUNGO0FDR0k7RUFDSTtJQUNJLFdBQUE7RUREVjtFQ0VVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RURBZDtFQ0dNO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7WUFBQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VERFY7QUFDRjtBQ0dJO0VBQ0k7SUFDSSxVQUFBO0VERFY7RUNHTTtJQUNJLGFBQUE7RUREVjtBQUNGO0FDS0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZ0VBQUE7RUFBQSx3REFBQTtFQUFBLGdEQUFBO0VBQUEsOEVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QURGSjtBQ0dJO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRERSO0FDSUk7RUFmSjtJQWdCUSxjQUFBO0VERE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcHRlci1jb250ZW50L2NoYXB0ZXItY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuJGxhdG86IFx0XHRcdCdMYXRvJywgQXJpYWwsIFZlcmRhbmE7XG4kbW9udHNlcnJhdFx0OiBcdCdNb250c2VycmF0JywgQXJpYWwsIFZlcmRhbmE7XG5cbi8vIENvbG9yc1xuJGNsZWFyOiAgICAgXHQjZmZmZmZmO1xuJGRhcms6ICAgICAgXHQjMDAwMDAwO1xuJGdyZXk6XHRcdFx0I2I3YzFkMjtcbiRibHVlLWNsZWFyOlx0I2Q0ZWZmYztcbiRibHVlOiBcdFx0XHQjMDI4ZWQ0O1xuJGJsdWUtbWVkaXVtOiBcdCMwMTI0NjE7XG4kYmx1ZS1kYXJrOiBcdCMyMDI3MzQ7XG4kb3JhbmdlOlx0XHQjZjI2NjVlO1xuXG5cbjpyb290IHtcblx0LS1vcmFuZ2U6ICNmMjY2NWU7XG5cdC0tYmx1ZS1tOiAjMDEyNDYxO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4uY2hhcHRlci1jb250ZW50IHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDEuNzg7XG59XG4uY2hhcHRlci1jb250ZW50IC5yb3c6Zmlyc3QtY2hpbGQgLmNvbC1tZC02ID4gcDpmaXJzdC1vZi10eXBlOmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogODhweDtcbiAgY29sb3I6ICNmMjY2NWU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogODlweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGZpZ2NhcHRpb24gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIG1heC13aWR0aDogMTZweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDQxJTtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgY29sb3I6ICMwMTI0NjE7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnkge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhcHRlci1jb250ZW50IC5nYWxsZXJ5X19pdGVtIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2MxZDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluazpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAyOGVkNDtcbiAgYmFja2dyb3VuZDogIzAyOGVkNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluayB7XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG4uZml4LXNjcm9sbC5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZpeC1zY3JvbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43ODtcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgLmNvbC1tZC02IHtcbiAgICAgICAgICAgICAgICAmID4gcCB7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZTpmaXJzdC1sZXR0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICZfX2ltZyB7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGZpZ2NhcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNsZWFyO1xuICAgIH1cbiAgICAuZ2FsbGVyeSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNoYXJlIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cdFx0Ji0taXRlbXtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiA4cHggMDtcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYtLWxpbmt7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJGdyZXk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRibHVlO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGNvbG9yOiAkY2xlYXI7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIC5zaGFyZSB7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAmLS1saW5rIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRvcCAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAwO1xuICAgICYuZml4ZWQge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chapter-content/chapter-content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/chapter-content/chapter-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChapterContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterContentComponent", function() { return ChapterContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emitter/emitter.service */ "./src/app/services/emitter/emitter.service.ts");





let ChapterContentComponent = class ChapterContentComponent {
    constructor(window, renderer) {
        this.window = window;
        this.renderer = renderer;
        this.isFloatContainerFixed = false;
    }
    ngOnInit() {
        this.floatContainerStartPos = this.floatContainer.nativeElement.offsetTop;
        src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EmitterService"].get('headerOpen').subscribe(isOpen => {
            if (isOpen) {
                this.renderer.setStyle(this.floatContainer.nativeElement, 'transform', 'translateY(100px)');
            }
            else {
                this.renderer.removeStyle(this.floatContainer.nativeElement, 'transform');
            }
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.floatContainerEndPos = this.articleContainer.nativeElement.offsetHeight - 220;
        }, 2000);
    }
    onWindowScroll(event) {
        const currentScroll = this.window.pageYOffset;
        if (currentScroll >= this.floatContainerStartPos) {
            this.isFloatContainerFixed = true;
        }
        else {
            this.isFloatContainerFixed = false;
        }
        if (currentScroll + 100 >= this.floatContainerEndPos && this.floatContainerEndPos) {
            this.setAbsolutePosition();
        }
        else {
            this.removeAbsolutePosition();
        }
    }
    setAbsolutePosition() {
        this.renderer.setStyle(this.floatContainer.nativeElement, 'transition', `none`);
        this.renderer.setStyle(this.floatContainer.nativeElement, 'top', `${this.floatContainerEndPos}px`);
        this.renderer.setStyle(this.floatContainer.nativeElement, 'position', 'absolute');
        this.renderer.setStyle(this.floatContainer.nativeElement, 'width', '100%');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'transform');
    }
    removeAbsolutePosition() {
        setTimeout(() => {
            this.renderer.removeStyle(this.floatContainer.nativeElement, 'transition');
        }, 200);
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'top');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'position');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'width');
    }
};
ChapterContentComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('articleContainer', { static: true })
], ChapterContentComponent.prototype, "articleContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('floatContainer', { static: true })
], ChapterContentComponent.prototype, "floatContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], ChapterContentComponent.prototype, "onWindowScroll", null);
ChapterContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter-content',
        template: __webpack_require__(/*! raw-loader!./chapter-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chapter-content/chapter-content.component.html"),
        styles: [__webpack_require__(/*! ./chapter-content.component.scss */ "./src/app/components/chapter-content/chapter-content.component.scss")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]))
], ChapterContentComponent);



/***/ }),

/***/ "./src/app/components/chapter-hat/chapter-hat.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/chapter-hat/chapter-hat.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-hat {\n  margin-top: 75px;\n  text-align: center;\n  padding: 70px 0;\n  background-position: center;\n  background-size: cover;\n}\n.chapter-hat__title {\n  color: #ffffff;\n  text-transform: uppercase;\n}\n.chapter-hat__title h2 {\n  font-size: 14px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  margin-bottom: 5px;\n  font-weight: normal;\n}\n.chapter-hat__title h1 {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: \"Montserrat\", Arial, Verdana;\n}\n@media (max-width: 540px) {\n  .chapter-hat__title h1 {\n    font-size: 21px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWhhdC9jaGFwdGVyLWhhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWhhdC9jaGFwdGVyLWhhdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9GQUFBO0FBQ0Esa0dBQUE7QUFnQlI7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDZkQ7QUNIQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBRE1KO0FDTEk7RUFDSSxjRkRLO0VFRUwseUJBQUE7QURPUjtBQ05RO0VBQ0ksZUFBQTtFQUNBLHlDRlJHO0VFU0gsa0JBQUE7RUFDQSxtQkFBQTtBRFFaO0FDTlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0ZmRztBQ3VCZjtBQ0xJO0VBRVE7SUFDSSxlQUFBO0VETWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcHRlci1oYXQvY2hhcHRlci1oYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuLmNoYXB0ZXItaGF0IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jaGFwdGVyLWhhdF9fdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jaGFwdGVyLWhhdF9fdGl0bGUgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5jaGFwdGVyLWhhdF9fdGl0bGUgaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5jaGFwdGVyLWhhdF9fdGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY2hhcHRlci1oYXQge1xuICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAmX190aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chapter-hat/chapter-hat.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chapter-hat/chapter-hat.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChapterHatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterHatComponent", function() { return ChapterHatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChapterHatComponent = class ChapterHatComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data')
], ChapterHatComponent.prototype, "data", void 0);
ChapterHatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter-hat',
        template: __webpack_require__(/*! raw-loader!./chapter-hat.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chapter-hat/chapter-hat.component.html"),
        styles: [__webpack_require__(/*! ./chapter-hat.component.scss */ "./src/app/components/chapter-hat/chapter-hat.component.scss")]
    })
], ChapterHatComponent);



/***/ }),

/***/ "./src/app/components/chapters/chapters.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/chapters/chapters.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapters {\n  background: #012461;\n  padding: 65px 0;\n}\n.chapters__title {\n  font-size: 32px;\n  color: #ffffff;\n  font-family: \"Montserrat\", Arial, Verdana;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n  text-align: center;\n  margin: 0;\n}\n.chapters__item {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  height: 135px;\n  position: relative;\n}\n.chapters__item--figure {\n  width: 100%;\n  height: 160px;\n  margin: 0;\n  position: absolute;\n  left: 0;\n  bottom: 17px;\n  overflow: hidden;\n  border-radius: 4px;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapters__item--image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.8;\n}\n.chapters__item--content {\n  padding: 45px 25px;\n  position: relative;\n}\n.chapters__item--number {\n  display: block;\n  font-size: 12px;\n  color: #f2665e;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  text-transform: uppercase;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapters__item--title {\n  font-size: 14px;\n  color: #ffffff;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.chapters__item a:hover {\n  text-decoration: none;\n}\n.chapters__item a:hover .chapters__item--figure {\n  opacity: 1;\n  visibility: visible;\n}\n.chapters__item a:hover .chapters__item--number {\n  color: #ffffff;\n}\n.chapters__item:last-child {\n  border-bottom: none;\n}\n.chapters__hide {\n  display: none;\n}\n@media (max-width: 540px) {\n  .chapters {\n    padding-top: 30px;\n  }\n  .chapters__title {\n    font-size: 21px;\n  }\n  .chapters__item--content {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVycy9jaGFwdGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVycy9jaGFwdGVycy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9GQUFBO0FBQ0Esa0dBQUE7QUFnQlI7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDZkQ7QUNIQTtFQUNDLG1CRlVjO0VFVGQsZUFBQTtBRE1EO0FDSkM7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlDRkphO0VFS2IsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FETUY7QUNIQztFQUNDLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FES0Y7QUNKRTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRE1IO0FDSkU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0FETUg7QUNKRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7QURNSDtBQ0pFO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjRmhDTztFRWlDUCxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNGN0NZO0VFOENaLHlCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRE1IO0FDSkU7RUFDQyxlQUFBO0VBQ0EsY0ZoRFU7RUVpRFYsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBRE1IO0FDSkU7RUFDQyxxQkFBQTtBRE1IO0FDTEc7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7QURPSjtBQ0xHO0VBQ0MsY0Y3RFM7QUNvRWI7QUNKRTtFQUNDLG1CQUFBO0FETUg7QUNIQztFQUNDLGFBQUE7QURLRjtBQ0hDO0VBN0VEO0lBOEVFLGlCQUFBO0VETUE7RUNMQTtJQUNDLGVBQUE7RURPRDtFQ0pDO0lBQ0MsZUFBQTtFRE1GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXB0ZXJzL2NoYXB0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kbGF0bzogXHRcdFx0J0xhdG8nLCBBcmlhbCwgVmVyZGFuYTtcbiRtb250c2VycmF0XHQ6IFx0J01vbnRzZXJyYXQnLCBBcmlhbCwgVmVyZGFuYTtcblxuLy8gQ29sb3JzXG4kY2xlYXI6ICAgICBcdCNmZmZmZmY7XG4kZGFyazogICAgICBcdCMwMDAwMDA7XG4kZ3JleTpcdFx0XHQjYjdjMWQyO1xuJGJsdWUtY2xlYXI6XHQjZDRlZmZjO1xuJGJsdWU6IFx0XHRcdCMwMjhlZDQ7XG4kYmx1ZS1tZWRpdW06IFx0IzAxMjQ2MTtcbiRibHVlLWRhcms6IFx0IzIwMjczNDtcbiRvcmFuZ2U6XHRcdCNmMjY2NWU7XG5cblxuOnJvb3Qge1xuXHQtLW9yYW5nZTogI2YyNjY1ZTtcblx0LS1ibHVlLW06ICMwMTI0NjE7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbi5jaGFwdGVycyB7XG4gIGJhY2tncm91bmQ6ICMwMTI0NjE7XG4gIHBhZGRpbmc6IDY1cHggMDtcbn1cbi5jaGFwdGVyc19fdGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbi5jaGFwdGVyc19faXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGhlaWdodDogMTM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGFwdGVyc19faXRlbS0tZmlndXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDE3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi5jaGFwdGVyc19faXRlbS0taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNoYXB0ZXJzX19pdGVtLS1jb250ZW50IHtcbiAgcGFkZGluZzogNDVweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlcnNfX2l0ZW0tLW51bWJlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZjI2NjVlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLmNoYXB0ZXJzX19pdGVtLS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNoYXB0ZXJzX19pdGVtIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2hhcHRlcnNfX2l0ZW0gYTpob3ZlciAuY2hhcHRlcnNfX2l0ZW0tLWZpZ3VyZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uY2hhcHRlcnNfX2l0ZW0gYTpob3ZlciAuY2hhcHRlcnNfX2l0ZW0tLW51bWJlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNoYXB0ZXJzX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmNoYXB0ZXJzX19oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuY2hhcHRlcnMge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5jaGFwdGVyc19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxuICAuY2hhcHRlcnNfX2l0ZW0tLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY2hhcHRlcnN7XG5cdGJhY2tncm91bmQ6ICRibHVlLW1lZGl1bTtcblx0cGFkZGluZzogNjVweCAwO1xuXG5cdCZfX3RpdGxle1xuXHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRjb2xvcjogJGNsZWFyO1xuXHRcdGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0Jl9faXRlbXtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuXHRcdGhlaWdodDogMTM1cHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCYtLWZpZ3VyZXtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRib3R0b206IDE3cHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdH1cblx0XHQmLS1pbWFnZXtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRvcGFjaXR5OiAwLjg7XG5cdFx0fVxuXHRcdCYtLWNvbnRlbnR7XG5cdFx0XHRwYWRkaW5nOiA0NXB4IDI1cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXHRcdCYtLW51bWJlcntcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0Y29sb3I6ICRvcmFuZ2U7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6ICRtb250c2VycmF0O1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdH1cblx0XHQmLS10aXRsZXtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAkY2xlYXI7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHR9XG5cdFx0YTpob3Zlcntcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdC5jaGFwdGVyc19faXRlbS0tZmlndXJle1xuXHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdFx0fVxuXHRcdFx0LmNoYXB0ZXJzX19pdGVtLS1udW1iZXJ7XG5cdFx0XHRcdGNvbG9yOiAkY2xlYXI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCY6bGFzdC1jaGlsZHtcblx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0fVxuXHR9XG5cdCZfX2hpZGUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0QG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG5cdFx0cGFkZGluZy10b3A6IDMwcHg7XG5cdFx0Jl9fdGl0bGUge1xuXHRcdFx0Zm9udC1zaXplOiAyMXB4O1xuXHRcdH1cblx0XHQmX19pdGVtIHtcblx0XHRcdCYtLWNvbnRlbnQge1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chapters/chapters.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/chapters/chapters.component.ts ***!
  \***********************************************************/
/*! exports provided: ChaptersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptersComponent", function() { return ChaptersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChaptersComponent = class ChaptersComponent {
    constructor() {
        this.onCloseChapters = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    fecharModal() {
        this.onCloseChapters.emit(false);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChaptersComponent.prototype, "onCloseChapters", void 0);
ChaptersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapters',
        template: __webpack_require__(/*! raw-loader!./chapters.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chapters/chapters.component.html"),
        styles: [__webpack_require__(/*! ./chapters.component.scss */ "./src/app/components/chapters/chapters.component.scss")]
    })
], ChaptersComponent);



/***/ }),

/***/ "./src/app/components/float-container/float-container.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/float-container/float-container.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float-container {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.float-container.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .float-container {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9mbG9hdC1jb250YWluZXIvZmxvYXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zsb2F0LWNvbnRhaW5lci9mbG9hdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZ0VBQUE7RUFBQSx3REFBQTtFQUFBLGdEQUFBO0VBQUEsOEVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRDtBREFDO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0VIO0FEQ0M7RUFmRDtJQWdCRyxjQUFBO0VDRUQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmxvYXQtY29udGFpbmVyL2Zsb2F0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG5cdG1heC13aWR0aDogOTAlO1xuXHRtYXJnaW46IDAgYXV0bztcblx0ei1pbmRleDogMDtcblx0Ji5maXhlZCB7XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDIwcHg7XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XG5cdFx0XHRtYXgtd2lkdGg6IDgwJTtcblx0fVxufVxuIiwiLmZsb2F0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IHRvcCAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAwO1xufVxuLmZsb2F0LWNvbnRhaW5lci5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZsb2F0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/float-container/float-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/float-container/float-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: FloatContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatContainerComponent", function() { return FloatContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emitter/emitter.service */ "./src/app/services/emitter/emitter.service.ts");




let FloatContainerComponent = class FloatContainerComponent {
    constructor(window, renderer) {
        this.window = window;
        this.renderer = renderer;
        this.isFloatContainerFixed = false;
    }
    ngOnInit() {
        this.listenForHeaderOpen();
        console.log(`elementos`, this.startPosEl, this.endPosEl);
    }
    ngAfterViewInit() {
        this.startPos = this.startPosEl.offsetTop;
        this.endPos = this.endPosEl.offsetHeight;
        console.log(`inicio ${this.startPos} e fim ${this.endPos}`);
    }
    onWindowScroll(event) {
        const currentScroll = this.window.pageYOffset;
        console.log(currentScroll, this.startPos);
        if (currentScroll >= this.startPos) {
            this.isFloatContainerFixed = true;
        }
        else {
            this.isFloatContainerFixed = false;
        }
        if (currentScroll >= this.endPos && this.endPos) {
            this.setAbsolutePosition();
        }
        else {
            this.removeAbsolutePosition();
        }
    }
    listenForHeaderOpen() {
        src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EmitterService"].get('headerOpen').subscribe(isOpen => {
            if (isOpen && this.window.pageYOffset - 100 > this.startPos) {
                this.renderer.setStyle(this.floatContainer.nativeElement, 'transform', 'translateY(100px)');
            }
            else {
                this.renderer.removeStyle(this.floatContainer.nativeElement, 'transform');
            }
        });
    }
    setAbsolutePosition() {
        this.renderer.setStyle(this.floatContainer.nativeElement, 'transition', `none`);
        this.renderer.setStyle(this.floatContainer.nativeElement, 'top', `${this.endPos - (this.child.offsetHeight) + 200}px`);
        this.renderer.setStyle(this.floatContainer.nativeElement, 'position', 'absolute');
        this.renderer.setStyle(this.floatContainer.nativeElement, 'width', '100%');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'transform');
    }
    removeAbsolutePosition() {
        setTimeout(() => {
            this.renderer.removeStyle(this.floatContainer.nativeElement, 'transition');
        }, 200);
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'top');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'position');
        this.renderer.removeStyle(this.floatContainer.nativeElement, 'width');
    }
};
FloatContainerComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('floatContainer', { static: true })
], FloatContainerComponent.prototype, "floatContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FloatContainerComponent.prototype, "startPosEl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FloatContainerComponent.prototype, "endPosEl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FloatContainerComponent.prototype, "child", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], FloatContainerComponent.prototype, "onWindowScroll", null);
FloatContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-float-container',
        template: __webpack_require__(/*! raw-loader!./float-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/float-container/float-container.component.html"),
        styles: [__webpack_require__(/*! ./float-container.component.scss */ "./src/app/components/float-container/float-container.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]))
], FloatContainerComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.footer {\n  background: #202734;\n  padding-top: 35px;\n}\n.footer__nav {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n.footer__nav--item {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 12px;\n}\n.footer__nav--item:first-child {\n  margin-left: 0;\n}\n.footer__nav--item:last-child {\n  margin-right: 0;\n}\n.footer__nav--link {\n  font-size: 16px;\n  color: #b7c1d2;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.footer__nav--link:hover {\n  color: #028ed4;\n  text-decoration: none;\n}\n.footer__social {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.footer__social--item {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 4px;\n}\n.footer__social--item:first-child {\n  margin-left: 0;\n}\n.footer__social--item:last-child {\n  margin-right: 0;\n}\n.footer__social--link {\n  display: block;\n  width: 43px;\n  height: 43px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #b7c1d2;\n  line-height: 41px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.footer__social--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n.footer__helper {\n  border-top: solid 1px #5a6b87;\n  padding: 30px 0;\n  margin-top: 30px;\n}\n.footer__helper p {\n  margin: 0;\n  font-size: 13px;\n  color: #b7c1d2;\n}\n.footer__helper p a {\n  color: #b7c1d2;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.footer__helper p a:hover {\n  color: #028ed4;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iZXRvL0RvY3VtZW50cy9kZXYvaXNtYXJ0LXJhMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ2ZEO0FDSEE7RUFDQyxtQkZXWTtFRVZaLGlCQUFBO0FETUQ7QUNKQztFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBRE1GO0FDTEU7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBRE9IO0FDTkc7RUFDQyxjQUFBO0FEUUo7QUNORztFQUNDLGVBQUE7QURRSjtBQ0xFO0VBQ0MsZUFBQTtFQUNBLGNGZE07RUVlTixxQ0FBQTtFQUFBLDZCQUFBO0FET0g7QUNORztFQUNDLGNGZk07RUVnQk4scUJBQUE7QURRSjtBQ0hDO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FES0Y7QUNKRTtFQUNDLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FETUg7QUNMRztFQUNDLGNBQUE7QURPSjtBQ0xHO0VBQ0MsZUFBQTtBRE9KO0FDSkU7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0Y3Q007RUU4Q04saUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QURNSDtBQ0xHO0VBQ0MscUJGaERNO0VFaUROLG1CRmpETTtFRWtETixxQkFBQTtFQUNBLGNGdkRTO0FDOERiO0FDRkM7RUFDQyw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRElGO0FDSEU7RUFDQyxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNGakVNO0FDc0VUO0FDSkc7RUFDQyxjRm5FSztFRW9FTCxxQ0FBQTtFQUFBLDZCQUFBO0FETUo7QUNMSTtFQUNDLGNGcEVLO0VFcUVMLHFCQUFBO0FET0wiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMyMDI3MzQ7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xufVxuLmZvb3Rlcl9fbmF2IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyX19uYXYtLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuLmZvb3Rlcl9fbmF2LS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uZm9vdGVyX19uYXYtLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5mb290ZXJfX25hdi0tbGluayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNiN2MxZDI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLmZvb3Rlcl9fbmF2LS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMjhlZDQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb290ZXJfX3NvY2lhbCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZm9vdGVyX19zb2NpYWwtLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCA0cHg7XG59XG4uZm9vdGVyX19zb2NpYWwtLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5mb290ZXJfX3NvY2lhbC0taXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmZvb3Rlcl9fc29jaWFsLS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2MxZDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNiN2MxZDI7XG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLmZvb3Rlcl9fc29jaWFsLS1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDI4ZWQ0O1xuICBiYWNrZ3JvdW5kOiAjMDI4ZWQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmZvb3Rlcl9faGVscGVyIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM1YTZiODc7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5mb290ZXJfX2hlbHBlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjdjMWQyO1xufVxuLmZvb3Rlcl9faGVscGVyIHAgYSB7XG4gIGNvbG9yOiAjYjdjMWQyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi5mb290ZXJfX2hlbHBlciBwIGE6aG92ZXIge1xuICBjb2xvcjogIzAyOGVkNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uZm9vdGVye1xuXHRiYWNrZ3JvdW5kOiAkYmx1ZS1kYXJrO1xuXHRwYWRkaW5nLXRvcDogMzVweDtcblxuXHQmX19uYXZ7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Ji0taXRlbXtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRtYXJnaW46IDAgMTJweDtcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0fVxuXHRcdFx0JjpsYXN0LWNoaWxke1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYtLWxpbmt7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogJGdyZXk7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGNvbG9yOiAkYmx1ZTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCZfX3NvY2lhbHtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdCYtLWl0ZW17XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0bWFyZ2luOiAwIDRweDtcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0fVxuXHRcdFx0JjpsYXN0LWNoaWxke1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYtLWxpbmt7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiA0M3B4O1xuXHRcdFx0aGVpZ2h0OiA0M3B4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJGdyZXk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogJGdyZXk7XG5cdFx0XHRsaW5lLWhlaWdodDogNDFweDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdFx0Jjpob3Zlcntcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkYmx1ZTtcblx0XHRcdFx0YmFja2dyb3VuZDogJGJsdWU7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Y29sb3I6ICRjbGVhcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQmX19oZWxwZXJ7XG5cdFx0Ym9yZGVyLXRvcDogc29saWQgMXB4ICM1YTZiODc7XG5cdFx0cGFkZGluZzogMzBweCAwOyBcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdHB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRjb2xvcjogJGdyZXk7XG5cdFx0XHRhe1xuXHRcdFx0XHRjb2xvcjogJGdyZXk7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdFx0XHQmOmhvdmVye1xuXHRcdFx0XHRcdGNvbG9yOiAkYmx1ZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.header {\n  background: #ffffff;\n  padding: 25px 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n}\n.header__button {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 20px;\n  font-size: 14px;\n  text-transform: uppercase;\n  line-height: 16px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #012461;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.header__button--icon {\n  display: inline-block;\n  margin-top: -2px;\n  margin-right: 4px;\n  color: inherit;\n  fill: currentColor;\n}\n.header__button:last-child {\n  margin-right: 0;\n}\n.header__button:hover {\n  color: #f2665e;\n}\n.header__button:focus {\n  outline: none;\n}\n.header__button--chapters:hover .header__button--icon use {\n  fill: #f2665e;\n}\n.header__title--image {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n  margin-top: -3px;\n}\n.header__title--excerpt {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  font-family: \"Montserrat\", Arial, Verdana;\n  font-size: 14px;\n  color: #202734;\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.header__toggle {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #012461;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.header__toggle--icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px;\n}\n.header__toggle--icon span {\n  display: block;\n  width: 16px;\n  height: 2px;\n  background: #012461;\n  border-radius: 2px;\n  margin-bottom: 4px;\n}\n.header__toggle--icon span:last-child {\n  margin-bottom: 0;\n}\n.header__toggle:hover {\n  color: #f2665e;\n}\n.header__toggle:focus {\n  outline: none;\n}\n.header__chapters {\n  position: fixed;\n  width: 100vw;\n  left: 0px;\n  top: 74px;\n  overflow-y: scroll;\n  max-height: 100vh;\n}\n.header.chapters-opened .header__button--icon {\n  fill: #f2665e;\n}\n@media (max-width: 800px) {\n  .header__button--chapters .header__button--text {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .header__title--excerpt {\n    display: none;\n  }\n}\n@media (max-width: 540px) {\n  .header__button--chapters {\n    margin-right: 15px;\n  }\n  .header__button--icon {\n    margin-right: 0;\n  }\n  .header__toggle--text {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iZXRvL0RvY3VtZW50cy9kZXYvaXNtYXJ0LXJhMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ2ZEO0FDSEE7RUFDQyxtQkZLWTtFRUpaLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRE1EO0FDTEM7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNGaEJhO0VFaUJiLGNGVGE7RUVVYixxQ0FBQTtFQUFBLDZCQUFBO0FET0Y7QUNORTtFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRFFIO0FDTkU7RUFDQyxlQUFBO0FEUUg7QUNORTtFQUNDLGNGcEJPO0FDNEJWO0FDTkU7RUFDQyxhQUFBO0FEUUg7QUNISztFQUNDLGFGN0JJO0FDa0NWO0FDRUU7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBREFIO0FDRUU7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHlDRnhEWTtFRXlEWixlQUFBO0VBQ0EsY0ZqRFU7RUVrRFYscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FEQUg7QUNHQztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlDRnRFYTtFRXVFYixjRi9EYTtFRWdFYixxQ0FBQTtFQUFBLDZCQUFBO0FEREY7QUNFRTtFQUNDLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBREFIO0FDQ0c7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkZ6RVc7RUUwRVgsa0JBQUE7RUFDQSxrQkFBQTtBRENKO0FDQUk7RUFDQyxnQkFBQTtBREVMO0FDRUU7RUFDQyxjRmhGTztBQ2dGVjtBQ0VFO0VBQ0MsYUFBQTtBREFIO0FDR0M7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRERGO0FDSUU7RUFDQyxhRmhHTztBQzhGVjtBQ0tDO0VBRUU7SUFDQyxhQUFBO0VESkY7QUFDRjtBQ09DO0VBRUU7SUFDQyxhQUFBO0VETkY7QUFDRjtBQ1NDO0VBQ0M7SUFDQyxrQkFBQTtFRFBEO0VDU0E7SUFDQyxlQUFBO0VEUEQ7RUNVQztJQUNDLGFBQUE7RURSRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kbGF0bzogXHRcdFx0J0xhdG8nLCBBcmlhbCwgVmVyZGFuYTtcbiRtb250c2VycmF0XHQ6IFx0J01vbnRzZXJyYXQnLCBBcmlhbCwgVmVyZGFuYTtcblxuLy8gQ29sb3JzXG4kY2xlYXI6ICAgICBcdCNmZmZmZmY7XG4kZGFyazogICAgICBcdCMwMDAwMDA7XG4kZ3JleTpcdFx0XHQjYjdjMWQyO1xuJGJsdWUtY2xlYXI6XHQjZDRlZmZjO1xuJGJsdWU6IFx0XHRcdCMwMjhlZDQ7XG4kYmx1ZS1tZWRpdW06IFx0IzAxMjQ2MTtcbiRibHVlLWRhcms6IFx0IzIwMjczNDtcbiRvcmFuZ2U6XHRcdCNmMjY2NWU7XG5cblxuOnJvb3Qge1xuXHQtLW9yYW5nZTogI2YyNjY1ZTtcblx0LS1ibHVlLW06ICMwMTI0NjE7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG59XG4uaGVhZGVyX19idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi5oZWFkZXJfX2J1dHRvbi0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4uaGVhZGVyX19idXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5oZWFkZXJfX2J1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZjI2NjVlO1xufVxuLmhlYWRlcl9fYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5oZWFkZXJfX2J1dHRvbi0tY2hhcHRlcnM6aG92ZXIgLmhlYWRlcl9fYnV0dG9uLS1pY29uIHVzZSB7XG4gIGZpbGw6ICNmMjY2NWU7XG59XG4uaGVhZGVyX190aXRsZS0taW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuLmhlYWRlcl9fdGl0bGUtLWV4Y2VycHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIwMjczNDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmhlYWRlcl9fdG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLmhlYWRlcl9fdG9nZ2xlLS1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmhlYWRlcl9fdG9nZ2xlLS1pY29uIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDEyNDYxO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5oZWFkZXJfX3RvZ2dsZS0taWNvbiBzcGFuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmhlYWRlcl9fdG9nZ2xlOmhvdmVyIHtcbiAgY29sb3I6ICNmMjY2NWU7XG59XG4uaGVhZGVyX190b2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmhlYWRlcl9fY2hhcHRlcnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgbGVmdDogMHB4O1xuICB0b3A6IDc0cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG4uaGVhZGVyLmNoYXB0ZXJzLW9wZW5lZCAuaGVhZGVyX19idXR0b24tLWljb24ge1xuICBmaWxsOiAjZjI2NjVlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5oZWFkZXJfX2J1dHRvbi0tY2hhcHRlcnMgLmhlYWRlcl9fYnV0dG9uLS10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlcl9fdGl0bGUtLWV4Y2VycHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuaGVhZGVyX19idXR0b24tLWNoYXB0ZXJzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLmhlYWRlcl9fYnV0dG9uLS1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmhlYWRlcl9fdG9nZ2xlLS10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5oZWFkZXJ7XG5cdGJhY2tncm91bmQ6ICRjbGVhcjtcblx0cGFkZGluZzogMjVweCAwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdHotaW5kZXg6IDk5O1xuXHQmX19idXR0b257XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW46IDA7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRcdGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcblx0XHRjb2xvcjogJGJsdWUtbWVkaXVtO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdCYtLWljb257XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRtYXJnaW4tdG9wOiAtMnB4O1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XG5cdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdGZpbGw6IGN1cnJlbnRDb2xvcjtcblx0XHR9XG5cdFx0JjpsYXN0LWNoaWxke1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdH1cblx0XHQmOmhvdmVye1xuXHRcdFx0Y29sb3I6ICRvcmFuZ2U7XG5cdFx0fVxuXHRcdCY6Zm9jdXN7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdH1cblx0XHQmLS1jaGFwdGVycyB7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0LmhlYWRlcl9fYnV0dG9uLS1pY29uIHtcblx0XHRcdFx0XHR1c2Uge1xuXHRcdFx0XHRcdFx0ZmlsbDogJG9yYW5nZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Jl9fdGl0bGV7XG5cdFx0Ji0taW1hZ2V7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAtM3B4O1xuXHRcdH1cblx0XHQmLS1leGNlcnB0e1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAkYmx1ZS1kYXJrO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0fVxuXHR9XG5cdCZfX3RvZ2dsZXtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Zm9udC1mYW1pbHk6ICRtb250c2VycmF0O1xuXHRcdGNvbG9yOiAkYmx1ZS1tZWRpdW07XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG5cdFx0Ji0taWNvbntcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0c3Bhbntcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAxNnB4O1xuXHRcdFx0XHRoZWlnaHQ6IDJweDtcblx0XHRcdFx0YmFja2dyb3VuZDogJGJsdWUtbWVkaXVtO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDRweDtcblx0XHRcdFx0JjpsYXN0LWNoaWxke1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Jjpob3Zlcntcblx0XHRcdGNvbG9yOiAkb3JhbmdlO1xuXHRcdH1cblx0XHQmOmZvY3Vze1xuXHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHR9XG5cdH1cblx0Jl9fY2hhcHRlcnMge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR3aWR0aDogMTAwdnc7XG5cdFx0bGVmdDogMHB4O1xuXHRcdHRvcDogNzRweDtcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdFx0bWF4LWhlaWdodDogMTAwdmg7XG5cdH1cblx0Ji5jaGFwdGVycy1vcGVuZWQge1xuXHRcdC5oZWFkZXJfX2J1dHRvbi0taWNvbiB7XG5cdFx0XHRmaWxsOiAkb3JhbmdlO1xuXHRcdH1cblx0fVxuXHRAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblx0XHQmX19idXR0b24tLWNoYXB0ZXJzIHtcblx0XHRcdC5oZWFkZXJfX2J1dHRvbi0tdGV4dCB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdCZfX3RpdGxlIHtcblx0XHRcdCYtLWV4Y2VycHQge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcblx0XHQmX19idXR0b24tLWNoYXB0ZXJzIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcblx0XHR9XG5cdFx0Jl9fYnV0dG9uLS1pY29uIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHR9XG5cdFx0Jl9fdG9nZ2xlIHtcblx0XHRcdCYtLXRleHQge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emitter/emitter.service */ "./src/app/services/emitter/emitter.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(translate, _eref, document, window) {
        this.translate = translate;
        this._eref = _eref;
        this.document = document;
        this.window = window;
        this.headerSrollBefore = 0;
        this.headerStyle = { top: '0px' };
        this.hasMenuOpened = false;
        this.hasChaptersOpened = false;
        this._availableLanguage = '';
        // this.availableLanguage = this.setAvailableLanguage(translate.currentLang, translate.getLangs());
    }
    get availableLanguage() {
        return this._availableLanguage;
    }
    set availableLanguage(lang) {
        this._availableLanguage = lang;
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe(change => {
            console.log(change);
            this.availableLanguage = this.setAvailableLanguage(change.lang, this.translate.getLangs());
        });
    }
    /**
     * Make inactives languages available to choose from
     * @param { currentLang }:string
     * @param { allLanguages }:string
     * @return { availableLanguages }: string | array
     * */
    setAvailableLanguage(currentLang, allLanguages) {
        const [availableLanguage] = this.translate.getLangs().filter(lang => lang !== this.translate.currentLang);
        return availableLanguage;
    }
    onAvailableLanguageClick() {
        this.translate.use(this.availableLanguage);
        this.availableLanguage = this.setAvailableLanguage(this.translate.currentLang, this.translate.getLangs());
    }
    toggle($event) {
        this.hasChaptersOpened = !this.hasChaptersOpened;
    }
    toggleMenu() {
        this.hasMenuOpened = !this.hasMenuOpened;
    }
    /**
     * Autohide sticky header
     * adapted from article below
     * @author https://osvaldas.info/auto-hide-sticky-header
     */
    onWindowScroll() {
        const element = this.header.nativeElement;
        let elHeight = element.offsetHeight, dHeight = this.document.body.offsetHeight, wHeight = this.window.innerHeight, wScrollCurrent = this.window.pageYOffset, wScrollDiff = this.headerSrollBefore - wScrollCurrent, elTop = parseInt(this.headerStyle.top) + wScrollDiff;
        if (wScrollCurrent <= 0) {
            this.headerStyle.top = '0px';
            src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EmitterService"].get('headerOpen').emit(false);
        }
        else if (wScrollDiff > 0) {
            this.headerStyle.top = (elTop > 0 ? 0 : elTop) + 'px';
            src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EmitterService"].get('headerOpen').emit(true);
        }
        else if (wScrollDiff < 0) // scrolled down
         {
            if (wScrollCurrent + wHeight >= dHeight - elHeight) {
                this.headerStyle.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';
                src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EmitterService"].get('headerOpen').emit(true);
            }
            else {
                this.headerStyle.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
                src_app_services_emitter_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EmitterService"].get('headerOpen').emit(false);
            }
        }
        this.headerSrollBefore = wScrollCurrent;
    }
    onClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            if (this.hasMenuOpened == true) {
                this.toggleMenu();
            }
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_window_service__WEBPACK_IMPORTED_MODULE_4__["WINDOW"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('header', { static: false })
], HeaderComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])
], HeaderComponent.prototype, "onWindowScroll", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        host: {
            '(document:click)': 'onClick($event)',
        },
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_window_service__WEBPACK_IMPORTED_MODULE_4__["WINDOW"]))
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.menu {\n  position: fixed;\n  background-color: #012461;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  padding: 70px 100px 50px 70px;\n  visibility: hidden;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  background-image: url('owl.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center right;\n}\n.menu__list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  max-width: 180px;\n  position: relative;\n  padding-bottom: 1px;\n}\n.menu__list:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  width: 32px;\n  height: 2px;\n  background-color: #5A6B87;\n}\n.menu__item {\n  margin-bottom: 32px;\n  font-size: 16px;\n}\n.menu__link {\n  color: #ffffff;\n  line-height: normal;\n}\n.menu__link--strong {\n  font-size: 18px;\n  font-weight: bold;\n}\n.menu__link:hover, .menu__link:focus {\n  color: #028ed4;\n  text-decoration: none;\n}\n.menu__language {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 30px;\n}\n.menu__language--item {\n  margin-right: 20px;\n  color: #b7c1d2;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.menu__language--item:hover {\n  color: #f2665e;\n}\n.menu__language--active {\n  color: #f2665e;\n  text-decoration: underline;\n  pointer-events: none;\n}\n.menu__toggle {\n  position: absolute;\n  right: 15%;\n  top: 30px;\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #ffffff;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.menu__toggle--icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px;\n}\n.menu__toggle--icon span {\n  display: block;\n  width: 16px;\n  height: 2px;\n  background: #ffffff;\n  border-radius: 2px;\n  margin-bottom: -2px;\n}\n.menu__toggle--icon span:first-child {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.menu__toggle--icon span:last-child {\n  margin-bottom: 0;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.menu__toggle:hover {\n  color: #f2665e;\n}\n.menu__toggle:focus {\n  outline: none;\n}\n@media (max-width: 540px) {\n  .menu {\n    width: 100vw;\n    padding: 70px 70px 50px 70px;\n    overflow: auto;\n  }\n  .menu__toggle {\n    right: 15px;\n    top: 28px;\n  }\n  .menu__toggle--text {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYmV0by9Eb2N1bWVudHMvZGV2L2lzbWFydC1yYTIwMTkvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esb0ZBQUE7QUFDQSxrR0FBQTtBQWdCUjtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUNmRDtBQ0hBO0VBQ0ksZUFBQTtFQUNBLHlCRlNXO0VFUlgsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtBRE1KO0FDTEk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FET1I7QUNOUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FEUVo7QUNMSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBRE9SO0FDTEk7RUFDSSxjRjVCSztFRTZCTCxtQkFBQTtBRE9SO0FDTlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QURRWjtBQ05RO0VBQ0ksY0YvQkY7RUVnQ0UscUJBQUE7QURRWjtBQ0xJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FET1I7QUNOUTtFQUNJLGtCQUFBO0VBQ0EsY0Y3Q0g7RUU4Q0csZUFBQTtFQUNBLHlCQUFBO0FEUVo7QUNQWTtFQUNJLGNGNUNOO0FDcURWO0FDTlE7RUFDSSxjRmhERjtFRWlERSwwQkFBQTtFQUNBLG9CQUFBO0FEUVo7QUNMSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx5Q0Z4RU87RUV5RVAsY0Z0RUs7RUV1RUwscUNBQUE7RUFBQSw2QkFBQTtBRE9SO0FDTlE7RUFDTCxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QURRSDtBQ1BHO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJGaEZTO0VFaUZULGtCQUFBO0VBQ1ksbUJBQUE7QURTaEI7QUNSZ0I7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FEVXBCO0FDUkk7RUFDZ0IsZ0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FEVXBCO0FDTkU7RUFDQyxjRnRGTztBQzhGVjtBQ05FO0VBQ0MsYUFBQTtBRFFIO0FDTEk7RUF6R0o7SUEwR1EsWUFBQTtJQUNBLDRCQUFBO0lBQ0EsY0FBQTtFRFFOO0VDUE07SUFDSSxXQUFBO0lBQ0EsU0FBQTtFRFNWO0VDUlU7SUFDSSxhQUFBO0VEVWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kbGF0bzogXHRcdFx0J0xhdG8nLCBBcmlhbCwgVmVyZGFuYTtcbiRtb250c2VycmF0XHQ6IFx0J01vbnRzZXJyYXQnLCBBcmlhbCwgVmVyZGFuYTtcblxuLy8gQ29sb3JzXG4kY2xlYXI6ICAgICBcdCNmZmZmZmY7XG4kZGFyazogICAgICBcdCMwMDAwMDA7XG4kZ3JleTpcdFx0XHQjYjdjMWQyO1xuJGJsdWUtY2xlYXI6XHQjZDRlZmZjO1xuJGJsdWU6IFx0XHRcdCMwMjhlZDQ7XG4kYmx1ZS1tZWRpdW06IFx0IzAxMjQ2MTtcbiRibHVlLWRhcms6IFx0IzIwMjczNDtcbiRvcmFuZ2U6XHRcdCNmMjY2NWU7XG5cblxuOnJvb3Qge1xuXHQtLW9yYW5nZTogI2YyNjY1ZTtcblx0LS1ibHVlLW06ICMwMTI0NjE7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyNDYxO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA3MHB4IDEwMHB4IDUwcHggNzBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vd2wucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcbn1cbi5tZW51X19saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG4ubWVudV9fbGlzdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QTZCODc7XG59XG4ubWVudV9faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tZW51X19saW5rIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4ubWVudV9fbGluay0tc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tZW51X19saW5rOmhvdmVyLCAubWVudV9fbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjMDI4ZWQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVudV9fbGFuZ3VhZ2Uge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubWVudV9fbGFuZ3VhZ2UtLWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjYjdjMWQyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubWVudV9fbGFuZ3VhZ2UtLWl0ZW06aG92ZXIge1xuICBjb2xvcjogI2YyNjY1ZTtcbn1cbi5tZW51X19sYW5ndWFnZS0tYWN0aXZlIHtcbiAgY29sb3I6ICNmMjY2NWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5tZW51X190b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNSU7XG4gIHRvcDogMzBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLm1lbnVfX3RvZ2dsZS0taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5tZW51X190b2dnbGUtLWljb24gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn1cbi5tZW51X190b2dnbGUtLWljb24gc3BhbjpmaXJzdC1jaGlsZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5tZW51X190b2dnbGUtLWljb24gc3BhbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5tZW51X190b2dnbGU6aG92ZXIge1xuICBjb2xvcjogI2YyNjY1ZTtcbn1cbi5tZW51X190b2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5tZW51IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogNzBweCA3MHB4IDUwcHggNzBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAubWVudV9fdG9nZ2xlIHtcbiAgICByaWdodDogMTVweDtcbiAgICB0b3A6IDI4cHg7XG4gIH1cbiAgLm1lbnVfX3RvZ2dsZS0tdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ubWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiA3MHB4IDEwMHB4IDUwcHggNzBweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3dsLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcbiAgICAmX19saXN0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2Qjg3O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2l0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgICZfX2xpbmsge1xuICAgICAgICBjb2xvcjogJGNsZWFyO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAmLS1zdHJvbmcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fbGFuZ3VhZ2Uge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICYtLWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTUlO1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgY29sb3I6ICRjbGVhcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICYtLWljb257XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdHNwYW57XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0aGVpZ2h0OiAycHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRjbGVhcjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQmOmhvdmVye1xuXHRcdFx0Y29sb3I6ICRvcmFuZ2U7XG5cdFx0fVxuXHRcdCY6Zm9jdXN7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBwYWRkaW5nOiA3MHB4IDcwcHggNTBweCA3MHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgJi0tdGV4dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let MenuComponent = class MenuComponent {
    constructor(translate) {
        this.translate = translate;
        this.onCloseMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe(change => {
            this.activeLang = change.lang.split('-')[0];
        });
    }
    changeLanguage(lang) {
        this.translate.use(lang);
    }
    fecharMenu() {
        this.onCloseMenu.emit(true);
    }
};
MenuComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MenuComponent.prototype, "onCloseMenu", void 0);
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)]),
            ])
        ],
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n::ng-deep .modal-dialog {\n  max-width: 800px;\n}\n::ng-deep .modal-content {\n  padding: 85px 100px 65px 100px;\n}\n.modal__exit {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  cursor: pointer;\n}\n.modal__top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.modal__top .slick-arrow {\n  display: -webkit-box;\n  display: flex;\n  border: solid 1px #012461;\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.modal__top .slick-next {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.modal__top .modal__img {\n  margin: 0 15px;\n}\n.modal__top .modal__img img {\n  width: 105px;\n  height: 105px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: solid 1px #012461;\n  border-radius: 50%;\n  padding: 5px;\n  margin: 0 auto;\n}\n.modal__text {\n  text-align: center;\n  margin-top: 25px;\n  border-bottom: 1px solid #e6e9ef;\n  padding-bottom: 30px;\n  margin-bottom: 15px;\n}\n.modal__name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #012461;\n}\n.modal__about {\n  font-size: 14px;\n  font-weight: normal;\n  color: #012461;\n}\n.modal__quote {\n  font-size: 18px;\n  line-height: 32px;\n  color: #012461;\n  background-image: url('left-quote-light-blue.svg');\n  background-repeat: no-repeat;\n  background-position: center top;\n  padding-top: 25px;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    padding: 75px 60px 60px 60px;\n  }\n  .modal-content {\n    padding: 60px 30px 30px 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9GQUFBO0FBQ0Esa0dBQUE7QUFnQlI7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDZkQ7QUNGSTtFQUNJLGdCQUFBO0FES1I7QUNISTtFQUNJLDhCQUFBO0FES1I7QUNISTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FES1I7QUNISTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FES1I7QUNIWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QURLaEI7QUNIWTtFQUNJLGlDQUFBO1VBQUEseUJBQUE7QURLaEI7QUNGUTtFQUNJLGNBQUE7QURJWjtBQ0hZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FES2hCO0FDREk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNGMUNPO0FDNkNmO0FDREk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRi9DTztBQ2tEZjtBQ0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0ZwRE87RUVxRFAsa0RBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QURHUjtBQ0RJO0VBQ0k7SUFDSSw0QkFBQTtFREdWO0VDRE07SUFDSSw0QkFBQTtFREdWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kbGF0bzogXHRcdFx0J0xhdG8nLCBBcmlhbCwgVmVyZGFuYTtcbiRtb250c2VycmF0XHQ6IFx0J01vbnRzZXJyYXQnLCBBcmlhbCwgVmVyZGFuYTtcblxuLy8gQ29sb3JzXG4kY2xlYXI6ICAgICBcdCNmZmZmZmY7XG4kZGFyazogICAgICBcdCMwMDAwMDA7XG4kZ3JleTpcdFx0XHQjYjdjMWQyO1xuJGJsdWUtY2xlYXI6XHQjZDRlZmZjO1xuJGJsdWU6IFx0XHRcdCMwMjhlZDQ7XG4kYmx1ZS1tZWRpdW06IFx0IzAxMjQ2MTtcbiRibHVlLWRhcms6IFx0IzIwMjczNDtcbiRvcmFuZ2U6XHRcdCNmMjY2NWU7XG5cblxuOnJvb3Qge1xuXHQtLW9yYW5nZTogI2YyNjY1ZTtcblx0LS1ibHVlLW06ICMwMTI0NjE7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbjo6bmctZGVlcCAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cbjo6bmctZGVlcCAubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDg1cHggMTAwcHggNjVweCAxMDBweDtcbn1cbi5tb2RhbF9fZXhpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsX190b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb2RhbF9fdG9wIC5zbGljay1hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMTI0NjE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubW9kYWxfX3RvcCAuc2xpY2stbmV4dCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ubW9kYWxfX3RvcCAubW9kYWxfX2ltZyB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLm1vZGFsX190b3AgLm1vZGFsX19pbWcgaW1nIHtcbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDEwNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAxMjQ2MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1vZGFsX190ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTllZjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubW9kYWxfX25hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAxMjQ2MTtcbn1cbi5tb2RhbF9fYWJvdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMDEyNDYxO1xufVxuLm1vZGFsX19xdW90ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xlZnQtcXVvdGUtbGlnaHQtYmx1ZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA3NXB4IDYwcHggNjBweCA2MHB4O1xuICB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHggMzBweCAzMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5tb2RhbCB7XG4gICAgOjpuZy1kZWVwICYtZGlhbG9nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICB9XG4gICAgOjpuZy1kZWVwICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDg1cHggMTAwcHggNjVweCAxMDBweDtcbiAgICB9XG4gICAgJl9fZXhpdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAmX190b3Age1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnNsaWNrIHtcbiAgICAgICAgICAgICYtYXJyb3cge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzAxMjQ2MTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1uZXh0IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tb2RhbF9faW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTA1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDVweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMDEyNDYxO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjMwLDIzMywyMzksMSk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAmX19uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICB9XG4gICAgJl9fYWJvdXQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgfVxuICAgICZfX3F1b3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xlZnQtcXVvdGUtbGlnaHQtYmx1ZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogNzVweCA2MHB4IDYwcHggNjBweDtcbiAgICAgICAgfVxuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogNjBweCAzMHB4IDMwcHggMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");



let ModalComponent = class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.testimonial.subscribe(value => {
            this.content = value;
        });
    }
    onModalPrevClick() {
        this.onPrev.emit(true);
    }
    onModalNextClick() {
        this.onNext.emit(true);
    }
    openModal(template = this.template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-dialog-centered' }));
    }
};
ModalComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('testimonial')
], ModalComponent.prototype, "testimonial", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template', { static: false })
], ModalComponent.prototype, "template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onNext')
], ModalComponent.prototype, "onNext", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onPrev')
], ModalComponent.prototype, "onPrev", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/components/overview/overview.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/overview/overview.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.overview {\n  width: 100%;\n  height: auto;\n  padding-top: 180px;\n  padding-bottom: 115px;\n  background-color: #028ed4;\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(1, 36, 97, 0.3)), to(rgba(1, 36, 97, 0)));\n  background-image: linear-gradient(to right, rgba(1, 36, 97, 0.3), rgba(1, 36, 97, 0));\n  position: relative;\n  overflow: hidden;\n}\n.overview:before {\n  content: url('overview.svg');\n  position: absolute;\n  right: 0;\n  bottom: -5px;\n}\n.overview__tag {\n  font-size: 16px;\n  color: #ffffff;\n  font-family: \"Montserrat\", Arial, Verdana;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.overview__title {\n  font-size: 56px;\n  color: #ffffff;\n  font-family: \"Montserrat\", Arial, Verdana;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: -0.5px;\n  margin-bottom: 15px;\n}\n.overview__excerpt {\n  font-size: 18px;\n  color: #ffffff;\n  line-height: 1.8;\n  margin-bottom: 0;\n}\n.overview__button {\n  display: inline-block;\n  border: 2px solid #ffffff;\n  border-radius: 5px;\n  padding: 25px 30px;\n  font-size: 14px;\n  color: #ffffff;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-top: 40px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.overview__button img {\n  margin-left: 5px;\n}\n.overview__button:hover {\n  text-decoration: none;\n  border-color: #202734;\n  background: #202734;\n}\n@media (max-width: 540px) {\n  .overview__tag {\n    font-size: 14px;\n  }\n  .overview__title {\n    font-size: 24px;\n    line-height: 1.17;\n  }\n  .overview__excerpt {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n  .overview__button {\n    margin-top: 24px;\n    padding: 15px 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9GQUFBO0FBQ0Esa0dBQUE7QUFnQlI7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDZkQ7QUNIQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUhBQUE7RUFBQSxxRkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURNRDtBQ0xDO0VBQ0MsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FET0Y7QUNMQztFQUNDLGVBQUE7RUFDQSxjRlhXO0VFWVgseUNGZmE7RUVnQmIseUJBQUE7RUFDQSxtQkFBQTtBRE9GO0FDTEM7RUFDQyxlQUFBO0VBQ0EsY0ZsQlc7RUVtQlgseUNGdEJhO0VFdUJiLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FET0Y7QUNMQztFQUNDLGVBQUE7RUFDQSxjRjNCVztFRTRCWCxnQkFBQTtFQUNBLGdCQUFBO0FET0Y7QUNMQztFQUNDLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNGckNXO0VFc0NYLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRE9GO0FDTkU7RUFDQyxnQkFBQTtBRFFIO0FDTkU7RUFDQyxxQkFBQTtFQUNBLHFCRjFDVTtFRTJDVixtQkYzQ1U7QUNtRGI7QUNMQztFQUNDO0lBQ0MsZUFBQTtFRE9EO0VDTEE7SUFDQyxlQUFBO0lBQ0EsaUJBQUE7RURPRDtFQ0xBO0lBQ0MsZUFBQTtJQUNBLGdCQUFBO0VET0Q7RUNMQTtJQUNDLGdCQUFBO0lBQ0Esa0JBQUE7RURPRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuJGxhdG86IFx0XHRcdCdMYXRvJywgQXJpYWwsIFZlcmRhbmE7XG4kbW9udHNlcnJhdFx0OiBcdCdNb250c2VycmF0JywgQXJpYWwsIFZlcmRhbmE7XG5cbi8vIENvbG9yc1xuJGNsZWFyOiAgICAgXHQjZmZmZmZmO1xuJGRhcms6ICAgICAgXHQjMDAwMDAwO1xuJGdyZXk6XHRcdFx0I2I3YzFkMjtcbiRibHVlLWNsZWFyOlx0I2Q0ZWZmYztcbiRibHVlOiBcdFx0XHQjMDI4ZWQ0O1xuJGJsdWUtbWVkaXVtOiBcdCMwMTI0NjE7XG4kYmx1ZS1kYXJrOiBcdCMyMDI3MzQ7XG4kb3JhbmdlOlx0XHQjZjI2NjVlO1xuXG5cbjpyb290IHtcblx0LS1vcmFuZ2U6ICNmMjY2NWU7XG5cdC0tYmx1ZS1tOiAjMDEyNDYxO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4ub3ZlcnZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyOGVkNDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEsIDM2LCA5NywgMC4zKSwgcmdiYSgxLCAzNiwgOTcsIDApKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJ2aWV3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3ZlcnZpZXcuc3ZnXCIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC01cHg7XG59XG4ub3ZlcnZpZXdfX3RhZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ub3ZlcnZpZXdfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ub3ZlcnZpZXdfX2V4Y2VycHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm92ZXJ2aWV3X19idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjVweCAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG4ub3ZlcnZpZXdfX2J1dHRvbiBpbWcge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm92ZXJ2aWV3X19idXR0b246aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzIwMjczNDtcbiAgYmFja2dyb3VuZDogIzIwMjczNDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAub3ZlcnZpZXdfX3RhZyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5vdmVydmlld19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4xNztcbiAgfVxuICAub3ZlcnZpZXdfX2V4Y2VycHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG4gIC5vdmVydmlld19fYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMThweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ub3ZlcnZpZXd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmctdG9wOiAxODBweDtcblx0cGFkZGluZy1ib3R0b206IDExNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDI4ZWQ0O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMSwgMzYsIDk3LCAwLjMpLCByZ2JhKDEsIDM2LCA5NywgMCkpO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdCY6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdmVydmlldy5zdmcnKTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAtNXB4O1xuXHR9XG5cdCZfX3RhZ3tcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Y29sb3I6ICRjbGVhcjtcblx0XHRmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cdCZfX3RpdGxle1xuXHRcdGZvbnQtc2l6ZTogNTZweDtcblx0XHRjb2xvcjogJGNsZWFyO1xuXHRcdGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjE1O1xuXHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0fVxuXHQmX19leGNlcnB0e1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRjb2xvcjogJGNsZWFyO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjgwO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0Jl9fYnV0dG9ue1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRib3JkZXI6IDJweCBzb2xpZCAkY2xlYXI7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdHBhZGRpbmc6IDI1cHggMzBweDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Y29sb3I6ICRjbGVhcjtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcblx0XHRpbWd7XG5cdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdH1cblx0XHQmOmhvdmVye1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAkYmx1ZS1kYXJrO1xuXHRcdFx0YmFja2dyb3VuZDogJGJsdWUtZGFyaztcblx0XHR9XG5cdH1cblx0QG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG5cdFx0Jl9fdGFnIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHR9XG5cdFx0Jl9fdGl0bGUge1xuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEuMTc7XG5cdFx0fVxuXHRcdCZfX2V4Y2VycHQge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHR9XG5cdFx0Jl9fYnV0dG9uIHtcblx0XHRcdG1hcmdpbi10b3A6IDI0cHg7XG5cdFx0XHRwYWRkaW5nOiAxNXB4IDE4cHg7XG5cdFx0fVxuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OverviewComponent = class OverviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: __webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/overview/overview.component.html"),
        styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/components/overview/overview.component.scss")]
    })
], OverviewComponent);



/***/ }),

/***/ "./src/app/components/related/related.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/related/related.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.related {\n  margin: 70px 0;\n}\n.related__title {\n  font-size: 32px;\n  text-transform: uppercase;\n  color: #012461;\n  font-family: \"Montserrat\", Arial, Verdana;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.related__single {\n  position: relative;\n  display: block;\n}\n.related__single--title {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n  color: #ffffff;\n}\n.related__single--title h4 {\n  font-size: 12px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin-bottom: 3px;\n}\n.related__single--title h3 {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n.related__single figure img {\n  height: 220px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n@media (max-width: 540px) {\n  .related {\n    margin: 40px 0;\n  }\n  .related__title {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9yZWxhdGVkL3JlbGF0ZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVsYXRlZC9yZWxhdGVkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYmV0by9Eb2N1bWVudHMvZGV2L2lzbWFydC1yYTIwMTkvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esb0ZBQUE7QUFDQSxrR0FBQTtBQWdCUjtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUNmRDtBQ0hBO0VBQ0ksY0FBQTtBRE1KO0FDTEk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjRk1PO0VFTFAseUNGSE87RUVJUCxpQkFBQTtFQUNBLG1CQUFBO0FET1I7QUNMSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBRE9SO0FDTlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0ZYQztBQ21CYjtBQ1BZO0VBQ0ksZUFBQTtFQUNBLHlDRmpCRDtFRWtCQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QURTaEI7QUNQWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEU2hCO0FDTFk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBRE9oQjtBQ0hJO0VBeENKO0lBeUNRLGNBQUE7RURNTjtFQ0xNO0lBQ0ksZUFBQTtFRE9WO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlbGF0ZWQvcmVsYXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuJGxhdG86IFx0XHRcdCdMYXRvJywgQXJpYWwsIFZlcmRhbmE7XG4kbW9udHNlcnJhdFx0OiBcdCdNb250c2VycmF0JywgQXJpYWwsIFZlcmRhbmE7XG5cbi8vIENvbG9yc1xuJGNsZWFyOiAgICAgXHQjZmZmZmZmO1xuJGRhcms6ICAgICAgXHQjMDAwMDAwO1xuJGdyZXk6XHRcdFx0I2I3YzFkMjtcbiRibHVlLWNsZWFyOlx0I2Q0ZWZmYztcbiRibHVlOiBcdFx0XHQjMDI4ZWQ0O1xuJGJsdWUtbWVkaXVtOiBcdCMwMTI0NjE7XG4kYmx1ZS1kYXJrOiBcdCMyMDI3MzQ7XG4kb3JhbmdlOlx0XHQjZjI2NjVlO1xuXG5cbjpyb290IHtcblx0LS1vcmFuZ2U6ICNmMjY2NWU7XG5cdC0tYmx1ZS1tOiAjMDEyNDYxO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4ucmVsYXRlZCB7XG4gIG1hcmdpbjogNzBweCAwO1xufVxuLnJlbGF0ZWRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucmVsYXRlZF9fc2luZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZWxhdGVkX19zaW5nbGUtLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnJlbGF0ZWRfX3NpbmdsZS0tdGl0bGUgaDQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5yZWxhdGVkX19zaW5nbGUtLXRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5yZWxhdGVkX19zaW5nbGUgZmlndXJlIGltZyB7XG4gIGhlaWdodDogMjIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5yZWxhdGVkIHtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgfVxuICAucmVsYXRlZF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ucmVsYXRlZCB7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICZfX3NpbmdsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICYtLXRpdGxlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogJGNsZWFyO1xuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWd1cmUge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/related/related.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/related/related.component.ts ***!
  \*********************************************************/
/*! exports provided: RelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedComponent", function() { return RelatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RelatedComponent = class RelatedComponent {
    constructor() { }
    ngOnInit() {
    }
};
RelatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-related',
        template: __webpack_require__(/*! raw-loader!./related.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/related/related.component.html"),
        styles: [__webpack_require__(/*! ./related.component.scss */ "./src/app/components/related/related.component.scss")]
    })
], RelatedComponent);



/***/ }),

/***/ "./src/app/components/share/share/share.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/share/share/share.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.share--item {\n  display: block;\n  margin: 8px 0;\n}\n.share--item:first-child {\n  margin-top: 0;\n}\n.share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .share {\n    right: 15px;\n  }\n}\n@media (max-width: 768px) {\n  .share {\n    right: 10px;\n  }\n  .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZS9zaGFyZS9zaGFyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZS9zaGFyZS9zaGFyZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9GQUFBO0FBQ0Esa0dBQUE7QUFnQlI7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDZkQ7QUNIQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FETUY7QUNKRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FETUo7QUNKSTtFQUNFLGFBQUE7QURNTjtBQ0ZFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNGWlc7RUVhWCxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QURJSjtBQ0ZJO0VBQ0UscUJGcEJJO0VFcUJKLG1CRnJCSTtFRXNCSixxQkFBQTtFQUNBLGNGM0JPO0FDK0JiO0FDQ0E7RUFDRTtJQUNFLFdBQUE7RURFRjtBQUNGO0FDQ0E7RUFDRTtJQUNFLFdBQUE7RURDRjtFQ0NFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RURDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZS9zaGFyZS9zaGFyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuJGxhdG86IFx0XHRcdCdMYXRvJywgQXJpYWwsIFZlcmRhbmE7XG4kbW9udHNlcnJhdFx0OiBcdCdNb250c2VycmF0JywgQXJpYWwsIFZlcmRhbmE7XG5cbi8vIENvbG9yc1xuJGNsZWFyOiAgICAgXHQjZmZmZmZmO1xuJGRhcms6ICAgICAgXHQjMDAwMDAwO1xuJGdyZXk6XHRcdFx0I2I3YzFkMjtcbiRibHVlLWNsZWFyOlx0I2Q0ZWZmYztcbiRibHVlOiBcdFx0XHQjMDI4ZWQ0O1xuJGJsdWUtbWVkaXVtOiBcdCMwMTI0NjE7XG4kYmx1ZS1kYXJrOiBcdCMyMDI3MzQ7XG4kb3JhbmdlOlx0XHQjZjI2NjVlO1xuXG5cbjpyb290IHtcblx0LS1vcmFuZ2U6ICNmMjY2NWU7XG5cdC0tYmx1ZS1tOiAjMDEyNDYxO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4uc2hhcmUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zaGFyZS0taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweCAwO1xufVxuLnNoYXJlLS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5zaGFyZS0tbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdjMWQyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnNoYXJlLS1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDI4ZWQ0O1xuICBiYWNrZ3JvdW5kOiAjMDI4ZWQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5zaGFyZSB7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2hhcmUge1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIC5zaGFyZS0tbGluayB7XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uc2hhcmUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcblxuICAmLS1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDhweCAwO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuXG4gICYtLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIGhlaWdodDogNTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJGNsZWFyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5zaGFyZSB7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaGFyZSB7XG4gICAgcmlnaHQ6IDEwcHg7XG5cbiAgICAmLS1saW5rIHtcbiAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/share/share/share.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/share/share/share.component.ts ***!
  \***********************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/window.service */ "./src/app/services/window.service.ts");



let ShareComponent = class ShareComponent {
    constructor(window) {
        this.window = window;
    }
    ngOnInit() {
        this.currentUrl = this.window.location.href;
    }
};
ShareComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] }
];
ShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-share',
        template: __webpack_require__(/*! raw-loader!./share.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/share/share/share.component.html"),
        styles: [__webpack_require__(/*! ./share.component.scss */ "./src/app/components/share/share/share.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_window_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]))
], ShareComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.sidebar {\n  position: absolute;\n  max-width: 250px;\n  left: 0;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #012461;\n}\n.sidebar__title p {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.sidebar__title h5 {\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.sidebar__body {\n  padding: 0;\n  margin: 0;\n}\n.sidebar__item {\n  font-size: 14px;\n  padding: 10px 0;\n  list-style: none;\n}\n.sidebar__item--active, .sidebar__item:hover, .sidebar__item:focus {\n  list-style-image: url('triangle-small.svg');\n}\n.sidebar__item--active .sidebar__link, .sidebar__item:hover .sidebar__link, .sidebar__item:focus .sidebar__link {\n  color: #028ed4;\n  text-decoration: none;\n}\n.sidebar__link {\n  color: #012461;\n}\n@media (max-width: 1300px) {\n  .sidebar {\n    left: 40px;\n  }\n}\n@media (max-width: 992px) {\n  .sidebar {\n    left: 30px;\n    max-width: 160px;\n  }\n  .sidebar__title h5 {\n    font-size: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYmV0by9Eb2N1bWVudHMvZGV2L2lzbWFydC1yYTIwMTkvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esb0ZBQUE7QUFDQSxrR0FBQTtBQWdCUjtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUNmRDtBQ0hBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSx5Q0ZEVztFRUVYLGNGTVc7QUNBZjtBQ0pRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FETVo7QUNKUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURNWjtBQ0hJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QURLUjtBQ0hJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREtSO0FDSlE7RUFDSSwyQ0FBQTtBRE1aO0FDTFk7RUFDSSxjRm5CTjtFRW9CTSxxQkFBQTtBRE9oQjtBQ0hJO0VBQ0ksY0Z4Qk87QUM2QmY7QUNISTtFQXJDSjtJQXNDUSxVQUFBO0VETU47QUFDRjtBQ0xJO0VBeENKO0lBeUNRLFVBQUE7SUFDQSxnQkFBQTtFRFFOO0VDTlU7SUFDSSxlQUFBO0VEUWQ7QUFDRjtBQ0xJO0VBakRKO0lBa0RRLGFBQUE7RURRTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIGNvbG9yOiAjMDEyNDYxO1xufVxuLnNpZGViYXJfX3RpdGxlIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc2lkZWJhcl9fdGl0bGUgaDUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNpZGViYXJfX2JvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uc2lkZWJhcl9faXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpZGViYXJfX2l0ZW0tLWFjdGl2ZSwgLnNpZGViYXJfX2l0ZW06aG92ZXIsIC5zaWRlYmFyX19pdGVtOmZvY3VzIHtcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC5zdmdcIik7XG59XG4uc2lkZWJhcl9faXRlbS0tYWN0aXZlIC5zaWRlYmFyX19saW5rLCAuc2lkZWJhcl9faXRlbTpob3ZlciAuc2lkZWJhcl9fbGluaywgLnNpZGViYXJfX2l0ZW06Zm9jdXMgLnNpZGViYXJfX2xpbmsge1xuICBjb2xvcjogIzAyOGVkNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNpZGViYXJfX2xpbmsge1xuICBjb2xvcjogIzAxMjQ2MTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGxlZnQ6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2lkZWJhciB7XG4gICAgbGVmdDogMzBweDtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICB9XG4gIC5zaWRlYmFyX190aXRsZSBoNSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0O1xuICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgJl9fdGl0bGUge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAmX19pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICYtLWFjdGl2ZSwgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwuc3ZnJyk7XG4gICAgICAgICAgICAuc2lkZWJhcl9fbGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19saW5rIHtcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgICAgICBsZWZ0OiA0MHB4O1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/components/slider/slider.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() {
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
    }
    ngOnInit() {
    }
    addSlide() {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    }
    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }
    slickInit(e) {
        console.log('slick initialized');
    }
    breakpoint(e) {
        console.log('breakpoint');
    }
    afterChange(e) {
        console.log('afterChange');
    }
    beforeChange(e) {
        console.log('beforeChange');
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slider/slider.component.html"),
        styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/components/slider/slider.component.scss")]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/testimonials/testimonials.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:host {\n  display: block;\n}\n.testimonials {\n  background-color: #e6e9ef;\n  padding: 70px 0;\n}\n.testimonials__title {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: \"Montserrat\", Arial, Verdana;\n  text-transform: uppercase;\n  color: #012461;\n  letter-spacing: -0.5px;\n  margin-bottom: 20px;\n}\n.testimonials__carousel {\n  margin-right: -15px;\n  padding-bottom: 50px;\n}\n.testimonials__single {\n  border-radius: 5px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n  border: solid 1px rgba(230, 233, 239, 0.5);\n  background-color: #ffffff;\n  padding: 30px;\n  max-width: 90%;\n  margin-right: 30px;\n}\n.testimonials__img {\n  text-align: center;\n}\n.testimonials__img img {\n  width: 105px;\n  height: 105px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: solid 1px #012461;\n  border-radius: 50%;\n  padding: 5px;\n  margin: 0 auto;\n}\n.testimonials__name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #012461;\n  min-height: 42px;\n}\n.testimonials__about {\n  font-size: 14px;\n  font-weight: normal;\n  color: #012461;\n  min-height: 70px;\n}\n.testimonials__link {\n  font-size: 14px;\n  color: #028ed4;\n  border-bottom: solid 2px #028ed4;\n  padding-bottom: 2px;\n}\n.testimonials__link:hover, .testimonials__link:focus {\n  text-decoration: none;\n  color: #f2665e;\n  border-bottom: solid 2px #f2665e;\n}\n.testimonials__dark {\n  background-color: #012461;\n}\n.testimonials__dark .testimonials__title {\n  color: #ffffff;\n}\n@media (max-width: 540px) {\n  .testimonials {\n    padding: 20px 0 50px 0;\n  }\n  .testimonials__title {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iZXRvL0RvY3VtZW50cy9kZXYvaXNtYXJ0LXJhMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ2ZEO0FDSEE7RUFDQyxjQUFBO0FETUQ7QUNIQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBRE1KO0FDTEk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0ZQTztFRVFQLHlCQUFBO0VBQ0EsY0ZETztFRUVQLHNCQUFBO0VBQ0EsbUJBQUE7QURPUjtBQ0xJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBRE9SO0FDTEk7RUFDSSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURPUjtBQ0xJO0VBQ0ksa0JBQUE7QURPUjtBQ05RO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEUVo7QUNMSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNGakNPO0VFa0NQLGdCQUFBO0FET1I7QUNMSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNGdkNPO0VFd0NQLGdCQUFBO0FET1I7QUNMSTtFQUNJLGVBQUE7RUFDQSxjRjdDRTtFRThDRixnQ0FBQTtFQUNBLG1CQUFBO0FET1I7QUNOUTtFQUNJLHFCQUFBO0VBQ0EsY0YvQ0Y7RUVnREUsZ0NBQUE7QURRWjtBQ0xJO0VBQ0kseUJGdERPO0FDNkRmO0FDTlE7RUFDSSxjRjdEQztBQ3FFYjtBQ0xJO0VBbEVKO0lBbUVRLHNCQUFBO0VEUU47RUNQTTtJQUNJLGVBQUE7RURTVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4kbGF0bzogXHRcdFx0J0xhdG8nLCBBcmlhbCwgVmVyZGFuYTtcbiRtb250c2VycmF0XHQ6IFx0J01vbnRzZXJyYXQnLCBBcmlhbCwgVmVyZGFuYTtcblxuLy8gQ29sb3JzXG4kY2xlYXI6ICAgICBcdCNmZmZmZmY7XG4kZGFyazogICAgICBcdCMwMDAwMDA7XG4kZ3JleTpcdFx0XHQjYjdjMWQyO1xuJGJsdWUtY2xlYXI6XHQjZDRlZmZjO1xuJGJsdWU6IFx0XHRcdCMwMjhlZDQ7XG4kYmx1ZS1tZWRpdW06IFx0IzAxMjQ2MTtcbiRibHVlLWRhcms6IFx0IzIwMjczNDtcbiRvcmFuZ2U6XHRcdCNmMjY2NWU7XG5cblxuOnJvb3Qge1xuXHQtLW9yYW5nZTogI2YyNjY1ZTtcblx0LS1ibHVlLW06ICMwMTI0NjE7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXN0aW1vbmlhbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlOWVmO1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4udGVzdGltb25pYWxzX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRlc3RpbW9uaWFsc19fY2Fyb3VzZWwge1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi50ZXN0aW1vbmlhbHNfX3NpbmdsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMzAsIDIzMywgMjM5LCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnRlc3RpbW9uaWFsc19faW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRlc3RpbW9uaWFsc19faW1nIGltZyB7XG4gIHdpZHRoOiAxMDVweDtcbiAgaGVpZ2h0OiAxMDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMTI0NjE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50ZXN0aW1vbmlhbHNfX25hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbWluLWhlaWdodDogNDJweDtcbn1cbi50ZXN0aW1vbmlhbHNfX2Fib3V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbWluLWhlaWdodDogNzBweDtcbn1cbi50ZXN0aW1vbmlhbHNfX2xpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDI4ZWQ0O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzAyOGVkNDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi50ZXN0aW1vbmlhbHNfX2xpbms6aG92ZXIsIC50ZXN0aW1vbmlhbHNfX2xpbms6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZjI2NjVlO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2YyNjY1ZTtcbn1cbi50ZXN0aW1vbmlhbHNfX2Rhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyNDYxO1xufVxuLnRlc3RpbW9uaWFsc19fZGFyayAudGVzdGltb25pYWxzX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC50ZXN0aW1vbmlhbHMge1xuICAgIHBhZGRpbmc6IDIwcHggMCA1MHB4IDA7XG4gIH1cbiAgLnRlc3RpbW9uaWFsc19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGVzdGltb25pYWxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlOWVmO1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgJl9fY2Fyb3VzZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgJl9fc2luZ2xlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIzMCwgMjMzLCAyMzksIDAuNSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgICZfX2ltZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTA1cHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX25hbWUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIH1cbiAgICAmX19hYm91dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgICB9XG4gICAgJl9fbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggJGJsdWU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggJG9yYW5nZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAudGVzdGltb25pYWxzX190aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNsZWFyO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgNTBweCAwO1xuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/testimonials/testimonials.component.ts ***!
  \*******************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_testimonials_testimonials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/testimonials/testimonials.service */ "./src/app/services/testimonials/testimonials.service.ts");



let TestimonialsComponent = class TestimonialsComponent {
    constructor(testimonials) {
        this.testimonials = testimonials;
        this.modeDark = false;
        this.onTestimonialCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slides = [];
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "infinite": true,
            "arrows": true,
            "centerMode": false,
            "prevArrow": "<button type='button' class='btn slick-prev'><img src='assets/images/arrow.svg'></button>",
            "nextArrow": "<button type='button' class='btn slick-next'><img src='assets/images/arrow.svg'></button>",
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.slides = testimonials.getAll();
    }
    ngOnInit() { }
    onTestimonialClick(testimonial) {
        this.testimonials.current = testimonial;
        this.onTestimonialCardClick.emit(testimonial);
    }
};
TestimonialsComponent.ctorParameters = () => [
    { type: src_app_services_testimonials_testimonials_service__WEBPACK_IMPORTED_MODULE_2__["TestimonialsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TestimonialsComponent.prototype, "modeDark", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onTestimonialCardClick')
], TestimonialsComponent.prototype, "onTestimonialCardClick", void 0);
TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testimonials',
        template: __webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/testimonials/testimonials.component.html"),
        styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/components/testimonials/testimonials.component.scss")]
    })
], TestimonialsComponent);



/***/ }),

/***/ "./src/app/components/timeline-card/timeline-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/timeline-card/timeline-card.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline-card {\n  padding: 32px;\n  border: 1px solid #e6e9ef;\n  box-shadow: 0 12px 24px 0 rgba(48, 61, 85, 0.08);\n  border-radius: 2px;\n  max-width: 400px;\n  background: #fff;\n  margin: 0 auto;\n}\n.timeline-card__title {\n  font-size: 44px;\n  letter-spacing: -0.31px;\n  color: white;\n  margin-bottom: 10px;\n  font-weight: 700;\n  font-family: \"Montserrat\";\n  -webkit-text-stroke: 1px var(--orange);\n}\n.timeline-card__excerpt ::ng-deep p {\n  line-height: 21px;\n  font-size: 13px;\n  color: var(--blue-m);\n  font-family: \"Montserrat\";\n  margin-bottom: 20px;\n}\n.timeline-card__excerpt ::ng-deep p:last-of-type {\n  margin-bottom: 0;\n}\n.timeline-card__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  border: 2px solid var(--orange);\n  margin-bottom: 10px;\n}\n.timeline-card__icon img {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.timeline-card--last {\n  max-width: 600px;\n  position: relative;\n  padding-bottom: 40px;\n  border-color: var(--orange);\n}\n.timeline-card--last .timeline-card__title, .timeline-card--last .timeline-card__excerpt {\n  padding-left: 50%;\n  padding-right: 20px;\n}\n.timeline-card--last .timeline-card__icon {\n  position: absolute;\n  border: none;\n  margin: none;\n  width: auto;\n  height: auto;\n  border-radius: 0;\n  left: calc( 50% - 120px);\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS1jYXJkL3RpbWVsaW5lLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGltZWxpbmUtY2FyZC90aW1lbGluZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Q7QURDQztFQUNDLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQ0FBQTtBQ0FGO0FES0U7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNISDtBRElHO0VBQ0MsZ0JBQUE7QUNGSjtBRE9DO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRE9FO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNMSDtBRFVDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNSRjtBRFdHO0VBRUMsaUJBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEYUc7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS1jYXJkL3RpbWVsaW5lLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUtY2FyZCB7XG5cdHBhZGRpbmc6IDMycHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNmU5ZWY7XG5cdGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IDAgcmdiYSg0OCwgNjEsIDg1LCAwLjA4KTtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRtYXJnaW46IDAgYXV0bztcblx0JHRoaXM6ICY7XG5cdCZfX3RpdGxlIHtcblx0XHRmb250LXNpemU6IDQ0cHg7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjMxcHg7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuXHRcdC8vIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XG5cdFx0LXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHZhcigtLW9yYW5nZSk7XG5cdH1cblxuXHQmX19leGNlcnB0IHtcblx0XHRcblx0XHQ6Om5nLWRlZXAgcCB7XG5cdFx0XHRsaW5lLWhlaWdodDogMjFweDtcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdGNvbG9yOiB2YXIoLS1ibHVlLW0pO1xuXHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Jl9faWNvbiB7XG5cdFx0d2lkdGg6IDQwcHg7XG5cdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tb3JhbmdlKTtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG5cdFx0aW1nIHtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHR9XG5cblxuXHQmLS1sYXN0IHtcblx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nLWJvdHRvbTogNDBweDtcblx0XHRib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XG5cdFx0I3skdGhpc30ge1xuXG5cdFx0XHQmX190aXRsZSxcblx0XHRcdCZfX2V4Y2VycHQge1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDUwJTtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMjBweDtcblx0XHRcdH1cblxuXHRcdFx0Jl9faWNvbiB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRtYXJnaW46IG5vbmU7XG5cdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cdFx0XHRcdGxlZnQ6IGNhbGMoIDUwJSAtIDEyMHB4KTtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi50aW1lbGluZS1jYXJkIHtcbiAgcGFkZGluZzogMzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTllZjtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggMCByZ2JhKDQ4LCA2MSwgODUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRpbWVsaW5lLWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCB2YXIoLS1vcmFuZ2UpO1xufVxuLnRpbWVsaW5lLWNhcmRfX2V4Y2VycHQgOjpuZy1kZWVwIHAge1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tYmx1ZS1tKTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpbWVsaW5lLWNhcmRfX2V4Y2VycHQgOjpuZy1kZWVwIHA6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50aW1lbGluZS1jYXJkX19pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3JhbmdlKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50aW1lbGluZS1jYXJkX19pY29uIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnRpbWVsaW5lLWNhcmQtLWxhc3Qge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XG59XG4udGltZWxpbmUtY2FyZC0tbGFzdCAudGltZWxpbmUtY2FyZF9fdGl0bGUsIC50aW1lbGluZS1jYXJkLS1sYXN0IC50aW1lbGluZS1jYXJkX19leGNlcnB0IHtcbiAgcGFkZGluZy1sZWZ0OiA1MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4udGltZWxpbmUtY2FyZC0tbGFzdCAudGltZWxpbmUtY2FyZF9faWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGxlZnQ6IGNhbGMoIDUwJSAtIDEyMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/timeline-card/timeline-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/timeline-card/timeline-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: TimelineCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineCardComponent", function() { return TimelineCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelineCardComponent = class TimelineCardComponent {
    constructor() {
        this.last = false;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimelineCardComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimelineCardComponent.prototype, "excerpt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimelineCardComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimelineCardComponent.prototype, "last", void 0);
TimelineCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline-card',
        template: __webpack_require__(/*! raw-loader!./timeline-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/timeline-card/timeline-card.component.html"),
        styles: [__webpack_require__(/*! ./timeline-card.component.scss */ "./src/app/components/timeline-card/timeline-card.component.scss")]
    })
], TimelineCardComponent);



/***/ }),

/***/ "./src/app/components/timeline-image/timeline-image.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/timeline-image/timeline-image.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline-image {\n  width: 175px;\n  height: 175px;\n  border-radius: 100%;\n  border: 3px solid var(--orange);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS1pbWFnZS90aW1lbGluZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS1pbWFnZS90aW1lbGluZS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS1pbWFnZS90aW1lbGluZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZS1pbWFnZSB7XG5cdHdpZHRoOiAxNzVweDtcblx0aGVpZ2h0OiAxNzVweDtcblx0Ym9yZGVyLXJhZGl1czogMTAwJTtcblx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tb3JhbmdlKTtcbn0iLCIudGltZWxpbmUtaW1hZ2Uge1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogMTc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW9yYW5nZSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/timeline-image/timeline-image.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/timeline-image/timeline-image.component.ts ***!
  \***********************************************************************/
/*! exports provided: TimelineImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineImageComponent", function() { return TimelineImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelineImageComponent = class TimelineImageComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('path')
], TimelineImageComponent.prototype, "path", void 0);
TimelineImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline-image',
        template: __webpack_require__(/*! raw-loader!./timeline-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/timeline-image/timeline-image.component.html"),
        styles: [__webpack_require__(/*! ./timeline-image.component.scss */ "./src/app/components/timeline-image/timeline-image.component.scss")]
    })
], TimelineImageComponent);



/***/ }),

/***/ "./src/app/pages/01-mensagem/chapter-intern-simple.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/01-mensagem/chapter-intern-simple.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLzAxLW1lbnNhZ2VtL2NoYXB0ZXItaW50ZXJuLXNpbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/01-mensagem/chapter-intern-simple.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/01-mensagem/chapter-intern-simple.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChapterInternSimpleComponentm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterInternSimpleComponentm", function() { return ChapterInternSimpleComponentm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChapterInternSimpleComponentm = class ChapterInternSimpleComponentm {
    constructor() {
        this.chapterHatInfo = {
            'image': 'assets/images/chapter-hat.jpg',
            'title': 'Capítulo 01',
            'subtitle': 'Mensagem do Conselho'
        };
    }
    ngOnInit() {
    }
};
ChapterInternSimpleComponentm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter-intern-simple',
        template: __webpack_require__(/*! raw-loader!./chapter-intern-simple.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/01-mensagem/chapter-intern-simple.component.html"),
        styles: [__webpack_require__(/*! ./chapter-intern-simple.component.scss */ "./src/app/pages/01-mensagem/chapter-intern-simple.component.scss")]
    })
], ChapterInternSimpleComponentm);



/***/ }),

/***/ "./src/app/pages/02-missao/missao.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/02-missao/missao.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.mission {\n  margin-top: 70px;\n  margin-bottom: 32px;\n  background-color: #d4effc;\n  border-radius: 3px;\n  padding: 32px 20px;\n  text-align: center;\n  color: #012461;\n}\n.mission__title {\n  font-family: \"Montserrat\", Arial, Verdana;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.mission__text {\n  font-size: 14px;\n  line-height: 1.71;\n}\n.beliefs {\n  margin: 70px 0;\n}\n.beliefs__title {\n  font-family: \"Montserrat\", Arial, Verdana;\n  font-size: 32px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #012461;\n  margin-bottom: 24px;\n}\n.beliefs__block {\n  box-shadow: 3px 6px 12px 0 rgba(48, 61, 85, 0.08);\n  margin-bottom: 24px;\n}\n.beliefs__block--title {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  padding: 20px 24px;\n  background-color: #012461;\n  font-size: 18px;\n  color: #ffffff;\n  margin-bottom: 0;\n  position: relative;\n  min-height: 82px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.beliefs__block--title:before {\n  content: \"\";\n  position: absolute;\n  bottom: -7px;\n  left: 0;\n  width: 31px;\n  height: 13px;\n  background-image: url('arrows.svg');\n}\n.beliefs__block--content {\n  font-size: 14px;\n  color: #012461;\n  padding: 15px 24px;\n  border: solid 1px #e6e9ef;\n  line-height: 1.71;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvcGFnZXMvMDItbWlzc2FvL21pc3Nhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvMDItbWlzc2FvL21pc3Nhby5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9GQUFBO0FBQ0Esa0dBQUE7QUFnQlI7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDZkQ7QUNIQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkZNUztFRUxULGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNGSVc7QUNFZjtBQ0xJO0VBQ0kseUNGTk87RUVPUCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRE9SO0FDTEk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QURPUjtBQ0pBO0VBQ0ksY0FBQTtBRE9KO0FDTkk7RUFDSSx5Q0ZuQk87RUVvQlAsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjRmZPO0VFZ0JQLG1CQUFBO0FEUVI7QUNOSTtFQUNJLGlEQUFBO0VBQ0EsbUJBQUE7QURRUjtBQ1BRO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJGekJHO0VFMEJILGVBQUE7RUFDQSxjRmhDQztFRWlDRCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEU1o7QUNSWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBRFVoQjtBQ05RO0VBQ0ksZUFBQTtFQUNBLGNGOUNHO0VFK0NILGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRFFaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvMDItbWlzc2FvL21pc3Nhby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuJGxhdG86IFx0XHRcdCdMYXRvJywgQXJpYWwsIFZlcmRhbmE7XG4kbW9udHNlcnJhdFx0OiBcdCdNb250c2VycmF0JywgQXJpYWwsIFZlcmRhbmE7XG5cbi8vIENvbG9yc1xuJGNsZWFyOiAgICAgXHQjZmZmZmZmO1xuJGRhcms6ICAgICAgXHQjMDAwMDAwO1xuJGdyZXk6XHRcdFx0I2I3YzFkMjtcbiRibHVlLWNsZWFyOlx0I2Q0ZWZmYztcbiRibHVlOiBcdFx0XHQjMDI4ZWQ0O1xuJGJsdWUtbWVkaXVtOiBcdCMwMTI0NjE7XG4kYmx1ZS1kYXJrOiBcdCMyMDI3MzQ7XG4kb3JhbmdlOlx0XHQjZjI2NjVlO1xuXG5cbjpyb290IHtcblx0LS1vcmFuZ2U6ICNmMjY2NWU7XG5cdC0tYmx1ZS1tOiAjMDEyNDYxO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4ubWlzc2lvbiB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVmZmM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMzJweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDEyNDYxO1xufVxuLm1pc3Npb25fX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5taXNzaW9uX190ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43MTtcbn1cblxuLmJlbGllZnMge1xuICBtYXJnaW46IDcwcHggMDtcbn1cbi5iZWxpZWZzX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIFZlcmRhbmE7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmJlbGllZnNfX2Jsb2NrIHtcbiAgYm94LXNoYWRvdzogM3B4IDZweCAxMnB4IDAgcmdiYSg0OCwgNjEsIDg1LCAwLjA4KTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5iZWxpZWZzX19ibG9jay0tdGl0bGUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjQ2MTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA4MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJlbGllZnNfX2Jsb2NrLS10aXRsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTdweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hcnJvd3Muc3ZnXCIpO1xufVxuLmJlbGllZnNfX2Jsb2NrLS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgcGFkZGluZzogMTVweCAyNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTZlOWVmO1xuICBsaW5lLWhlaWdodDogMS43MTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLm1pc3Npb24ge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jbGVhcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogMzJweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICAmX190ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICB9XG59XG4uYmVsaWVmcyB7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgICZfX2Jsb2NrIHtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDZweCAxMnB4IDAgcmdiYSg0OCwgNjEsIDg1LCAwLjA4KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgJi0tdGl0bGUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogODJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTdweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3dzLnN2ZycpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi0tY29udGVudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2U2ZTllZjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgLy8gLmJlbGllZnMge1xuICAgIC8vICAgICAmX190aXRsZSB7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/02-missao/missao.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/02-missao/missao.component.ts ***!
  \*****************************************************/
/*! exports provided: MissaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissaoComponent", function() { return MissaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MissaoComponent = class MissaoComponent {
    constructor() {
        this.chapterHatInfo = {
            'image': 'assets/images/missao-visao-crencas.jpg',
            'title': 'Capítulo 02',
            'subtitle': 'Missão, Visão e Crenças'
        };
    }
    ngOnInit() {
    }
};
MissaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-missao',
        template: __webpack_require__(/*! raw-loader!./missao.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/02-missao/missao.component.html"),
        styles: [__webpack_require__(/*! ./missao.component.scss */ "./src/app/pages/02-missao/missao.component.scss")]
    })
], MissaoComponent);



/***/ }),

/***/ "./src/app/pages/03-timeline/timeline.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/03-timeline/timeline.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chapter-content {\n  padding: 70px 0;\n  position: relative;\n}\n\n.timeline__line {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 3px;\n  background: var(--orange);\n  bottom: 280px;\n  z-index: -1;\n}\n\n.timeline__line::before {\n  content: \"\";\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background: var(--orange);\n}\n\n.timeline__item {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: top;\n          align-items: top;\n  align-content: flex-start;\n  margin-bottom: 64px;\n}\n\n@media (max-width: 991px) {\n  .timeline__item {\n    -webkit-box-pack: center !important;\n            justify-content: center !important;\n  }\n  .timeline__item:nth-of-type(odd), .timeline__item:nth-of-type(even) {\n    margin-top: 0 !important;\n  }\n  .timeline__item > app-timeline-card {\n    -webkit-box-ordinal-group: 1 !important;\n            order: 0 !important;\n    width: 100%;\n    margin: 0 auto 20px !important;\n    text-align: center !important;\n  }\n  .timeline__item > app-timeline-card ::ng-deep .timeline-card__icon {\n    margin: 0 auto !important;\n  }\n  .timeline__item > app-timeline-card::before, .timeline__item > app-timeline-card::after {\n    display: none;\n  }\n}\n\n@media (min-width: 992px) {\n  .timeline__item {\n    max-width: 870px;\n    margin-left: auto;\n    margin-right: auto;\n    flex-wrap: nowrap;\n  }\n}\n\n.timeline__item:nth-of-type(even) {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.timeline__item:nth-of-type(even) > app-timeline-card {\n  margin-right: 0;\n  margin-left: 30px;\n  text-align: left;\n}\n\n.timeline__item:nth-of-type(even) > app-timeline-card ::ng-deep .timeline-card__icon {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.timeline__item:last-child {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 0 !important;\n  z-index: 1;\n}\n\n.timeline__item:last-child > app-timeline-card {\n  margin-left: 0 !important;\n}\n\n.timeline__item:last-child > app-timeline-card::after, .timeline__item:last-child > app-timeline-card::before {\n  right: auto;\n  left: calc(50% - 3px) !important;\n  -webkit-transform: translateX(-50%) rotate(-45deg);\n          transform: translateX(-50%) rotate(-45deg);\n  top: 0;\n  border: 8px solid black;\n}\n\n.timeline__item:last-child > app-timeline-card::after {\n  top: 1px;\n  border-color: #fff #fff transparent transparent !important;\n}\n\n.timeline__item:last-child > app-timeline-card::before {\n  border-color: var(--orange) var(--orange) transparent transparent !important;\n}\n\n.timeline__item + .timeline__item:not(.timeline__item--img) {\n  margin-top: -140px;\n}\n\n.timeline__item:nth-of-type(even) > app-timeline-card::after, .timeline__item:nth-of-type(even) > app-timeline-card::before {\n  right: auto;\n  left: -10px;\n}\n\n.timeline__item:nth-of-type(even) > app-timeline-card::after {\n  border: 8px solid black;\n  left: -8px;\n  border-color: #fff transparent transparent #fff;\n}\n\n.timeline__item:nth-of-type(even) > app-timeline-card::before {\n  border: 8px solid black;\n  border-color: #e6e9ef transparent transparent #e6e9ef;\n}\n\n.timeline__item > app-timeline-card {\n  margin-right: 30px;\n  text-align: right;\n  position: relative;\n}\n\n.timeline__item > app-timeline-card::after, .timeline__item > app-timeline-card::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -4px;\n  box-sizing: border-box;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  border-radius: 2px;\n}\n\n.timeline__item > app-timeline-card::after {\n  border: 8px solid black;\n  right: -2px;\n  border-color: transparent #fff #fff transparent;\n}\n\n.timeline__item > app-timeline-card::before {\n  border: 8px solid black;\n  border-color: transparent #e6e9ef #e6e9ef transparent;\n}\n\n.timeline__item > app-timeline-card ::ng-deep .timeline-card__icon {\n  margin-left: auto;\n}\n\n@media (min-width: 992px) {\n  .timeline__item:nth-of-type(3) {\n    margin-top: -220px !important;\n  }\n  .timeline__item:nth-of-type(6) {\n    margin-top: -174px !important;\n  }\n  .timeline__item:nth-of-type(8) {\n    margin-top: -164px !important;\n  }\n  .timeline__item:nth-of-type(9) {\n    margin-top: -280px !important;\n  }\n  .timeline__item:nth-of-type(10) {\n    margin-top: -270px !important;\n  }\n  .timeline__item:nth-of-type(11) {\n    margin-top: -90px !important;\n  }\n  .timeline__item:nth-of-type(12) {\n    margin-top: -260px !important;\n  }\n}\n\n.col-left app-timeline-card,\n.col-left app-timeline-image {\n  float: right;\n}\n\n.col-right app-timeline-card,\n.col-right app-timeline-image {\n  float: left;\n}\n\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  margin: 0;\n  z-index: 0;\n}\n\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n\n.timeline-nav {\n  position: absolute;\n  left: 0;\n  top: 0;\n  max-width: 80px;\n}\n\n.timeline-nav__item {\n  display: block;\n  color: var(--blue-m);\n  font-size: 18px;\n  margin-bottom: 18px;\n  position: relative;\n  padding-left: 20px;\n  line-height: 1;\n  position: relative;\n  cursor: pointer;\n}\n\n.timeline-nav__item--active, .timeline-nav__item:hover {\n  color: var(--orange) !important;\n}\n\n.timeline-nav__item--active:before, .timeline-nav__item:hover:before {\n  opacity: 1 !important;\n}\n\n.timeline-nav__item:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  min-width: 12px;\n  height: 12px;\n  background: url('triangle-small-orange.svg') no-repeat;\n  background-size: cover;\n  opacity: 0;\n}\n\n.timeline-nav__item:hover {\n  text-decoration: none;\n}\n\n@media (max-width: 991px) {\n  .timeline-nav {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvcGFnZXMvMDMtdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLzAzLXRpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FER0M7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQUY7O0FEQ0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7RUFDRixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDSDs7QURHQztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtVQUFBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREVFO0VBTkQ7SUF5QkUsbUNBQUE7WUFBQSxrQ0FBQTtFQ2pCRDtFRERDO0lBRUMsd0JBQUE7RUNFRjtFREFDO0lBQ0MsdUNBQUE7WUFBQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtJQUNBLDZCQUFBO0VDRUY7RURERTtJQUNDLHlCQUFBO0VDR0g7RURBRTtJQUVDLGFBQUE7RUNDSDtBQUNGOztBREdFO0VBM0JEO0lBNEJFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDQUQ7QUFDRjs7QURJRTtFQUNDLHFCQUFBO1VBQUEseUJBQUE7QUNGSDs7QURHRztFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0k7RUFDQyxrQkFBQTtFQUNBLGNBQUE7QUNETDs7QURNRTtFQUNDLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUNKSDs7QURLRztFQUNDLHlCQUFBO0FDSEo7O0FES0k7RUFFQyxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0VBQ0EsTUFBQTtFQUNBLHVCQUFBO0FDSkw7O0FET0k7RUFDQyxRQUFBO0VBQ0EsMERBQUE7QUNMTDs7QURRSTtFQUNDLDRFQUFBO0FDTkw7O0FEWUU7RUFDQyxrQkFBQTtBQ1ZIOztBRGVJO0VBRUMsV0FBQTtFQUNBLFdBQUE7QUNkTDs7QURpQkk7RUFDQyx1QkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQ2ZMOztBRGtCSTtFQUNDLHVCQUFBO0VBQ0EscURBQUE7QUNoQkw7O0FEcUJFO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbkJIOztBRHFCRztFQUVDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBRUEsa0JBQUE7QUN0Qko7O0FENkJHO0VBQ0MsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7QUMzQko7O0FEOEJHO0VBQ0MsdUJBQUE7RUFDQSxxREFBQTtBQzVCSjs7QUQrQkc7RUFDQyxpQkFBQTtBQzdCSjs7QURrQ0U7RUFDQztJQUNDLDZCQUFBO0VDaENGO0VEa0NDO0lBQ0MsNkJBQUE7RUNoQ0Y7RURrQ0M7SUFDQyw2QkFBQTtFQ2hDRjtFRGtDQztJQUNDLDZCQUFBO0VDaENGO0VEa0NDO0lBQ0MsNkJBQUE7RUNoQ0Y7RURrQ0M7SUFDQyw0QkFBQTtFQ2hDRjtFRGtDQztJQUNDLDZCQUFBO0VDaENGO0FBQ0Y7O0FEc0NBOztFQUVDLFlBQUE7QUNuQ0Q7O0FEc0NBOztFQUVDLFdBQUE7QUNuQ0Q7O0FEdUNBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGdFQUFBO0VBQUEsd0RBQUE7RUFBQSxnREFBQTtFQUFBLDhFQUFBO0VBRUEsU0FBQTtFQUNBLFVBQUE7QUNyQ0Q7O0FEc0NDO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ3BDSDs7QUQ0Q0E7RUFDQyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBQzFDRDs7QUQ0Q0M7RUFDQyxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzFDRjs7QUQyQ0U7RUFDQywrQkFBQTtBQ3pDSDs7QUQyQ0c7RUFDQyxxQkFBQTtBQ3pDSjs7QUQ2Q0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDM0NIOztBRDhDRTtFQUNDLHFCQUFBO0FDNUNIOztBRGdEQztFQTFDRDtJQTJDRSxhQUFBO0VDN0NBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8wMy10aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFwdGVyLWNvbnRlbnQge1xuXHRwYWRkaW5nOiA3MHB4IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVsaW5lIHtcblx0Jl9fbGluZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdHdpZHRoOiAzcHg7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tb3JhbmdlKTtcblx0XHRib3R0b206IDI4MHB4O1xuXHRcdHotaW5kZXg6IC0xO1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAtNTBweDtcblx0XHRcdGxlZnQ6IDUwJTtcbiAgICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdHdpZHRoOiA4OHB4O1xuXHRcdFx0aGVpZ2h0OiA4OHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0tb3JhbmdlKTtcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRhbGlnbi1pdGVtczogdG9wO1xuXHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogNjRweDtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcblx0XHRcdCY6bnRoLW9mLXR5cGUob2RkKSxcblx0XHRcdCY6bnRoLW9mLXR5cGUoZXZlbikge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQ+IGFwcC10aW1lbGluZS1jYXJkIHtcblx0XHRcdFx0b3JkZXI6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvIDIwcHggIWltcG9ydGFudDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG5cdFx0XHRcdDo6bmctZGVlcCAudGltZWxpbmUtY2FyZF9faWNvbntcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6YmVmb3JlLFxuXHRcdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cdFx0XHRtYXgtd2lkdGg6IDg3MHB4O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHR9XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEzNDBweCkge1xuXHRcdFx0Ly8gcGFkZGluZzogMCAxNyU7XG5cdFx0fVxuXHRcdCY6bnRoLW9mLXR5cGUoZXZlbikge1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdD4gYXBwLXRpbWVsaW5lLWNhcmQge1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXG5cdFx0XHRcdDo6bmctZGVlcCAudGltZWxpbmUtY2FyZF9faWNvbiB7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHQ+IGFwcC10aW1lbGluZS1jYXJkIHtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcblxuXHRcdFx0XHQmOjphZnRlcixcblx0XHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0XHRyaWdodDogYXV0bztcblx0XHRcdFx0XHRsZWZ0OiBjYWxjKDUwJSAtIDNweCkgIWltcG9ydGFudDtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0XHRcdHRvcDogMXB4O1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2ZmZiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1vcmFuZ2UpIHZhcigtLW9yYW5nZSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JiArICY6bm90KC50aW1lbGluZV9faXRlbS0taW1nKSB7XG5cdFx0XHRtYXJnaW4tdG9wOiAtMTQwcHg7XG5cdFx0fVxuXG5cdFx0JjpudGgtb2YtdHlwZShldmVuKSB7XG5cdFx0XHQ+IGFwcC10aW1lbGluZS1jYXJkIHtcblx0XHRcdFx0Jjo6YWZ0ZXIsXG5cdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0cmlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0bGVmdDogLTEwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdFx0Ym9yZGVyOiA4cHggc29saWQgYmxhY2s7XG5cdFx0XHRcdFx0bGVmdDogLThweDtcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0XHRib3JkZXI6IDhweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNlNmU5ZWYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2U2ZTllZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdD4gYXBwLXRpbWVsaW5lLWNhcmQge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAzMHB4O1xuXHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdCY6OmFmdGVyLFxuXHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0aGVpZ2h0OiAwO1xuXHRcdFx0XHR0b3A6IDMwcHg7XG5cdFx0XHRcdHJpZ2h0OiAtNHB4O1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcblx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0Ly8gYm94LXNoYWRvdzogMCAxMnB4IDI0cHggMCByZ2JhKDQ4LCA2MSwgODUsIDAuMDgpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gei1pbmRleDogLTE7XG5cdFx0XHRcdC8vIG91dGxpbmU6IDFweCBzb2xpZCAjZTZlOWVmO1xuXHRcdFx0fVxuXG5cdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0XHRyaWdodDogLTJweDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIHRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRib3JkZXI6IDhweCBzb2xpZCBibGFjaztcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQgI2U2ZTllZiAjZTZlOWVmIHRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHQ6Om5nLWRlZXAgLnRpbWVsaW5lLWNhcmRfX2ljb24ge1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXHRcdFx0JjpudGgtb2YtdHlwZSgzKXtcblx0XHRcdFx0bWFyZ2luLXRvcDogLTIyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1vZi10eXBlKDYpe1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMTc0cHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6bnRoLW9mLXR5cGUoOCl7XG5cdFx0XHRcdG1hcmdpbi10b3A6IC0xNjRweCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdFx0JjpudGgtb2YtdHlwZSg5KXtcblx0XHRcdFx0bWFyZ2luLXRvcDogLTI4MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1vZi10eXBlKDEwKXtcblx0XHRcdFx0bWFyZ2luLXRvcDogLTI3MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1vZi10eXBlKDExKXtcblx0XHRcdFx0bWFyZ2luLXRvcDogLTkwcHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6bnRoLW9mLXR5cGUoMTIpe1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMjYwcHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHR9XHRcbn1cblxuLmNvbC1sZWZ0IGFwcC10aW1lbGluZS1jYXJkLFxuLmNvbC1sZWZ0IGFwcC10aW1lbGluZS1pbWFnZSB7XG5cdGZsb2F0OiByaWdodDtcbn1cblxuLmNvbC1yaWdodCBhcHAtdGltZWxpbmUtY2FyZCxcbi5jb2wtcmlnaHQgYXBwLXRpbWVsaW5lLWltYWdlIHtcblx0ZmxvYXQ6IGxlZnQ7XG59XG5cblxuLmZpeC1zY3JvbGwge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG5cdC8vIG1heC13aWR0aDogOTAlO1xuXHRtYXJnaW46IDA7XG5cdHotaW5kZXg6IDA7XG5cdCYuZml4ZWQge1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0dG9wOiAyMHB4O1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuXHRcdFx0Ly8gbWF4LXdpZHRoOiA4MCU7XG5cdH1cbn1cblxuLnRpbWVsaW5lLW5hdiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHRtYXgtd2lkdGg6IDgwcHg7XG5cblx0Jl9faXRlbSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y29sb3I6IHZhcigtLWJsdWUtbSk7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDE4cHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdCYtLWFjdGl2ZSwgJjpob3ZlciB7XG5cdFx0XHRjb2xvcjogdmFyKC0tb3JhbmdlKSAhaW1wb3J0YW50O1xuXG5cdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdG9wYWNpdHk6IDEgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRvcDogNTAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0bWluLXdpZHRoOiAxMnB4O1xuXHRcdFx0aGVpZ2h0OiAxMnB4O1xuXHRcdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLW9yYW5nZS5zdmcnKSBuby1yZXBlYXQ7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHR9XG5cblx0XHQmOmhvdmVye1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdH1cblx0fVxuXG5cdEBtZWRpYSAoIG1heC13aWR0aDogOTkxcHggKSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufSIsIi5jaGFwdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVsaW5lX19saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UpO1xuICBib3R0b206IDI4MHB4O1xuICB6LWluZGV4OiAtMTtcbn1cbi50aW1lbGluZV9fbGluZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDg4cHg7XG4gIGhlaWdodDogODhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UpO1xufVxuLnRpbWVsaW5lX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogdG9wO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC50aW1lbGluZV9faXRlbSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAudGltZWxpbmVfX2l0ZW06bnRoLW9mLXR5cGUob2RkKSwgLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpbWVsaW5lX19pdGVtID4gYXBwLXRpbWVsaW5lLWNhcmQge1xuICAgIG9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC50aW1lbGluZV9faXRlbSA+IGFwcC10aW1lbGluZS1jYXJkIDo6bmctZGVlcCAudGltZWxpbmUtY2FyZF9faWNvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAudGltZWxpbmVfX2l0ZW0gPiBhcHAtdGltZWxpbmUtY2FyZDo6YmVmb3JlLCAudGltZWxpbmVfX2l0ZW0gPiBhcHAtdGltZWxpbmUtY2FyZDo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGltZWxpbmVfX2l0ZW0ge1xuICAgIG1heC13aWR0aDogODcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG59XG4udGltZWxpbmVfX2l0ZW06bnRoLW9mLXR5cGUoZXZlbikge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKGV2ZW4pID4gYXBwLXRpbWVsaW5lLWNhcmQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKGV2ZW4pID4gYXBwLXRpbWVsaW5lLWNhcmQgOjpuZy1kZWVwIC50aW1lbGluZS1jYXJkX19pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi50aW1lbGluZV9faXRlbTpsYXN0LWNoaWxkIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cbi50aW1lbGluZV9faXRlbTpsYXN0LWNoaWxkID4gYXBwLXRpbWVsaW5lLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lX19pdGVtOmxhc3QtY2hpbGQgPiBhcHAtdGltZWxpbmUtY2FyZDo6YWZ0ZXIsIC50aW1lbGluZV9faXRlbTpsYXN0LWNoaWxkID4gYXBwLXRpbWVsaW5lLWNhcmQ6OmJlZm9yZSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDNweCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xufVxuLnRpbWVsaW5lX19pdGVtOmxhc3QtY2hpbGQgPiBhcHAtdGltZWxpbmUtY2FyZDo6YWZ0ZXIge1xuICB0b3A6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZV9faXRlbTpsYXN0LWNoaWxkID4gYXBwLXRpbWVsaW5lLWNhcmQ6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tb3JhbmdlKSB2YXIoLS1vcmFuZ2UpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmVfX2l0ZW0gKyAudGltZWxpbmVfX2l0ZW06bm90KC50aW1lbGluZV9faXRlbS0taW1nKSB7XG4gIG1hcmdpbi10b3A6IC0xNDBweDtcbn1cbi50aW1lbGluZV9faXRlbTpudGgtb2YtdHlwZShldmVuKSA+IGFwcC10aW1lbGluZS1jYXJkOjphZnRlciwgLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKGV2ZW4pID4gYXBwLXRpbWVsaW5lLWNhcmQ6OmJlZm9yZSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTBweDtcbn1cbi50aW1lbGluZV9faXRlbTpudGgtb2YtdHlwZShldmVuKSA+IGFwcC10aW1lbGluZS1jYXJkOjphZnRlciB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuICBsZWZ0OiAtOHB4O1xuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcbn1cbi50aW1lbGluZV9faXRlbTpudGgtb2YtdHlwZShldmVuKSA+IGFwcC10aW1lbGluZS1jYXJkOjpiZWZvcmUge1xuICBib3JkZXI6IDhweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiAjZTZlOWVmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlNmU5ZWY7XG59XG4udGltZWxpbmVfX2l0ZW0gPiBhcHAtdGltZWxpbmUtY2FyZCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1lbGluZV9faXRlbSA+IGFwcC10aW1lbGluZS1jYXJkOjphZnRlciwgLnRpbWVsaW5lX19pdGVtID4gYXBwLXRpbWVsaW5lLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogLTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4udGltZWxpbmVfX2l0ZW0gPiBhcHAtdGltZWxpbmUtY2FyZDo6YWZ0ZXIge1xuICBib3JkZXI6IDhweCBzb2xpZCBibGFjaztcbiAgcmlnaHQ6IC0ycHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIHRyYW5zcGFyZW50O1xufVxuLnRpbWVsaW5lX19pdGVtID4gYXBwLXRpbWVsaW5lLWNhcmQ6OmJlZm9yZSB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlNmU5ZWYgI2U2ZTllZiB0cmFuc3BhcmVudDtcbn1cbi50aW1lbGluZV9faXRlbSA+IGFwcC10aW1lbGluZS1jYXJkIDo6bmctZGVlcCAudGltZWxpbmUtY2FyZF9faWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50aW1lbGluZV9faXRlbTpudGgtb2YtdHlwZSgzKSB7XG4gICAgbWFyZ2luLXRvcDogLTIyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKDYpIHtcbiAgICBtYXJnaW4tdG9wOiAtMTc0cHggIWltcG9ydGFudDtcbiAgfVxuICAudGltZWxpbmVfX2l0ZW06bnRoLW9mLXR5cGUoOCkge1xuICAgIG1hcmdpbi10b3A6IC0xNjRweCAhaW1wb3J0YW50O1xuICB9XG4gIC50aW1lbGluZV9faXRlbTpudGgtb2YtdHlwZSg5KSB7XG4gICAgbWFyZ2luLXRvcDogLTI4MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKDEwKSB7XG4gICAgbWFyZ2luLXRvcDogLTI3MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpbWVsaW5lX19pdGVtOm50aC1vZi10eXBlKDExKSB7XG4gICAgbWFyZ2luLXRvcDogLTkwcHggIWltcG9ydGFudDtcbiAgfVxuICAudGltZWxpbmVfX2l0ZW06bnRoLW9mLXR5cGUoMTIpIHtcbiAgICBtYXJnaW4tdG9wOiAtMjYwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY29sLWxlZnQgYXBwLXRpbWVsaW5lLWNhcmQsXG4uY29sLWxlZnQgYXBwLXRpbWVsaW5lLWltYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29sLXJpZ2h0IGFwcC10aW1lbGluZS1jYXJkLFxuLmNvbC1yaWdodCBhcHAtdGltZWxpbmUtaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZpeC1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogMDtcbn1cbi5maXgtc2Nyb2xsLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAyMHB4O1xufVxuLnRpbWVsaW5lLW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG4udGltZWxpbmUtbmF2X19pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLW0pO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGltZWxpbmUtbmF2X19pdGVtLS1hY3RpdmUsIC50aW1lbGluZS1uYXZfX2l0ZW06aG92ZXIge1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKSAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lLW5hdl9faXRlbS0tYWN0aXZlOmJlZm9yZSwgLnRpbWVsaW5lLW5hdl9faXRlbTpob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUtbmF2X19pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWluLXdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2Z1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDA7XG59XG4udGltZWxpbmUtbmF2X19pdGVtOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC50aW1lbGluZS1uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/03-timeline/timeline.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/03-timeline/timeline.component.ts ***!
  \*********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_timeline_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/timeline/timeline.service */ "./src/app/services/timeline/timeline.service.ts");



let TimelineComponent = class TimelineComponent {
    constructor(timeline, renderer) {
        this.timeline = timeline;
        this.renderer = renderer;
        this.chapterHatInfo = {
            'image': 'assets/images/3-timeline.jpg',
            'title': 'Capítulo 03',
            'subtitle': 'Linha do Tempo'
        };
    }
    ngOnInit() {
    }
    onItemNavClick({ target }, navItem) {
        const elToNavigate = this.cards.find((el) => el.nativeElement.getAttribute('year') === navItem);
        if (!elToNavigate)
            return;
        elToNavigate.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        this.navItems.forEach(el => {
            this.renderer.removeClass(el.nativeElement, 'timeline-nav__item--active');
        });
        this.renderer.addClass(target, 'timeline-nav__item--active');
    }
};
TimelineComponent.ctorParameters = () => [
    { type: src_app_services_timeline_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('cards')
], TimelineComponent.prototype, "cards", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('navItems')
], TimelineComponent.prototype, "navItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('article', { static: false })
], TimelineComponent.prototype, "article", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav', { static: false })
], TimelineComponent.prototype, "nav", void 0);
TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/03-timeline/timeline.component.html"),
        styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/pages/03-timeline/timeline.component.scss")]
    })
], TimelineComponent);



/***/ }),

/***/ "./src/app/pages/04-trajetorias/chapter-intern.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/04-trajetorias/chapter-intern.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLzA0LXRyYWpldG9yaWFzL2NoYXB0ZXItaW50ZXJuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/04-trajetorias/chapter-intern.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/04-trajetorias/chapter-intern.component.ts ***!
  \******************************************************************/
/*! exports provided: ChapterInternComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterInternComponent", function() { return ChapterInternComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_testimonials_testimonials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/testimonials/testimonials.service */ "./src/app/services/testimonials/testimonials.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ChapterInternComponent = class ChapterInternComponent {
    constructor(testimonials) {
        this.testimonials = testimonials;
        this.testimonialPosition = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.chapterHatInfo = {
            'image': 'assets/images/4-trajetorias.jpg',
            'title': 'Capítulo 04',
            'subtitle': 'Trajetórias Ismart'
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.sendTestimonialPosition();
    }
    sendTestimonialPosition() {
        setTimeout(() => {
            const { offsetTop, offsetHeight } = this.testimonialComponent.nativeElement;
            this.testimonialPosition.next({
                offsetTop,
                offsetHeight
            });
        }, 2000);
    }
    onPrevTestimonial() {
        this.testimonials.navigatePrev();
    }
    onNextTestimonial() {
        this.testimonials.navigateNext();
    }
};
ChapterInternComponent.ctorParameters = () => [
    { type: _services_testimonials_testimonials_service__WEBPACK_IMPORTED_MODULE_2__["TestimonialsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('testimonialComponent', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], ChapterInternComponent.prototype, "testimonialComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: false })
], ChapterInternComponent.prototype, "modal", void 0);
ChapterInternComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter-intern',
        template: __webpack_require__(/*! raw-loader!./chapter-intern.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/04-trajetorias/chapter-intern.component.html"),
        styles: [__webpack_require__(/*! ./chapter-intern.component.scss */ "./src/app/pages/04-trajetorias/chapter-intern.component.scss")]
    })
], ChapterInternComponent);



/***/ }),

/***/ "./src/app/pages/05-parceiros/parceiros.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/05-parceiros/parceiros.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n.chapter-content .tag {\n  font-size: 12px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #ffffff;\n  background-color: #028ed4;\n  padding: 9px 14px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  display: inline-block;\n  margin-bottom: 24px;\n}\n.chapter-content__title {\n  font-size: 56px;\n  line-height: 1.14;\n  font-weight: bold;\n  margin-bottom: 24px;\n  color: #012461;\n  font-family: \"Montserrat\", Arial, Verdana;\n}\n.chapter-content__title--section {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: \"Montserrat\", Arial, Verdana;\n  text-transform: uppercase;\n  color: #012461;\n  letter-spacing: -0.5px;\n  margin-bottom: 20px;\n  margin-top: 70px;\n}\n.chapter-content__subtitle {\n  font-size: 21px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #012461;\n  text-transform: uppercase;\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n.chapter-content .text-big {\n  font-size: 24px;\n  line-height: 1.33;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 90px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  position: relative;\n}\n.chapter-content .blockquote__quote {\n  position: absolute;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  line-height: 1.33;\n  max-width: 280px;\n  font-size: 24px;\n  color: #012461;\n  width: 40%;\n  top: 50%;\n  margin-bottom: 0;\n  left: 100%;\n}\n.chapter-content .blockquote__quote:before {\n  content: \"\";\n  position: absolute;\n  top: -70px;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__quote cite {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.71;\n  color: #012461;\n  display: block;\n  margin-top: 15px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__quote cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 8px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .blockquote__quote.blockquote__white {\n  background-color: #ffffff;\n  padding: 90px 0 20px 0;\n}\n.chapter-content .blockquote__quote.blockquote__white:before {\n  top: 20px;\n}\n.chapter-content .blockquote__image {\n  color: #ffffff;\n  right: 4%;\n  left: initial;\n}\n.chapter-content .blockquote__image:before {\n  background-image: url('left-quote.svg');\n}\n.chapter-content .blockquote__image cite {\n  color: #ffffff;\n}\n.chapter-content .blockquote__image cite:before {\n  content: \"\";\n  background-image: url('triangle-small-white.svg');\n}\n.chapter-content .blockquote__big {\n  padding-top: 70px;\n  margin: 40px 0;\n  font-size: 24px;\n  color: #012461;\n  line-height: 1.33;\n  position: relative;\n}\n.chapter-content .blockquote__big:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__big cite {\n  font-size: 14px;\n  font-weight: bold;\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__big cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 5px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .list {\n  padding-left: 27px;\n  margin: 0;\n  list-style-image: url('triangle-orange.svg');\n}\n.chapter-content .list li {\n  font-size: 18px;\n  line-height: 1.78;\n  color: #012461;\n  margin-bottom: 20px;\n}\n@media (max-width: 992px) {\n  .chapter-content__title {\n    font-size: 42px;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .blockquote__quote {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 100%;\n    font-size: 22px;\n    max-width: inherit;\n    margin-top: 120px;\n  }\n  .chapter-content .blockquote__quote.blockquote__image:before {\n    left: 15px;\n    background-image: url('left-quote-blue.svg');\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content {\n    padding: 30px 0;\n  }\n  .chapter-content__title {\n    font-size: 24px;\n  }\n  .chapter-content__title--section {\n    font-size: 16px;\n  }\n  .chapter-content__subtitle {\n    font-size: 16px;\n  }\n  .chapter-content p {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n  .chapter-content__img {\n    margin: 30px 0;\n  }\n  .chapter-content .blockquote__quote {\n    font-size: 21px;\n    color: #012461;\n    padding: 0 15px;\n  }\n  .chapter-content .list li {\n    font-size: 16px;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvcGFnZXMvMDUtcGFyY2Vpcm9zL3BhcmNlaXJvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvMDUtcGFyY2Vpcm9zL3BhcmNlaXJvcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWNvbnRlbnQvY2hhcHRlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYmV0by9Eb2N1bWVudHMvZGV2L2lzbWFydC1yYTIwMTkvc3JjL2FwcC9jb21wb25lbnRzL2NoYXB0ZXItY29udGVudC1hbGwvY2hhcHRlci1jb250ZW50LWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBREEsb0ZBQUE7QUFDQSxrR0FBQTtBQURBLG9GQUFBO0FBQ0Esa0dBQUE7QUFEQSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ1REO0FET0E7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDSkQ7QUNkQTtFQUNJLGVBQUE7QURpQko7QUNoQkk7RUFDSSxlQUFBO0VBQ0EsY0ZPTztFRU5QLGlCQUFBO0FEa0JSO0FDWm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGN4QjtBQ1JJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FEVVI7QUNUUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEV1o7QUNUUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNGdEJHO0VFdUJILGdCQUFBO0FEV1o7QUNWWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRFloQjtBQ1JJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnZDTztFRXdDUCxlQUFBO0VBQ0EseUJGOUNLO0FDd0RiO0FDUkk7RUFDSSxpQkFBQTtBRFVSO0FDVFE7RUFDSSxrQkFBQTtBRFdaO0FDVlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEWWhCO0FDUkk7RUFDSSxnQkFBQTtFQUNOLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDTSxRQUFBO0VBQ0EsTUFBQTtBRFVSO0FDVEU7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBRFdIO0FDVkc7RUFDQyxhQUFBO0FEWUo7QUNURTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ1MsWUFBQTtFQUNULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRjFFWTtFRTJFSCxpQkFBQTtFQUNBLGVBQUE7RUFDVCxrQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QURXSDtBQ1ZHO0VBQ0MscUJGakZNO0VFa0ZOLG1CRmxGTTtFRW1GTixxQkFBQTtFQUNBLGNGeEZTO0FDb0diO0FDUkk7RUFDSTtJQUNJLFdBQUE7RURVVjtBQUNGO0FDUkk7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFRFVWO0FBQ0Y7QUNSSTtFQUNJO0lBQ0ksV0FBQTtFRFVWO0VDVFU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRFdkO0VDUk07SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtZQUFBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RURVVjtBQUNGO0FDUkk7RUFDSTtJQUNJLFVBQUE7RURVVjtFQ1JNO0lBQ0ksYUFBQTtFRFVWO0FBQ0Y7QUNOQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnRUFBQTtFQUFBLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSw4RUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBRFNKO0FDUkk7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEVVI7QUNQSTtFQWZKO0lBZ0JRLGNBQUE7RURVTjtBQUNGO0FEdEpBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ3lKRDtBRDNKQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUM4SkQ7QUNoTEE7RUFDSSxlQUFBO0FEbUxKO0FDbExJO0VBQ0ksZUFBQTtFQUNBLGNGT087RUVOUCxpQkFBQTtBRG9MUjtBQzlLb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEZ0x4QjtBQzFLSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRDRLUjtBQzNLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FENktaO0FDM0tRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0Z0Qkc7RUV1QkgsZ0JBQUE7QUQ2S1o7QUM1S1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUQ4S2hCO0FDMUtJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnZDTztFRXdDUCxlQUFBO0VBQ0EseUJGOUNLO0FDME5iO0FDMUtJO0VBQ0ksaUJBQUE7QUQ0S1I7QUMzS1E7RUFDSSxrQkFBQTtBRDZLWjtBQzVLWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQ4S2hCO0FDMUtJO0VBQ0ksZ0JBQUE7RUFDTixVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ00sUUFBQTtFQUNBLE1BQUE7QUQ0S1I7QUMzS0U7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBRDZLSDtBQzVLRztFQUNDLGFBQUE7QUQ4S0o7QUMzS0U7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNTLFlBQUE7RUFDVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0YxRVk7RUUyRUgsaUJBQUE7RUFDQSxlQUFBO0VBQ1Qsa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FENktIO0FDNUtHO0VBQ0MscUJGakZNO0VFa0ZOLG1CRmxGTTtFRW1GTixxQkFBQTtFQUNBLGNGeEZTO0FDc1FiO0FDMUtJO0VBQ0k7SUFDSSxXQUFBO0VENEtWO0FBQ0Y7QUMxS0k7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFRDRLVjtBQUNGO0FDMUtJO0VBQ0k7SUFDSSxXQUFBO0VENEtWO0VDM0tVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUQ2S2Q7RUMxS007SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtZQUFBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUQ0S1Y7QUFDRjtBQzFLSTtFQUNJO0lBQ0ksVUFBQTtFRDRLVjtFQzFLTTtJQUNJLGFBQUE7RUQ0S1Y7QUFDRjtBQ3hLQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnRUFBQTtFQUFBLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSw4RUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBRDJLSjtBQzFLSTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUQ0S1I7QUN6S0k7RUFmSjtJQWdCUSxjQUFBO0VENEtOO0FBQ0Y7QUV0VUk7RUFDSSxlQUFBO0VBQ0EseUNIRE87RUdFUCxjSENLO0VHQUwseUJISUU7RUdIRixpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FGeVVSO0FFdlVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNIUE87RUdRUCx5Q0hoQk87QUN5VmY7QUV4VVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0hwQkc7RUdxQkgseUJBQUE7RUFDQSxjSGRHO0VHZUgsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FGMFVaO0FFdlVJO0VBQ0ksZUFBQTtFQUNBLHlDSDlCTztFRytCUCxjSHZCTztFR3dCUCx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUZ5VVI7QUV2VUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUZ5VVI7QUVuVW9CO0VBQ0ksZUFBQTtFQUNBLGNIcENkO0VHcUNjLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGcVV4QjtBRS9USTtFQUNJLGtCQUFBO0FGaVVSO0FFOVRRO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjSHpERztFRzBESCxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRmdVWjtBRS9UWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBRmlVaEI7QUUvVFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNIM0VEO0VHNEVDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRmlVaEI7QUVoVWdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FGa1VwQjtBRS9UWTtFQUNJLHlCSGpHSDtFR2tHRyxzQkFBQTtBRmlVaEI7QUVoVWdCO0VBQ0ksU0FBQTtBRmtVcEI7QUU5VFE7RUFDSSxjSHpHQztFRzBHRCxTQUFBO0VBQ0EsYUFBQTtBRmdVWjtBRS9UWTtFQUNJLHVDQUFBO0FGaVVoQjtBRS9UWTtFQUNJLGNIaEhIO0FDaWJiO0FFaFVnQjtFQUNJLFdBQUE7RUFDQSxpREFBQTtBRmtVcEI7QUU5VFE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0h0SEc7RUd1SEgsaUJBQUE7RUFDQSxrQkFBQTtBRmdVWjtBRS9UWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBRmlVaEI7QUUvVFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUZpVWhCO0FFaFVnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRmtVcEI7QUU3VEk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBRitUUjtBRTlUUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNIN0pHO0VHOEpILG1CQUFBO0FGZ1VaO0FFN1RJO0VBQ0k7SUFDSSxlQUFBO0VGK1RWO0FBQ0Y7QUU3VEk7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO1lBQUEsa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VGK1RWO0VFN1RjO0lBQ0ksVUFBQTtJQUNBLDRDQUFBO0VGK1RsQjtBQUNGO0FFM1RJO0VBbE1KO0lBbU1RLGVBQUE7RUY4VE47RUU3VE07SUFDSSxlQUFBO0VGK1RWO0VFOVRVO0lBQ0ksZUFBQTtFRmdVZDtFRTdUTTtJQUNJLGVBQUE7RUYrVFY7RUU3VE07SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUYrVFY7RUU3VE07SUFDSSxjQUFBO0VGK1RWO0VFN1RNO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VGK1RWO0VFM1RVO0lBQ0ksZUFBQTtFRjZUZDtBQUNGO0FFeFRBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGdFQUFBO0VBQUEsd0RBQUE7RUFBQSxnREFBQTtFQUFBLDhFQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FGMlRKO0FFMVRJO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRjRUUjtBRXpUSTtFQWZKO0lBZ0JRLGNBQUE7RUY0VE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLzA1LXBhcmNlaXJvcy9wYXJjZWlyb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uY2hhcHRlci1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBsaW5lLWhlaWdodDogMS43ODtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuY29sLW1kLTYgPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiA4OHB4O1xuICBjb2xvcjogI2YyNjY1ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcge1xuICBtYXJnaW46IDQwcHggMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX2ltZyBmaWdjYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWF4LXdpZHRoOiAxNnB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAxMDAlO1xuICB3aWR0aDogNDElO1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeV9faXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YzFkMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDI4ZWQ0O1xuICBiYWNrZ3JvdW5kOiAjMDI4ZWQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgICB3aWR0aDogNDNweDtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgbGVmdDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMDtcbn1cbi5maXgtc2Nyb2xsLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuZml4LXNjcm9sbCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn1cblxuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4uY2hhcHRlci1jb250ZW50IHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDEuNzg7XG59XG4uY2hhcHRlci1jb250ZW50IC5yb3c6Zmlyc3QtY2hpbGQgLmNvbC1tZC02ID4gcDpmaXJzdC1vZi10eXBlOmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogODhweDtcbiAgY29sb3I6ICNmMjY2NWU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogODlweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGZpZ2NhcHRpb24gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIG1heC13aWR0aDogMTZweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDQxJTtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgY29sb3I6ICMwMTI0NjE7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnkge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhcHRlci1jb250ZW50IC5nYWxsZXJ5X19pdGVtIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2MxZDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluazpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAyOGVkNDtcbiAgYmFja2dyb3VuZDogIzAyOGVkNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluayB7XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG4uZml4LXNjcm9sbC5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZpeC1zY3JvbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59XG5cbi5jaGFwdGVyLWNvbnRlbnQgLnRhZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjhlZDQ7XG4gIHBhZGRpbmc6IDlweCAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBsaW5lLWhlaWdodDogMS4xNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xufVxuLmNoYXB0ZXItY29udGVudF9fdGl0bGUtLXNlY3Rpb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnRleHQtYmlnIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuY29sLW1kLTYgPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiA4OHB4O1xuICBjb2xvcjogI2YyNjY1ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgd2lkdGg6IDQwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxlZnQ6IDEwMCU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTcwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNDlweDtcbiAgbGVmdDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlIGNpdGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUgY2l0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2Z1wiKTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9fd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA5MHB4IDAgMjBweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9fd2hpdGU6YmVmb3JlIHtcbiAgdG9wOiAyMHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2Uge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcmlnaHQ6IDQlO1xuICBsZWZ0OiBpbml0aWFsO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2U6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLnN2Z1wiKTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2ltYWdlIGNpdGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2ltYWdlIGNpdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC13aGl0ZS5zdmdcIik7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWcge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNDlweDtcbiAgbGVmdDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2JpZyBjaXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWcgY2l0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2Z1wiKTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAubGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMjdweDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLW9yYW5nZS5zdmdcIik7XG59XG4uY2hhcHRlci1jb250ZW50IC5saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS43ODtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXB0ZXItY29udGVudF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiBpbmhlcml0O1xuICAgIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9faW1hZ2U6YmVmb3JlIHtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnRfX3RpdGxlLS1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudF9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnRfX2ltZyB7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBjb2xvcjogIzAxMjQ2MTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAubGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG4uZml4LXNjcm9sbC5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZpeC1zY3JvbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43ODtcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgLmNvbC1tZC02IHtcbiAgICAgICAgICAgICAgICAmID4gcCB7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZTpmaXJzdC1sZXR0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICZfX2ltZyB7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGZpZ2NhcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNsZWFyO1xuICAgIH1cbiAgICAuZ2FsbGVyeSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNoYXJlIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cdFx0Ji0taXRlbXtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiA4cHggMDtcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYtLWxpbmt7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJGdyZXk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRibHVlO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGNvbG9yOiAkY2xlYXI7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIC5zaGFyZSB7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAmLS1saW5rIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRvcCAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAwO1xuICAgICYuZml4ZWQge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vY2hhcHRlci1jb250ZW50L2NoYXB0ZXItY29udGVudC5jb21wb25lbnQuc2Nzc1wiO1xuXG4uY2hhcHRlci1jb250ZW50IHtcbiAgICAudGFnIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgICBwYWRkaW5nOiA5cHggMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgJi0tc2VjdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIC50ZXh0LWJpZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIC5jb2wtbWQtNiB7XG4gICAgICAgICAgICAgICAgJiA+IHAge1xuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19pbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5ibG9ja3F1b3RlIHtcbiAgICAgICAgJl9fcXVvdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC03MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLW9yYW5nZS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYmxvY2txdW90ZV9fd2hpdGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjbGVhcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNsZWFyO1xuICAgICAgICAgICAgcmlnaHQ6IDQlO1xuICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS5zdmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNpdGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLXdoaXRlLnN2ZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19iaWcge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC1vcmFuZ2Uuc3ZnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpc3Qge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLW9yYW5nZS5zdmcnKTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzg7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgICAgICAmLmJsb2NrcXVvdGVfX2ltYWdlIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICYtLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICAgICZfX2ltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMTI0NjE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZml4LXNjcm9sbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDA7XG4gICAgJi5maXhlZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/05-parceiros/parceiros.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/05-parceiros/parceiros.component.ts ***!
  \***********************************************************/
/*! exports provided: ParceirosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParceirosComponent", function() { return ParceirosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ParceirosComponent = class ParceirosComponent {
    constructor() {
        this.chapterHatInfo = {
            'image': 'assets/images/5-parceiros.jpg',
            'title': 'Capítulo 05',
            'subtitle': 'Parceiros Ismart'
        };
    }
    ngOnInit() {
    }
};
ParceirosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parceiros',
        template: __webpack_require__(/*! raw-loader!./parceiros.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/05-parceiros/parceiros.component.html"),
        styles: [__webpack_require__(/*! ./parceiros.component.scss */ "./src/app/pages/05-parceiros/parceiros.component.scss")]
    })
], ParceirosComponent);



/***/ }),

/***/ "./src/app/pages/06-horizonte/horizonte.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/06-horizonte/horizonte.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n.chapter-content .tag {\n  font-size: 12px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #ffffff;\n  background-color: #028ed4;\n  padding: 9px 14px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  display: inline-block;\n  margin-bottom: 24px;\n}\n.chapter-content__title {\n  font-size: 56px;\n  line-height: 1.14;\n  font-weight: bold;\n  margin-bottom: 24px;\n  color: #012461;\n  font-family: \"Montserrat\", Arial, Verdana;\n}\n.chapter-content__title--section {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: \"Montserrat\", Arial, Verdana;\n  text-transform: uppercase;\n  color: #012461;\n  letter-spacing: -0.5px;\n  margin-bottom: 20px;\n  margin-top: 70px;\n}\n.chapter-content__subtitle {\n  font-size: 21px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #012461;\n  text-transform: uppercase;\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n.chapter-content .text-big {\n  font-size: 24px;\n  line-height: 1.33;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 90px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  position: relative;\n}\n.chapter-content .blockquote__quote {\n  position: absolute;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  line-height: 1.33;\n  max-width: 280px;\n  font-size: 24px;\n  color: #012461;\n  width: 40%;\n  top: 50%;\n  margin-bottom: 0;\n  left: 100%;\n}\n.chapter-content .blockquote__quote:before {\n  content: \"\";\n  position: absolute;\n  top: -70px;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__quote cite {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.71;\n  color: #012461;\n  display: block;\n  margin-top: 15px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__quote cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 8px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .blockquote__quote.blockquote__white {\n  background-color: #ffffff;\n  padding: 90px 0 20px 0;\n}\n.chapter-content .blockquote__quote.blockquote__white:before {\n  top: 20px;\n}\n.chapter-content .blockquote__image {\n  color: #ffffff;\n  right: 4%;\n  left: initial;\n}\n.chapter-content .blockquote__image:before {\n  background-image: url('left-quote.svg');\n}\n.chapter-content .blockquote__image cite {\n  color: #ffffff;\n}\n.chapter-content .blockquote__image cite:before {\n  content: \"\";\n  background-image: url('triangle-small-white.svg');\n}\n.chapter-content .blockquote__big {\n  padding-top: 70px;\n  margin: 40px 0;\n  font-size: 24px;\n  color: #012461;\n  line-height: 1.33;\n  position: relative;\n}\n.chapter-content .blockquote__big:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__big cite {\n  font-size: 14px;\n  font-weight: bold;\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__big cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 5px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .list {\n  padding-left: 27px;\n  margin: 0;\n  list-style-image: url('triangle-orange.svg');\n}\n.chapter-content .list li {\n  font-size: 18px;\n  line-height: 1.78;\n  color: #012461;\n  margin-bottom: 20px;\n}\n@media (max-width: 992px) {\n  .chapter-content__title {\n    font-size: 42px;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .blockquote__quote {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 100%;\n    font-size: 22px;\n    max-width: inherit;\n    margin-top: 120px;\n  }\n  .chapter-content .blockquote__quote.blockquote__image:before {\n    left: 15px;\n    background-image: url('left-quote-blue.svg');\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content {\n    padding: 30px 0;\n  }\n  .chapter-content__title {\n    font-size: 24px;\n  }\n  .chapter-content__title--section {\n    font-size: 16px;\n  }\n  .chapter-content__subtitle {\n    font-size: 16px;\n  }\n  .chapter-content p {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n  .chapter-content__img {\n    margin: 30px 0;\n  }\n  .chapter-content .blockquote__quote {\n    font-size: 21px;\n    color: #012461;\n    padding: 0 15px;\n  }\n  .chapter-content .list li {\n    font-size: 16px;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvcGFnZXMvMDYtaG9yaXpvbnRlL2hvcml6b250ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvMDYtaG9yaXpvbnRlL2hvcml6b250ZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWNvbnRlbnQvY2hhcHRlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYmV0by9Eb2N1bWVudHMvZGV2L2lzbWFydC1yYTIwMTkvc3JjL2FwcC9jb21wb25lbnRzL2NoYXB0ZXItY29udGVudC1hbGwvY2hhcHRlci1jb250ZW50LWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBREEsb0ZBQUE7QUFDQSxrR0FBQTtBQURBLG9GQUFBO0FBQ0Esa0dBQUE7QUFEQSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ1REO0FET0E7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDSkQ7QUNkQTtFQUNJLGVBQUE7QURpQko7QUNoQkk7RUFDSSxlQUFBO0VBQ0EsY0ZPTztFRU5QLGlCQUFBO0FEa0JSO0FDWm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGN4QjtBQ1JJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FEVVI7QUNUUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEV1o7QUNUUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNGdEJHO0VFdUJILGdCQUFBO0FEV1o7QUNWWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRFloQjtBQ1JJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnZDTztFRXdDUCxlQUFBO0VBQ0EseUJGOUNLO0FDd0RiO0FDUkk7RUFDSSxpQkFBQTtBRFVSO0FDVFE7RUFDSSxrQkFBQTtBRFdaO0FDVlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEWWhCO0FDUkk7RUFDSSxnQkFBQTtFQUNOLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDTSxRQUFBO0VBQ0EsTUFBQTtBRFVSO0FDVEU7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBRFdIO0FDVkc7RUFDQyxhQUFBO0FEWUo7QUNURTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ1MsWUFBQTtFQUNULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRjFFWTtFRTJFSCxpQkFBQTtFQUNBLGVBQUE7RUFDVCxrQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QURXSDtBQ1ZHO0VBQ0MscUJGakZNO0VFa0ZOLG1CRmxGTTtFRW1GTixxQkFBQTtFQUNBLGNGeEZTO0FDb0diO0FDUkk7RUFDSTtJQUNJLFdBQUE7RURVVjtBQUNGO0FDUkk7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFRFVWO0FBQ0Y7QUNSSTtFQUNJO0lBQ0ksV0FBQTtFRFVWO0VDVFU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRFdkO0VDUk07SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtZQUFBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RURVVjtBQUNGO0FDUkk7RUFDSTtJQUNJLFVBQUE7RURVVjtFQ1JNO0lBQ0ksYUFBQTtFRFVWO0FBQ0Y7QUNOQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnRUFBQTtFQUFBLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSw4RUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBRFNKO0FDUkk7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEVVI7QUNQSTtFQWZKO0lBZ0JRLGNBQUE7RURVTjtBQUNGO0FEdEpBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ3lKRDtBRDNKQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUM4SkQ7QUNoTEE7RUFDSSxlQUFBO0FEbUxKO0FDbExJO0VBQ0ksZUFBQTtFQUNBLGNGT087RUVOUCxpQkFBQTtBRG9MUjtBQzlLb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEZ0x4QjtBQzFLSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRDRLUjtBQzNLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FENktaO0FDM0tRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0Z0Qkc7RUV1QkgsZ0JBQUE7QUQ2S1o7QUM1S1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUQ4S2hCO0FDMUtJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnZDTztFRXdDUCxlQUFBO0VBQ0EseUJGOUNLO0FDME5iO0FDMUtJO0VBQ0ksaUJBQUE7QUQ0S1I7QUMzS1E7RUFDSSxrQkFBQTtBRDZLWjtBQzVLWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQ4S2hCO0FDMUtJO0VBQ0ksZ0JBQUE7RUFDTixVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ00sUUFBQTtFQUNBLE1BQUE7QUQ0S1I7QUMzS0U7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBRDZLSDtBQzVLRztFQUNDLGFBQUE7QUQ4S0o7QUMzS0U7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNTLFlBQUE7RUFDVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0YxRVk7RUUyRUgsaUJBQUE7RUFDQSxlQUFBO0VBQ1Qsa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FENktIO0FDNUtHO0VBQ0MscUJGakZNO0VFa0ZOLG1CRmxGTTtFRW1GTixxQkFBQTtFQUNBLGNGeEZTO0FDc1FiO0FDMUtJO0VBQ0k7SUFDSSxXQUFBO0VENEtWO0FBQ0Y7QUMxS0k7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFRDRLVjtBQUNGO0FDMUtJO0VBQ0k7SUFDSSxXQUFBO0VENEtWO0VDM0tVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUQ2S2Q7RUMxS007SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtZQUFBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUQ0S1Y7QUFDRjtBQzFLSTtFQUNJO0lBQ0ksVUFBQTtFRDRLVjtFQzFLTTtJQUNJLGFBQUE7RUQ0S1Y7QUFDRjtBQ3hLQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnRUFBQTtFQUFBLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSw4RUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBRDJLSjtBQzFLSTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUQ0S1I7QUN6S0k7RUFmSjtJQWdCUSxjQUFBO0VENEtOO0FBQ0Y7QUV0VUk7RUFDSSxlQUFBO0VBQ0EseUNIRE87RUdFUCxjSENLO0VHQUwseUJISUU7RUdIRixpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FGeVVSO0FFdlVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNIUE87RUdRUCx5Q0hoQk87QUN5VmY7QUV4VVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0hwQkc7RUdxQkgseUJBQUE7RUFDQSxjSGRHO0VHZUgsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FGMFVaO0FFdlVJO0VBQ0ksZUFBQTtFQUNBLHlDSDlCTztFRytCUCxjSHZCTztFR3dCUCx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUZ5VVI7QUV2VUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUZ5VVI7QUVuVW9CO0VBQ0ksZUFBQTtFQUNBLGNIcENkO0VHcUNjLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGcVV4QjtBRS9USTtFQUNJLGtCQUFBO0FGaVVSO0FFOVRRO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjSHpERztFRzBESCxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRmdVWjtBRS9UWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBRmlVaEI7QUUvVFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNIM0VEO0VHNEVDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRmlVaEI7QUVoVWdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FGa1VwQjtBRS9UWTtFQUNJLHlCSGpHSDtFR2tHRyxzQkFBQTtBRmlVaEI7QUVoVWdCO0VBQ0ksU0FBQTtBRmtVcEI7QUU5VFE7RUFDSSxjSHpHQztFRzBHRCxTQUFBO0VBQ0EsYUFBQTtBRmdVWjtBRS9UWTtFQUNJLHVDQUFBO0FGaVVoQjtBRS9UWTtFQUNJLGNIaEhIO0FDaWJiO0FFaFVnQjtFQUNJLFdBQUE7RUFDQSxpREFBQTtBRmtVcEI7QUU5VFE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0h0SEc7RUd1SEgsaUJBQUE7RUFDQSxrQkFBQTtBRmdVWjtBRS9UWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBRmlVaEI7QUUvVFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUZpVWhCO0FFaFVnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRmtVcEI7QUU3VEk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBRitUUjtBRTlUUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNIN0pHO0VHOEpILG1CQUFBO0FGZ1VaO0FFN1RJO0VBQ0k7SUFDSSxlQUFBO0VGK1RWO0FBQ0Y7QUU3VEk7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO1lBQUEsa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VGK1RWO0VFN1RjO0lBQ0ksVUFBQTtJQUNBLDRDQUFBO0VGK1RsQjtBQUNGO0FFM1RJO0VBbE1KO0lBbU1RLGVBQUE7RUY4VE47RUU3VE07SUFDSSxlQUFBO0VGK1RWO0VFOVRVO0lBQ0ksZUFBQTtFRmdVZDtFRTdUTTtJQUNJLGVBQUE7RUYrVFY7RUU3VE07SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUYrVFY7RUU3VE07SUFDSSxjQUFBO0VGK1RWO0VFN1RNO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VGK1RWO0VFM1RVO0lBQ0ksZUFBQTtFRjZUZDtBQUNGO0FFeFRBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGdFQUFBO0VBQUEsd0RBQUE7RUFBQSxnREFBQTtFQUFBLDhFQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FGMlRKO0FFMVRJO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRjRUUjtBRXpUSTtFQWZKO0lBZ0JRLGNBQUE7RUY0VE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLzA2LWhvcml6b250ZS9ob3Jpem9udGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uY2hhcHRlci1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBsaW5lLWhlaWdodDogMS43ODtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuY29sLW1kLTYgPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiA4OHB4O1xuICBjb2xvcjogI2YyNjY1ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcge1xuICBtYXJnaW46IDQwcHggMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX2ltZyBmaWdjYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWF4LXdpZHRoOiAxNnB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAxMDAlO1xuICB3aWR0aDogNDElO1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeV9faXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YzFkMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDI4ZWQ0O1xuICBiYWNrZ3JvdW5kOiAjMDI4ZWQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgICB3aWR0aDogNDNweDtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgbGVmdDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMDtcbn1cbi5maXgtc2Nyb2xsLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuZml4LXNjcm9sbCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn1cblxuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4uY2hhcHRlci1jb250ZW50IHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDEuNzg7XG59XG4uY2hhcHRlci1jb250ZW50IC5yb3c6Zmlyc3QtY2hpbGQgLmNvbC1tZC02ID4gcDpmaXJzdC1vZi10eXBlOmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogODhweDtcbiAgY29sb3I6ICNmMjY2NWU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogODlweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGZpZ2NhcHRpb24gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIG1heC13aWR0aDogMTZweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDQxJTtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgY29sb3I6ICMwMTI0NjE7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnkge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhcHRlci1jb250ZW50IC5nYWxsZXJ5X19pdGVtIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2MxZDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluazpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAyOGVkNDtcbiAgYmFja2dyb3VuZDogIzAyOGVkNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluayB7XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG4uZml4LXNjcm9sbC5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZpeC1zY3JvbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59XG5cbi5jaGFwdGVyLWNvbnRlbnQgLnRhZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjhlZDQ7XG4gIHBhZGRpbmc6IDlweCAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBsaW5lLWhlaWdodDogMS4xNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xufVxuLmNoYXB0ZXItY29udGVudF9fdGl0bGUtLXNlY3Rpb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnRleHQtYmlnIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuY29sLW1kLTYgPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiA4OHB4O1xuICBjb2xvcjogI2YyNjY1ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgd2lkdGg6IDQwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxlZnQ6IDEwMCU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTcwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNDlweDtcbiAgbGVmdDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlIGNpdGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUgY2l0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2Z1wiKTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9fd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA5MHB4IDAgMjBweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9fd2hpdGU6YmVmb3JlIHtcbiAgdG9wOiAyMHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2Uge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcmlnaHQ6IDQlO1xuICBsZWZ0OiBpbml0aWFsO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2U6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLnN2Z1wiKTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2ltYWdlIGNpdGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2ltYWdlIGNpdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC13aGl0ZS5zdmdcIik7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWcge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNDlweDtcbiAgbGVmdDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2JpZyBjaXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWcgY2l0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2Z1wiKTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAubGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMjdweDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLW9yYW5nZS5zdmdcIik7XG59XG4uY2hhcHRlci1jb250ZW50IC5saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS43ODtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXB0ZXItY29udGVudF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiBpbmhlcml0O1xuICAgIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9faW1hZ2U6YmVmb3JlIHtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnRfX3RpdGxlLS1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudF9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnRfX2ltZyB7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBjb2xvcjogIzAxMjQ2MTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAubGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG4uZml4LXNjcm9sbC5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZpeC1zY3JvbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43ODtcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgLmNvbC1tZC02IHtcbiAgICAgICAgICAgICAgICAmID4gcCB7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZTpmaXJzdC1sZXR0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICZfX2ltZyB7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGZpZ2NhcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNsZWFyO1xuICAgIH1cbiAgICAuZ2FsbGVyeSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNoYXJlIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cdFx0Ji0taXRlbXtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiA4cHggMDtcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYtLWxpbmt7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJGdyZXk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRibHVlO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGNvbG9yOiAkY2xlYXI7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIC5zaGFyZSB7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAmLS1saW5rIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRvcCAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAwO1xuICAgICYuZml4ZWQge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vY2hhcHRlci1jb250ZW50L2NoYXB0ZXItY29udGVudC5jb21wb25lbnQuc2Nzc1wiO1xuXG4uY2hhcHRlci1jb250ZW50IHtcbiAgICAudGFnIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgICBwYWRkaW5nOiA5cHggMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgJi0tc2VjdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIC50ZXh0LWJpZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIC5jb2wtbWQtNiB7XG4gICAgICAgICAgICAgICAgJiA+IHAge1xuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19pbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5ibG9ja3F1b3RlIHtcbiAgICAgICAgJl9fcXVvdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC03MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLW9yYW5nZS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYmxvY2txdW90ZV9fd2hpdGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjbGVhcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNsZWFyO1xuICAgICAgICAgICAgcmlnaHQ6IDQlO1xuICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS5zdmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNpdGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLXdoaXRlLnN2ZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19iaWcge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC1vcmFuZ2Uuc3ZnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpc3Qge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLW9yYW5nZS5zdmcnKTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzg7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgICAgICAmLmJsb2NrcXVvdGVfX2ltYWdlIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICYtLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICAgICZfX2ltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMTI0NjE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZml4LXNjcm9sbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDA7XG4gICAgJi5maXhlZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/06-horizonte/horizonte.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/06-horizonte/horizonte.component.ts ***!
  \***********************************************************/
/*! exports provided: HorizonteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizonteComponent", function() { return HorizonteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HorizonteComponent = class HorizonteComponent {
    constructor() {
        this.chapterHatInfo = {
            'image': 'assets/images/6-horizonte.jpg',
            'title': 'Capítulo 06',
            'subtitle': 'Horizonte'
        };
    }
    ngOnInit() {
    }
};
HorizonteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-horizonte',
        template: __webpack_require__(/*! raw-loader!./horizonte.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/06-horizonte/horizonte.component.html"),
        styles: [__webpack_require__(/*! ./horizonte.component.scss */ "./src/app/pages/06-horizonte/horizonte.component.scss")]
    })
], HorizonteComponent);



/***/ }),

/***/ "./src/app/pages/07-manifesto/manifesto.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/07-manifesto/manifesto.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap\");\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n:root {\n  --orange: #f2665e;\n  --blue-m: #012461;\n}\n.chapter-content {\n  padding: 70px 0;\n}\n.chapter-content p {\n  font-size: 18px;\n  color: #012461;\n  line-height: 1.78;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 89px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  margin: 40px 0;\n  z-index: 1;\n  width: 100%;\n}\n.chapter-content__img img {\n  width: 100%;\n  height: auto;\n}\n.chapter-content__img figcaption {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #012461;\n  margin-top: 10px;\n}\n.chapter-content__img figcaption img {\n  margin-right: 6px;\n  max-width: 16px;\n}\n.chapter-content .blockquote__simple {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 100%;\n  width: 41%;\n  max-width: 280px;\n  font-size: 24px;\n  line-height: 1.33;\n  color: #012461;\n  padding: 20px 0;\n  background-color: #ffffff;\n}\n.chapter-content .gallery {\n  padding-top: 60px;\n}\n.chapter-content .gallery__item {\n  text-align: center;\n}\n.chapter-content .gallery__item p {\n  font-size: 14px;\n  line-height: 1.71;\n  margin-top: 5px;\n}\n.chapter-content .share {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.chapter-content .share--item {\n  display: block;\n  margin: 8px 0;\n}\n.chapter-content .share--item:first-child {\n  margin-top: 0;\n}\n.chapter-content .share--link {\n  display: block;\n  width: 52px;\n  height: 52px;\n  border: 1px solid #b7c1d2;\n  border-radius: 50%;\n  color: #012461;\n  line-height: 52px;\n  font-size: 18px;\n  text-align: center;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.chapter-content .share--link:hover {\n  border-color: #028ed4;\n  background: #028ed4;\n  text-decoration: none;\n  color: #ffffff;\n}\n@media (max-width: 1300px) {\n  .chapter-content .share {\n    right: 15px;\n  }\n}\n@media (max-width: 992px) {\n  .chapter-content .blockquote__simple {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .share {\n    right: 10px;\n  }\n  .chapter-content .share--link {\n    width: 43px;\n    height: 43px;\n    font-size: 16px;\n    line-height: 43px;\n  }\n  .chapter-content .blockquote__simple {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 50%;\n    font-size: 22px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content .blockquote__simple {\n    width: 75%;\n  }\n  .chapter-content .share {\n    display: none;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n.chapter-content .tag {\n  font-size: 12px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #ffffff;\n  background-color: #028ed4;\n  padding: 9px 14px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  display: inline-block;\n  margin-bottom: 24px;\n}\n.chapter-content__title {\n  font-size: 56px;\n  line-height: 1.14;\n  font-weight: bold;\n  margin-bottom: 24px;\n  color: #012461;\n  font-family: \"Montserrat\", Arial, Verdana;\n}\n.chapter-content__title--section {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: \"Montserrat\", Arial, Verdana;\n  text-transform: uppercase;\n  color: #012461;\n  letter-spacing: -0.5px;\n  margin-bottom: 20px;\n  margin-top: 70px;\n}\n.chapter-content__subtitle {\n  font-size: 21px;\n  font-family: \"Montserrat\", Arial, Verdana;\n  color: #012461;\n  text-transform: uppercase;\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n.chapter-content .text-big {\n  font-size: 24px;\n  line-height: 1.33;\n}\n.chapter-content .row:first-child .col-md-6 > p:first-of-type:first-letter {\n  font-size: 88px;\n  color: #f2665e;\n  float: left;\n  line-height: 90px;\n  margin-right: 20px;\n}\n.chapter-content__img {\n  position: relative;\n}\n.chapter-content .blockquote__quote {\n  position: absolute;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  line-height: 1.33;\n  max-width: 280px;\n  font-size: 24px;\n  color: #012461;\n  width: 40%;\n  top: 50%;\n  margin-bottom: 0;\n  left: 100%;\n}\n.chapter-content .blockquote__quote:before {\n  content: \"\";\n  position: absolute;\n  top: -70px;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__quote cite {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.71;\n  color: #012461;\n  display: block;\n  margin-top: 15px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__quote cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 8px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .blockquote__quote.blockquote__white {\n  background-color: #ffffff;\n  padding: 90px 0 20px 0;\n}\n.chapter-content .blockquote__quote.blockquote__white:before {\n  top: 20px;\n}\n.chapter-content .blockquote__image {\n  color: #ffffff;\n  right: 4%;\n  left: initial;\n}\n.chapter-content .blockquote__image:before {\n  background-image: url('left-quote.svg');\n}\n.chapter-content .blockquote__image cite {\n  color: #ffffff;\n}\n.chapter-content .blockquote__image cite:before {\n  content: \"\";\n  background-image: url('triangle-small-white.svg');\n}\n.chapter-content .blockquote__big {\n  padding-top: 70px;\n  margin: 40px 0;\n  font-size: 24px;\n  color: #012461;\n  line-height: 1.33;\n  position: relative;\n}\n.chapter-content .blockquote__big:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  background-image: url('left-quote-blue.svg');\n  width: 56px;\n  height: 49px;\n  left: 0;\n}\n.chapter-content .blockquote__big cite {\n  font-size: 14px;\n  font-weight: bold;\n  display: block;\n  margin-top: 20px;\n  position: relative;\n  padding-left: 15px;\n  font-style: normal;\n}\n.chapter-content .blockquote__big cite:before {\n  content: \"\";\n  position: absolute;\n  background-image: url('triangle-small-orange.svg');\n  top: 5px;\n  left: 0;\n  width: 9px;\n  height: 8px;\n}\n.chapter-content .list {\n  padding-left: 27px;\n  margin: 0;\n  list-style-image: url('triangle-orange.svg');\n}\n.chapter-content .list li {\n  font-size: 18px;\n  line-height: 1.78;\n  color: #012461;\n  margin-bottom: 20px;\n}\n@media (max-width: 992px) {\n  .chapter-content__title {\n    font-size: 42px;\n  }\n}\n@media (max-width: 768px) {\n  .chapter-content .blockquote__quote {\n    position: relative;\n    top: inherit;\n    -webkit-transform: inherit;\n            transform: inherit;\n    left: auto;\n    width: 100%;\n    font-size: 22px;\n    max-width: inherit;\n    margin-top: 120px;\n  }\n  .chapter-content .blockquote__quote.blockquote__image:before {\n    left: 15px;\n    background-image: url('left-quote-blue.svg');\n  }\n}\n@media (max-width: 540px) {\n  .chapter-content {\n    padding: 30px 0;\n  }\n  .chapter-content__title {\n    font-size: 24px;\n  }\n  .chapter-content__title--section {\n    font-size: 16px;\n  }\n  .chapter-content__subtitle {\n    font-size: 16px;\n  }\n  .chapter-content p {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n  .chapter-content__img {\n    margin: 30px 0;\n  }\n  .chapter-content .blockquote__quote {\n    font-size: 21px;\n    color: #012461;\n    padding: 0 15px;\n  }\n  .chapter-content .list li {\n    font-size: 16px;\n  }\n}\n.fix-scroll {\n  position: relative;\n  top: 0;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, -webkit-transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease;\n  transition: top 200ms ease, transform 200ms ease, -webkit-transform 200ms ease;\n  max-width: 90%;\n  margin: 0 auto;\n  z-index: 0;\n}\n.fix-scroll.fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 20px;\n}\n@media (min-width: 1300px) {\n  .fix-scroll {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvcGFnZXMvMDctbWFuaWZlc3RvL21hbmlmZXN0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvMDctbWFuaWZlc3RvL21hbmlmZXN0by5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JldG8vRG9jdW1lbnRzL2Rldi9pc21hcnQtcmEyMDE5L3NyYy9hcHAvY29tcG9uZW50cy9jaGFwdGVyLWNvbnRlbnQvY2hhcHRlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYmV0by9Eb2N1bWVudHMvZGV2L2lzbWFydC1yYTIwMTkvc3JjL2FwcC9jb21wb25lbnRzL2NoYXB0ZXItY29udGVudC1hbGwvY2hhcHRlci1jb250ZW50LWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvRkFBQTtBQUNBLGtHQUFBO0FBREEsb0ZBQUE7QUFDQSxrR0FBQTtBQURBLG9GQUFBO0FBQ0Esa0dBQUE7QUFEQSxvRkFBQTtBQUNBLGtHQUFBO0FBZ0JSO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ1REO0FET0E7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FDSkQ7QUNkQTtFQUNJLGVBQUE7QURpQko7QUNoQkk7RUFDSSxlQUFBO0VBQ0EsY0ZPTztFRU5QLGlCQUFBO0FEa0JSO0FDWm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGN4QjtBQ1JJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FEVVI7QUNUUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEV1o7QUNUUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNGdEJHO0VFdUJILGdCQUFBO0FEV1o7QUNWWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRFloQjtBQ1JJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnZDTztFRXdDUCxlQUFBO0VBQ0EseUJGOUNLO0FDd0RiO0FDUkk7RUFDSSxpQkFBQTtBRFVSO0FDVFE7RUFDSSxrQkFBQTtBRFdaO0FDVlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEWWhCO0FDUkk7RUFDSSxnQkFBQTtFQUNOLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDTSxRQUFBO0VBQ0EsTUFBQTtBRFVSO0FDVEU7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBRFdIO0FDVkc7RUFDQyxhQUFBO0FEWUo7QUNURTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ1MsWUFBQTtFQUNULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRjFFWTtFRTJFSCxpQkFBQTtFQUNBLGVBQUE7RUFDVCxrQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7QURXSDtBQ1ZHO0VBQ0MscUJGakZNO0VFa0ZOLG1CRmxGTTtFRW1GTixxQkFBQTtFQUNBLGNGeEZTO0FDb0diO0FDUkk7RUFDSTtJQUNJLFdBQUE7RURVVjtBQUNGO0FDUkk7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFRFVWO0FBQ0Y7QUNSSTtFQUNJO0lBQ0ksV0FBQTtFRFVWO0VDVFU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRFdkO0VDUk07SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtZQUFBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RURVVjtBQUNGO0FDUkk7RUFDSTtJQUNJLFVBQUE7RURVVjtFQ1JNO0lBQ0ksYUFBQTtFRFVWO0FBQ0Y7QUNOQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnRUFBQTtFQUFBLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSw4RUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBRFNKO0FDUkk7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEVVI7QUNQSTtFQWZKO0lBZ0JRLGNBQUE7RURVTjtBQUNGO0FEdEpBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ3lKRDtBRDNKQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7QUM4SkQ7QUNoTEE7RUFDSSxlQUFBO0FEbUxKO0FDbExJO0VBQ0ksZUFBQTtFQUNBLGNGT087RUVOUCxpQkFBQTtBRG9MUjtBQzlLb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEZ0x4QjtBQzFLSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRDRLUjtBQzNLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FENktaO0FDM0tRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0Z0Qkc7RUV1QkgsZ0JBQUE7QUQ2S1o7QUM1S1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUQ4S2hCO0FDMUtJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnZDTztFRXdDUCxlQUFBO0VBQ0EseUJGOUNLO0FDME5iO0FDMUtJO0VBQ0ksaUJBQUE7QUQ0S1I7QUMzS1E7RUFDSSxrQkFBQTtBRDZLWjtBQzVLWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQ4S2hCO0FDMUtJO0VBQ0ksZ0JBQUE7RUFDTixVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ00sUUFBQTtFQUNBLE1BQUE7QUQ0S1I7QUMzS0U7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBRDZLSDtBQzVLRztFQUNDLGFBQUE7QUQ4S0o7QUMzS0U7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNTLFlBQUE7RUFDVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0YxRVk7RUUyRUgsaUJBQUE7RUFDQSxlQUFBO0VBQ1Qsa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FENktIO0FDNUtHO0VBQ0MscUJGakZNO0VFa0ZOLG1CRmxGTTtFRW1GTixxQkFBQTtFQUNBLGNGeEZTO0FDc1FiO0FDMUtJO0VBQ0k7SUFDSSxXQUFBO0VENEtWO0FBQ0Y7QUMxS0k7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFRDRLVjtBQUNGO0FDMUtJO0VBQ0k7SUFDSSxXQUFBO0VENEtWO0VDM0tVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUQ2S2Q7RUMxS007SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtZQUFBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUQ0S1Y7QUFDRjtBQzFLSTtFQUNJO0lBQ0ksVUFBQTtFRDRLVjtFQzFLTTtJQUNJLGFBQUE7RUQ0S1Y7QUFDRjtBQ3hLQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnRUFBQTtFQUFBLHdEQUFBO0VBQUEsZ0RBQUE7RUFBQSw4RUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBRDJLSjtBQzFLSTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUQ0S1I7QUN6S0k7RUFmSjtJQWdCUSxjQUFBO0VENEtOO0FBQ0Y7QUV0VUk7RUFDSSxlQUFBO0VBQ0EseUNIRE87RUdFUCxjSENLO0VHQUwseUJISUU7RUdIRixpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FGeVVSO0FFdlVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNIUE87RUdRUCx5Q0hoQk87QUN5VmY7QUV4VVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0hwQkc7RUdxQkgseUJBQUE7RUFDQSxjSGRHO0VHZUgsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FGMFVaO0FFdlVJO0VBQ0ksZUFBQTtFQUNBLHlDSDlCTztFRytCUCxjSHZCTztFR3dCUCx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUZ5VVI7QUV2VUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUZ5VVI7QUVuVW9CO0VBQ0ksZUFBQTtFQUNBLGNIcENkO0VHcUNjLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGcVV4QjtBRS9USTtFQUNJLGtCQUFBO0FGaVVSO0FFOVRRO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjSHpERztFRzBESCxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRmdVWjtBRS9UWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBRmlVaEI7QUUvVFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNIM0VEO0VHNEVDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRmlVaEI7QUVoVWdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FGa1VwQjtBRS9UWTtFQUNJLHlCSGpHSDtFR2tHRyxzQkFBQTtBRmlVaEI7QUVoVWdCO0VBQ0ksU0FBQTtBRmtVcEI7QUU5VFE7RUFDSSxjSHpHQztFRzBHRCxTQUFBO0VBQ0EsYUFBQTtBRmdVWjtBRS9UWTtFQUNJLHVDQUFBO0FGaVVoQjtBRS9UWTtFQUNJLGNIaEhIO0FDaWJiO0FFaFVnQjtFQUNJLFdBQUE7RUFDQSxpREFBQTtBRmtVcEI7QUU5VFE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0h0SEc7RUd1SEgsaUJBQUE7RUFDQSxrQkFBQTtBRmdVWjtBRS9UWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBRmlVaEI7QUUvVFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUZpVWhCO0FFaFVnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRmtVcEI7QUU3VEk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBRitUUjtBRTlUUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNIN0pHO0VHOEpILG1CQUFBO0FGZ1VaO0FFN1RJO0VBQ0k7SUFDSSxlQUFBO0VGK1RWO0FBQ0Y7QUU3VEk7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO1lBQUEsa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VGK1RWO0VFN1RjO0lBQ0ksVUFBQTtJQUNBLDRDQUFBO0VGK1RsQjtBQUNGO0FFM1RJO0VBbE1KO0lBbU1RLGVBQUE7RUY4VE47RUU3VE07SUFDSSxlQUFBO0VGK1RWO0VFOVRVO0lBQ0ksZUFBQTtFRmdVZDtFRTdUTTtJQUNJLGVBQUE7RUYrVFY7RUU3VE07SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUYrVFY7RUU3VE07SUFDSSxjQUFBO0VGK1RWO0VFN1RNO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VGK1RWO0VFM1RVO0lBQ0ksZUFBQTtFRjZUZDtBQUNGO0FFeFRBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGdFQUFBO0VBQUEsd0RBQUE7RUFBQSxnREFBQTtFQUFBLDhFQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FGMlRKO0FFMVRJO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRjRUUjtBRXpUSTtFQWZKO0lBZ0JRLGNBQUE7RUY0VE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLzA3LW1hbmlmZXN0by9tYW5pZmVzdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiRsYXRvOiBcdFx0XHQnTGF0bycsIEFyaWFsLCBWZXJkYW5hO1xuJG1vbnRzZXJyYXRcdDogXHQnTW9udHNlcnJhdCcsIEFyaWFsLCBWZXJkYW5hO1xuXG4vLyBDb2xvcnNcbiRjbGVhcjogICAgIFx0I2ZmZmZmZjtcbiRkYXJrOiAgICAgIFx0IzAwMDAwMDtcbiRncmV5Olx0XHRcdCNiN2MxZDI7XG4kYmx1ZS1jbGVhcjpcdCNkNGVmZmM7XG4kYmx1ZTogXHRcdFx0IzAyOGVkNDtcbiRibHVlLW1lZGl1bTogXHQjMDEyNDYxO1xuJGJsdWUtZGFyazogXHQjMjAyNzM0O1xuJG9yYW5nZTpcdFx0I2YyNjY1ZTtcblxuXG46cm9vdCB7XG5cdC0tb3JhbmdlOiAjZjI2NjVlO1xuXHQtLWJsdWUtbTogIzAxMjQ2MTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tb3JhbmdlOiAjZjI2NjVlO1xuICAtLWJsdWUtbTogIzAxMjQ2MTtcbn1cblxuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uY2hhcHRlci1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBsaW5lLWhlaWdodDogMS43ODtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuY29sLW1kLTYgPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiA4OHB4O1xuICBjb2xvcjogI2YyNjY1ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcge1xuICBtYXJnaW46IDQwcHggMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX2ltZyBmaWdjYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWF4LXdpZHRoOiAxNnB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAxMDAlO1xuICB3aWR0aDogNDElO1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuZ2FsbGVyeV9faXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YzFkMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDI4ZWQ0O1xuICBiYWNrZ3JvdW5kOiAjMDI4ZWQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgICB3aWR0aDogNDNweDtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgbGVmdDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMDtcbn1cbi5maXgtc2Nyb2xsLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuZml4LXNjcm9sbCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn1cblxuOnJvb3Qge1xuICAtLW9yYW5nZTogI2YyNjY1ZTtcbiAgLS1ibHVlLW06ICMwMTI0NjE7XG59XG5cbjpyb290IHtcbiAgLS1vcmFuZ2U6ICNmMjY2NWU7XG4gIC0tYmx1ZS1tOiAjMDEyNDYxO1xufVxuXG4uY2hhcHRlci1jb250ZW50IHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGluZS1oZWlnaHQ6IDEuNzg7XG59XG4uY2hhcHRlci1jb250ZW50IC5yb3c6Zmlyc3QtY2hpbGQgLmNvbC1tZC02ID4gcDpmaXJzdC1vZi10eXBlOmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogODhweDtcbiAgY29sb3I6ICNmMjY2NWU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogODlweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcgZmlnY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNoYXB0ZXItY29udGVudF9faW1nIGZpZ2NhcHRpb24gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIG1heC13aWR0aDogMTZweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDQxJTtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgY29sb3I6ICMwMTI0NjE7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnkge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmdhbGxlcnlfX2l0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhcHRlci1jb250ZW50IC5nYWxsZXJ5X19pdGVtIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuc2hhcmUtLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlLS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2MxZDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4uY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluazpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAyOGVkNDtcbiAgYmFja2dyb3VuZDogIzAyOGVkNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuc2hhcmUge1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5zaGFyZS0tbGluayB7XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fc2ltcGxlIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnQgLnNoYXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG4uZml4LXNjcm9sbC5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZpeC1zY3JvbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59XG5cbi5jaGFwdGVyLWNvbnRlbnQgLnRhZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgVmVyZGFuYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjhlZDQ7XG4gIHBhZGRpbmc6IDlweCAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBsaW5lLWhlaWdodDogMS4xNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGNvbG9yOiAjMDEyNDYxO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xufVxuLmNoYXB0ZXItY29udGVudF9fdGl0bGUtLXNlY3Rpb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnRfX3N1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBWZXJkYW5hO1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnRleHQtYmlnIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuY29sLW1kLTYgPiBwOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiA4OHB4O1xuICBjb2xvcjogI2YyNjY1ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhcHRlci1jb250ZW50X19pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzAxMjQ2MTtcbiAgd2lkdGg6IDQwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxlZnQ6IDEwMCU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19xdW90ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTcwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNDlweDtcbiAgbGVmdDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlIGNpdGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUgY2l0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2Z1wiKTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9fd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA5MHB4IDAgMjBweCAwO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9fd2hpdGU6YmVmb3JlIHtcbiAgdG9wOiAyMHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2Uge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcmlnaHQ6IDQlO1xuICBsZWZ0OiBpbml0aWFsO1xufVxuLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9faW1hZ2U6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLnN2Z1wiKTtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2ltYWdlIGNpdGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2ltYWdlIGNpdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC13aGl0ZS5zdmdcIik7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWcge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNDlweDtcbiAgbGVmdDogMDtcbn1cbi5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX2JpZyBjaXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uY2hhcHRlci1jb250ZW50IC5ibG9ja3F1b3RlX19iaWcgY2l0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtc21hbGwtb3JhbmdlLnN2Z1wiKTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOHB4O1xufVxuLmNoYXB0ZXItY29udGVudCAubGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMjdweDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLW9yYW5nZS5zdmdcIik7XG59XG4uY2hhcHRlci1jb250ZW50IC5saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS43ODtcbiAgY29sb3I6ICMwMTI0NjE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXB0ZXItY29udGVudF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQgLmJsb2NrcXVvdGVfX3F1b3RlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiBpbmhlcml0O1xuICAgIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUuYmxvY2txdW90ZV9faW1hZ2U6YmVmb3JlIHtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS1ibHVlLnN2Z1wiKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC5jaGFwdGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnRfX3RpdGxlLS1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudF9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY2hhcHRlci1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG4gIC5jaGFwdGVyLWNvbnRlbnRfX2ltZyB7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBjb2xvcjogIzAxMjQ2MTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiAgLmNoYXB0ZXItY29udGVudCAubGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5maXgtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDA7XG59XG4uZml4LXNjcm9sbC5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZpeC1zY3JvbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jaGFwdGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43ODtcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgLmNvbC1tZC02IHtcbiAgICAgICAgICAgICAgICAmID4gcCB7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZTpmaXJzdC1sZXR0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICZfX2ltZyB7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGZpZ2NhcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNsZWFyO1xuICAgIH1cbiAgICAuZ2FsbGVyeSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNoYXJlIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cdFx0Ji0taXRlbXtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiA4cHggMDtcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYtLWxpbmt7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJGdyZXk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRibHVlO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGNvbG9yOiAkY2xlYXI7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIC5zaGFyZSB7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmJsb2NrcXVvdGVfX3NpbXBsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAmLS1saW5rIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgICAgIC5ibG9ja3F1b3RlX19zaW1wbGUge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuICAgICAgICAuc2hhcmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpeC1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRvcCAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAwO1xuICAgICYuZml4ZWQge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vY2hhcHRlci1jb250ZW50L2NoYXB0ZXItY29udGVudC5jb21wb25lbnQuc2Nzc1wiO1xuXG4uY2hhcHRlci1jb250ZW50IHtcbiAgICAudGFnIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgICBwYWRkaW5nOiA5cHggMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgJi0tc2VjdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXQ7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIC50ZXh0LWJpZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIC5jb2wtbWQtNiB7XG4gICAgICAgICAgICAgICAgJiA+IHAge1xuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGU6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19pbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5ibG9ja3F1b3RlIHtcbiAgICAgICAgJl9fcXVvdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC03MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlLW1lZGl1bTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLW9yYW5nZS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYmxvY2txdW90ZV9fd2hpdGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjbGVhcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNsZWFyO1xuICAgICAgICAgICAgcmlnaHQ6IDQlO1xuICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdC1xdW90ZS5zdmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNpdGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY2xlYXI7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLXNtYWxsLXdoaXRlLnN2ZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19iaWcge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1tZWRpdW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsZS1zbWFsbC1vcmFuZ2Uuc3ZnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpc3Qge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyaWFuZ2xlLW9yYW5nZS5zdmcnKTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzg7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWUtbWVkaXVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgICAgICAmLmJsb2NrcXVvdGVfX2ltYWdlIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sZWZ0LXF1b3RlLWJsdWUuc3ZnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICYtLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICAgICZfX2ltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuYmxvY2txdW90ZV9fcXVvdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMTI0NjE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZml4LXNjcm9sbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDA7XG4gICAgJi5maXhlZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/07-manifesto/manifesto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/07-manifesto/manifesto.component.ts ***!
  \***********************************************************/
/*! exports provided: ManifestoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestoComponent", function() { return ManifestoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManifestoComponent = class ManifestoComponent {
    constructor() {
        this.chapterHatInfo = {
            'image': 'assets/images/7-manifesto.jpg',
            'title': 'Capítulo 07',
            'subtitle': 'Manifesto Ismart'
        };
    }
    ngOnInit() {
    }
};
ManifestoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manifesto',
        template: __webpack_require__(/*! raw-loader!./manifesto.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/07-manifesto/manifesto.component.html"),
        styles: [__webpack_require__(/*! ./manifesto.component.scss */ "./src/app/pages/07-manifesto/manifesto.component.scss")]
    })
], ManifestoComponent);



/***/ }),

/***/ "./src/app/pages/09-lista-parceiros/lista-parceiros.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/09-lista-parceiros/lista-parceiros.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLzA5LWxpc3RhLXBhcmNlaXJvcy9saXN0YS1wYXJjZWlyb3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/09-lista-parceiros/lista-parceiros.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/09-lista-parceiros/lista-parceiros.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaParceirosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaParceirosComponent", function() { return ListaParceirosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListaParceirosComponent = class ListaParceirosComponent {
    constructor() {
        this.chapterHatInfo = {
            'image': 'assets/images/9-lista.jpg',
            'title': 'Capítulo 09',
            'subtitle': 'Lista de parceiros'
        };
        this.accordionContent = [
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
        ];
    }
    ngOnInit() {
    }
};
ListaParceirosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-parceiros',
        template: __webpack_require__(/*! raw-loader!./lista-parceiros.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/09-lista-parceiros/lista-parceiros.component.html"),
        styles: [__webpack_require__(/*! ./lista-parceiros.component.scss */ "./src/app/pages/09-lista-parceiros/lista-parceiros.component.scss")]
    })
], ListaParceirosComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/emitter/emitter.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/emitter/emitter.service.ts ***!
  \*****************************************************/
/*! exports provided: EmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterService", function() { return EmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmitterService = class EmitterService {
    constructor() { }
    static get(nomeEvento) {
        if (!this.emitters[nomeEvento])
            this.emitters[nomeEvento] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return this.emitters[nomeEvento];
    }
};
EmitterService.emitters = {};
EmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmitterService);



/***/ }),

/***/ "./src/app/services/testimonials/testimonials.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/testimonials/testimonials.service.ts ***!
  \***************************************************************/
/*! exports provided: TestimonialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsService", function() { return TestimonialsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TestimonialsService = class TestimonialsService {
    constructor() {
        this._testimonial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._testimonials = [
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
                testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
                photo: "assets/images/placeholder.jpg"
            },
            {
                id: 3,
                name: "Pedro Cardoso Navarro",
                excerpt: "Estudante de Engenharia Química na Universidade de Notre Dame, nos EUA",
                testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
                photo: "assets/images/pedro-navarro.jpg"
            },
            {
                id: 4,
                name: "Maria Eduarda Machado",
                excerpt: "Bolsista em Belo Horizonte – MG",
                testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
                photo: "assets/images/isabela-moraes.jpg"
            }
        ];
    }
    get current() {
        return this._testimonial;
    }
    set current(testimonial) {
        this._testimonial.next(testimonial);
    }
    get all() {
        return this._testimonials;
    }
    getAll() {
        return this.all;
    }
    navigatePrev() {
        const all = this.getAll();
        const currentIndex = all.findIndex(testimonial => testimonial.id === this._testimonial.getValue().id);
        const testimonial = currentIndex > 0 ? all[currentIndex - 1] : all[all.length - 1];
        this._testimonial.next(testimonial);
    }
    navigateNext() {
        const all = this.getAll();
        const currentIndex = all.findIndex(testimonial => testimonial.id === this._testimonial.getValue().id);
        const testimonial = currentIndex + 1 < all.length ? all[currentIndex + 1] : all[0];
        this._testimonial.next(testimonial);
    }
};
TestimonialsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TestimonialsService);



/***/ }),

/***/ "./src/app/services/timeline/timeline.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/timeline/timeline.service.ts ***!
  \*******************************************************/
/*! exports provided: TimelineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineService", function() { return TimelineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelineService = class TimelineService {
    constructor() {
        this.content = [
            {
                type: 'content',
                title: '1999',
                excerpt: '<p>Lançado, no Rio de Janeiro, o Espaço Talento, primeiro projeto do Ismart, voltado para alunos, a partir de 6 anos, selecionados na rede municipal de ensino.</p>',
                image: 'assets/images/1999.png',
                icon: 'assets/images/pencil.svg'
            },
            {
                type: 'content',
                title: '2004',
                excerpt: '<p>Criado o Projeto Alicerce, que oferece a alunos do 7º ano (antiga 6ª série) curso preparatório, no contraturno das aulas da rede pública, para prepará-los para o Ensino médio. Surge também, a partir de parceria com escolas de excelência, o Bolsa Talento, projeto que oferece bolsas de estudos a alunos talentosos que são indicados por professores.</p><p>Transferência da sede do Ismart para São Paulo.</p>',
                image: 'assets/images/2004.png',
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
                image: 'assets/images/2007.png',
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
                image: 'assets/images/2009.png',
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
                image: 'assets/images/2018.png',
                icon: 'assets/images/pin.svg'
            },
            {
                title: '2019',
                excerpt: '<p>Ismart completa 20 anos e a história está apenas começando...</p>',
                icon: 'assets/images/positive.svg'
            }
        ];
    }
};
TimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TimelineService);



/***/ }),

/***/ "./src/app/services/window.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/window.service.ts ***!
  \********************************************/
/*! exports provided: WINDOW, WindowRef, BrowserWindowRef, windowFactory, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowFactory", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Give access to the window global object
 * @see https://brianflove.com/2018/01/11/angular-window-provider/
 */


/* Create a new injection token for injecting the window into a component. */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/* Define class that implements the abstract class and returns the native window object. */
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return window;
    }
}
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
};
/* Create an array of providers. */
const WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/beto/Documents/dev/ismart-ra2019/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map