import { Component, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(
        private translate: TranslateService, 
        private router: Router,
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2
    ){
		translate.addLangs(['pt-BR', 'en'])
		translate.setDefaultLang('pt-BR');
		
		translate.use('pt-BR');
	}

	ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        
    }

    onRouterOutletActivate($event){
        const chapterFigureEl = this.document.querySelectorAll('.chapter-content__img');
        
        chapterFigureEl.forEach( (el) => {
            const imgContainer = el.querySelector('.img__container'),
                  imgSrc       = el.querySelector('img').getAttribute('src'),
                  img          = new Image();
            
            
            img.src = imgSrc;
            
            
            const interval = setInterval( () => {
                if ( img.naturalWidth ) {
                    // console.log( img.offsetWidth );
                    clearInterval( interval );
                    this.renderer.setStyle(
                        imgContainer,
                        'padding-bottom',
                        `${(img.naturalHeight / img.naturalWidth) * 100}%`
                    )
                    // this.renderer.setStyle(
                    //     el,
                    //     'height',
                    //     `${img.naturalHeight}px`
                    // )
                }
            }, 10)
            
        })
    }
}
