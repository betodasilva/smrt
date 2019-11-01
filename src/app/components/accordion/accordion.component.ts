import { Component, OnInit, Input } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
// import { FloatContainerComponent } from '../float-container/float-container.component';

interface accordionData {
  title;
  content;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input('accordiondata') accordiondata: accordionData;

  constructor() { }

  ngOnInit() {
  }

  onAccordionClick() {
    setTimeout( () => {
      EmitterService.get('calculateSizes').emit();

    }, 600);
  }

}
