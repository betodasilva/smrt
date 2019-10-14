import { Component, OnInit, ViewChild } from '@angular/core';
import { TestimonialsService } from "../../services/testimonials/testimonials.service";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-chapter-intern',
  templateUrl: './chapter-intern.component.html',
  styleUrls: ['./chapter-intern.component.scss']
})
export class ChapterInternComponent implements OnInit {

  @ViewChild('modal', {static:false}) modal: ModalComponent;
  
  constructor(private testimonials: TestimonialsService) { }

  ngOnInit() {
  }

  onPrevTestimonial(){
    this.testimonials.navigatePrev()
  }

  onNextTestimonial(){
    this.testimonials.navigateNext()
  }

}
