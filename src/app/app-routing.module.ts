import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChapterInternSimpleComponentm } from './pages/01-mensagem/chapter-intern-simple.component';
import { ChapterInternComponent } from './pages/04-trajetorias/chapter-intern.component';
import { MissaoComponent } from './pages/02-missao/missao.component';
import { TimelineComponent } from './pages/03-timeline/timeline.component';
import { ParceirosComponent } from './pages/05-parceiros/parceiros.component';
import { HorizonteComponent } from './pages/06-horizonte/horizonte.component';
import { ManifestoComponent } from './pages/07-manifesto/manifesto.component';
import { ResultadosComponent } from './pages/08-resultados/resultados.component';
import { ListaParceirosComponent } from './pages/09-lista-parceiros/lista-parceiros.component';
import { ExpedienteComponent } from './pages/10-expediente/expediente.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '01-mensagem-do-conselho', component: ChapterInternSimpleComponentm },
  { path: '02-missao-visao-valores', component: MissaoComponent },
  { path: '03-linha-do-tempo', component: TimelineComponent },
  { path: '04-trajetorias-ismart-contato', component: ChapterInternComponent },
  { path: '05-parceiros-ismart', component: ParceirosComponent },
  { path: '06-horizonte', component: HorizonteComponent },
  { path: '07-manifesto', component: ManifestoComponent },
  { path: '09-lista-parceiros', component: ListaParceirosComponent},
  { path: '10-expediente', component: ExpedienteComponent},
  { path: '08-resultados', component: ResultadosComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
