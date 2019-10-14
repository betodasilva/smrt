import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChapterInternSimpleComponent } from './pages/chapter-intern-simple/chapter-intern-simple.component';
import { ChapterInternComponent } from './pages/chapter-intern/chapter-intern.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chapter-intern-simple', component: ChapterInternSimpleComponent },
  { path: '04-trajetorias-ismart', component: ChapterInternComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
