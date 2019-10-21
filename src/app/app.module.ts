import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ChapterInternSimpleComponentm } from './pages/01-mensagem/chapter-intern-simple.component';
import { MissaoComponent } from './pages/02-missao/missao.component';
import { ChapterInternComponent } from './pages/04-trajetorias/chapter-intern.component';
import { TimelineComponent } from "./pages/03-timeline/timeline.component";
import { ParceirosComponent } from './pages/05-parceiros/parceiros.component';
import { HorizonteComponent } from './pages/06-horizonte/horizonte.component';
import { ManifestoComponent } from './pages/07-manifesto/manifesto.component';
import { ListaParceirosComponent } from './pages/09-lista-parceiros/lista-parceiros.component';
import { ExpedienteComponent } from './pages/10-expediente/expediente.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ChapterHatComponent } from './components/chapter-hat/chapter-hat.component';
import { ChapterContentComponent } from './components/chapter-content/chapter-content.component';
import { RelatedComponent } from './components/related/related.component';
import { ChapterContentAllComponent } from './components/chapter-content-all/chapter-content-all.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalComponent } from './components/modal/modal.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WINDOW_PROVIDERS } from './services/window.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmitterService } from './services/emitter/emitter.service';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';
import { TimelineImageComponent } from './components/timeline-image/timeline-image.component';
import { FloatContainerComponent } from './components/float-container/float-container.component';
import { ShareComponent } from './components/share/share/share.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    HeaderComponent,
    OverviewComponent,
    ChaptersComponent,
    ChapterInternSimpleComponentm,
    ChapterHatComponent,
    ChapterContentComponent,
    RelatedComponent,
    ChapterInternComponent,
    ChapterContentAllComponent,
    SidebarComponent,
    AccordionComponent,
    TestimonialsComponent,
    MenuComponent,
    ModalComponent,
    MissaoComponent,
    TimelineComponent,
    TimelineCardComponent,
    TimelineImageComponent,
    ParceirosComponent,
    HorizonteComponent,
    ManifestoComponent,
    ListaParceirosComponent,
    ExpedienteComponent,
    FloatContainerComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    ModalModule.forRoot()
  ],
  providers: [WINDOW_PROVIDERS, EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
