import { Component, OnInit, Input } from '@angular/core';

interface accordionData {
  title,
  content
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
  
}
