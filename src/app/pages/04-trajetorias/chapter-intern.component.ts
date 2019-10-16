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
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'Capítulo 04',
    'subtitle': 'Trajetórias Ismart'
  }
  

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
