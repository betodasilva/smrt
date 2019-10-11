import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class MenuComponent implements OnInit {
  @Output() onCloseMenu : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fecharMenu(){
    this.onCloseMenu.emit(true);
  }
}
