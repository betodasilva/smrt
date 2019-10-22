import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { TestimonialsService } from "../../services/testimonials/testimonials.service";
import { ModalComponent } from "../../components/modal/modal.component";
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter-intern',
  templateUrl: './chapter-intern.component.html',
  styleUrls: ['./chapter-intern.component.scss']
})
export class ChapterInternComponent implements OnInit {

  title = '04. Trajetórias Ismart: Seleção - Ismart';

  public testimonialPosition: BehaviorSubject<any> = new BehaviorSubject({});
  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/4-trajetorias-hat.jpg',
    'imageTablet': 'assets/images/hats/4-trajetorias-tablet.jpg',
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'Capítulo 04',
    'subtitle': 'Trajetórias Ismart'
  }
  
  private relatedInfo = [
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Seleção',
      'url': '04-trajetorias-ismart-selecao'
    },
    {
      'image': 'assets/images/7-manifesto-ismart-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Práticas',
      'url': '04-trajetorias-ismart-praticas'
    },
    {
      'image': 'assets/images/9-lista-de-parceiros-mobile.jpg',
      'title': '09.',
      'subtitle': 'Lista de parceiros',
      'url': '09-lista-parceiros'
    },
  ]

  @ViewChild('testimonialComponent', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('modal', {static:false}) modal: ModalComponent;
  
  constructor(
    private titleService: Title,
    private meta: Meta,
    private testimonials: TestimonialsService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
  }

  ngAfterViewInit(){
    this.sendTestimonialPosition();
  }

  sendTestimonialPosition(){
    setTimeout( () => {
      const { offsetTop, offsetHeight } = this.testimonialComponent.nativeElement;
      this.testimonialPosition.next({
        offsetTop,
        offsetHeight
      });
    }, 2000);
  }

  onPrevTestimonial(){
    this.testimonials.navigatePrev()
  }

  onNextTestimonial(){
    this.testimonials.navigateNext()
  }

}
