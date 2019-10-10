import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public show : boolean = false;

  private _availableLanguage: string;

  private get availableLanguage(){
    return this._availableLanguage;
  }
  private set availableLanguage(lang){
    this._availableLanguage = lang;
  }

  constructor(private translate: TranslateService) {
    this.availableLanguage = this.setAvailableLanguage(translate.currentLang, translate.getLangs());
  }

  ngOnInit() {
    
  }

  /**
   * Make inactives languages available to choose from
   * @param { currentLang }:string 
   * @param { allLanguages }:string
   * @return { availableLanguages }: string | array
   * */
  setAvailableLanguage(currentLang, allLanguages): string {
    const [
      availableLanguage
    ] = this.translate.getLangs().filter( lang => lang !== this.translate.currentLang );
    return availableLanguage;
  }

  onAvailableLanguageClick(){
    this.translate.use( this.availableLanguage );
    this.availableLanguage = this.setAvailableLanguage( this.translate.currentLang, this.translate.getLangs() );
  }
  
  toggle($event) {
    this.show = !this.show;
    $('header').toggleClass('chapters-opened');
  }
}