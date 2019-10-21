import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { TestimonialsService } from "../../services/testimonials/testimonials.service";
import { ModalComponent } from "../../components/modal/modal.component";
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chapter-intern',
  templateUrl: './chapter-intern.component.html',
  styleUrls: ['./chapter-intern.component.scss']
})
export class ChapterInternComponent implements OnInit {

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
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Contato',
      'url': '04-trajetorias-ismart-contato'
    },
    {
      'image': 'assets/images/7-manifesto-ismart-mobile.jpg',
      'title': '07.',
      'subtitle': 'Resultados 2018',
      'url': ''
    }
  ]

  @ViewChild('testimonialComponent', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('modal', {static:false}) modal: ModalComponent;
  
  constructor(private testimonials: TestimonialsService) { }

  ngOnInit() {
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
