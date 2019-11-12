import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { ContentOffsetService } from 'src/app/services/content-offset/content-offset.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  @Input() data: any;
  @Input() modeDark = false;
  @Output('onTestimonialCardClick') onTestimonialCardClick: EventEmitter<any> = new EventEmitter();
  @Input() customTitle: string;

  public contentOffsetX = 0;
  public get slides() {
    return this.data;
  }
  public slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    centerMode: false,
    prevArrow: '<button type=\'button\' class=\'btn slick-prev\'><img src=\'assets/images/arrow.svg\'></button>',
    nextArrow: '<button type=\'button\' class=\'btn slick-next\'><img src=\'assets/images/arrow.svg\'></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private testimonials: TestimonialsService, private contentOffset: ContentOffsetService) {}

  ngOnInit() {
    this.listenContentOffset();
  }

  private listenContentOffset() {
    this.contentOffset.offsetObs().subscribe(value => this.contentOffsetX = value);
  }

  onTestimonialClick(testimonial) {
    this.testimonials.current = testimonial;
    this.onTestimonialCardClick.emit(testimonial);
  }

}
