import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ChapterInternSimpleComponent } from './pages/chapter-intern-simple/chapter-intern-simple.component';
import { ChapterHatComponent } from './components/chapter-hat/chapter-hat.component';
import { ChapterContentComponent } from './components/chapter-content/chapter-content.component';
import { RelatedComponent } from './components/related/related.component';
import { ChapterInternComponent } from './pages/chapter-intern/chapter-intern.component';
import { ChapterContentAllComponent } from './components/chapter-content-all/chapter-content-all.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';



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
    ChapterInternSimpleComponent,
    ChapterHatComponent,
    ChapterContentComponent,
    RelatedComponent,
    ChapterInternComponent,
    ChapterContentAllComponent,
    SidebarComponent,
    AccordionComponent,
    TestimonialsComponent,
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
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
