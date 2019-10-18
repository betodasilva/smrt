import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChapterInternSimpleComponentm } from './pages/01-mensagem/chapter-intern-simple.component';
import { ChapterInternComponent } from './pages/04-trajetorias/chapter-intern.component';
import { MissaoComponent } from './pages/02-missao/missao.component';
import { TimelineComponent } from './pages/03-timeline/timeline.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '01-mensagem-do-conselho', component: ChapterInternSimpleComponentm },
  { path: '02-missao-visao-valores', component: MissaoComponent },
  { path: '03-linha-do-tempo', component: TimelineComponent },
  { path: '04-trajetorias-ismart', component: ChapterInternComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
