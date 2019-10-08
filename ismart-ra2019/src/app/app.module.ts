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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
