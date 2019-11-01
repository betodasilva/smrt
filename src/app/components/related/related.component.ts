import { Component, OnInit, Input } from '@angular/core';

interface relatedData {
  title;
  subtile;
  url;
  image;
}

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {
  @Input('relatedData') relatedData: relatedData;
  public isLastSlide = false;
  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    centerMode: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

  beforeChange($event) {
    const {
      currentSlide,
      nextSlide,
      slick
    } = $event;
    this.isLastSlide = (currentSlide + nextSlide) === slick.slideCount;
  }

}
