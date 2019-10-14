import { Component, OnInit, Input, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('testimonial') testimonial: Observable<any>;
  @ViewChild('template', {static: false}) template: TemplateRef<any>;

  @Output('onNext') onNext: EventEmitter<any> = new EventEmitter();
  @Output('onPrev') onPrev: EventEmitter<any> = new EventEmitter();

  private modalRef: BsModalRef;
  private content: {
    name,
    excerpt,
    testimonial,
    photo
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.testimonial.subscribe( value => {
      this.content = value;
    })
  }

  onModalPrevClick() {
    this.onPrev.emit(true);
  }

  onModalNextClick() {
    this.onNext.emit(true);
  }
  public openModal(template: TemplateRef<any> = this.template) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered'}));
  }

}
