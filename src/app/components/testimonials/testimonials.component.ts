import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  @Input() modeDark: boolean = false;
  @Output('onTestimonialCardClick') onTestimonialCardClick: EventEmitter<any> = new EventEmitter();
  private slides = [];
  private slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": true,
    "arrows": true,
    "centerMode": false,
    "prevArrow": "<button type='button' class='btn slick-prev'><img src='assets/images/arrow.svg'></button>",
    "nextArrow": "<button type='button' class='btn slick-next'><img src='assets/images/arrow.svg'></button>",
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private testimonials: TestimonialsService) {
    this.slides = testimonials.getAll();
  }

  ngOnInit() {}
  onTestimonialClick(testimonial) {
    this.testimonials.current = testimonial;
    this.onTestimonialCardClick.emit(testimonial);
  }
  
}
