import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChapterInternSimpleComponentm } from './pages/01-mensagem/chapter-intern-simple.component';
import { ChapterInternComponent } from './pages/04-trajetorias/chapter-intern.component';
import { TrajetoriasPraticaComponent } from './pages/04-trajetorias-pratica/trajetorias-pratica.component';
import { TrajetoriasSelecaoComponent } from './pages/04-trajetorias-selecao/trajetorias-selecao.component';
import { TrajetoriasSuporteComponent } from './pages/04-trajetorias-suporte/trajetorias-suporte.component';
import { TrajetoriasInternacionalComponent } from './pages/04-trajetorias-internacional/trajetorias-internacional.component';
import { TrajetoriasEadComponent } from './pages/04-trajetorias-ead/trajetorias-ead.component';
import { TrajetoriasUniversidadeComponent } from './pages/04-trajetorias-universidade/trajetorias-universidade.component';
import { TrajetoriasAlumniComponent } from './pages/04-trajetorias-alumni/trajetorias-alumni.component';
import { MissaoComponent } from './pages/02-missao/missao.component';
import { TimelineComponent } from './pages/03-timeline/timeline.component';
import { ParceirosComponent } from './pages/05-parceiros/parceiros.component';
import { HorizonteComponent } from './pages/06-horizonte/horizonte.component';
import { ManifestoComponent } from './pages/07-manifesto/manifesto.component';
import { ListaParceirosComponent } from './pages/09-lista-parceiros/lista-parceiros.component';
import { ExpedienteComponent } from './pages/10-expediente/expediente.component';
import { ResultadosComponent } from './pages/08-resultados/resultados.component';
import { PoliticaComponent } from './pages/politica/politica.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '01-mensagem-do-conselho', component: ChapterInternSimpleComponentm },
  { path: '02-missao-visao-valores', component: MissaoComponent },
  { path: '03-linha-do-tempo', component: TimelineComponent },
  { path: '04-trajetorias-ismart-contato', component: ChapterInternComponent },
  { path: '04-trajetorias-ismart-selecao', component: TrajetoriasSelecaoComponent },
  { path: '04-trajetorias-ismart-praticas', component: TrajetoriasPraticaComponent },
  { path: '04-trajetorias-ismart-suporte', component: TrajetoriasSuporteComponent },
  { path: '04-trajetorias-ismart-internacional', component: TrajetoriasInternacionalComponent },
  { path: '04-trajetorias-ismart-ead', component: TrajetoriasEadComponent },
  { path: '04-trajetorias-ismart-universidade', component: TrajetoriasUniversidadeComponent },
  { path: '04-trajetorias-ismart-alumni', component: TrajetoriasAlumniComponent },
  { path: '05-parceiros-ismart', component: ParceirosComponent },
  { path: '06-horizonte', component: HorizonteComponent },
  { path: '07-manifesto', component: ManifestoComponent },
  { path: '09-lista-parceiros', component: ListaParceirosComponent},
  { path: '10-expediente', component: ExpedienteComponent},
  { path: '08-resultados', component: ResultadosComponent },
  { path: 'politica-de-privacidade', component: PoliticaComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
