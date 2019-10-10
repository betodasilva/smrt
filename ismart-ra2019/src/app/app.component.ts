import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private translate: TranslateService){
		translate.addLangs(['pt-BR', 'en', 'es'])
		translate.setDefaultLang('pt-BR');
		
		translate.use('pt-BR');
	}
}
