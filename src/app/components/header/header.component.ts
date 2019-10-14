import { Component, OnInit, HostListener, ViewChild, ElementRef, Inject, } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit {

  @ViewChild('header', { static: false }) header: ElementRef;

  private headerSrollBefore: number = 0;
  private headerStyle: { top } = { top: '0px' };

  public hasMenuOpened: boolean = false;
  private hasChaptersOpened: boolean = false;
  private _availableLanguage: string = '';

  private get availableLanguage(){
    return this._availableLanguage;
  }
  private set availableLanguage(lang){
    this._availableLanguage = lang;
  }

  constructor(
    private translate: TranslateService,
    private _eref: ElementRef,
    @Inject(DOCUMENT) private document: any,
    @Inject(WINDOW) private window: Window
  ) {
    // this.availableLanguage = this.setAvailableLanguage(translate.currentLang, translate.getLangs());
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe( change => {
      console.log( change );
      this.availableLanguage = this.setAvailableLanguage( change.lang, this.translate.getLangs() );
    })
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
    this.hasChaptersOpened = !this.hasChaptersOpened;
  }

  toggleMenu() {
    this.hasMenuOpened = !this.hasMenuOpened;
  }

  /**
   * Autohide sticky header
   * adapted from article below
   * @author https://osvaldas.info/auto-hide-sticky-header
   */
  @HostListener('window:scroll', [])
  onWindowScroll(){
    const element      = this.header.nativeElement;
    let elHeight       = element.offsetHeight,
        dHeight        = this.document.body.offsetHeight,
        wHeight        = this.window.innerHeight,
        wScrollCurrent = this.window.pageYOffset,
        wScrollDiff    = this.headerSrollBefore - wScrollCurrent,
        elTop          = parseInt(this.headerStyle.top) + wScrollDiff;

    if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
        this.headerStyle.top = '0px';
 
    else if( wScrollDiff > 0 ) // scrolled up; element slides in
        this.headerStyle.top = ( elTop > 0 ? 0 : elTop ) + 'px';
 
    else if( wScrollDiff < 0 ) // scrolled down
    {
        if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
            this.headerStyle.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
 
        else // scrolled down; element slides out
            this.headerStyle.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
    }

    this.headerSrollBefore = wScrollCurrent;
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      if (this.hasMenuOpened == true) {
        this.toggleMenu();
      }
    }
  }
}