import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { TranslateService } from '@ngx-translate/core';
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
  private activeLang: string;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.onLangChange.subscribe( change => {
      this.activeLang = change.lang.split('-')[0];
    })
  }

  fecharMenu(){
    this.onCloseMenu.emit(true);
  }
}
