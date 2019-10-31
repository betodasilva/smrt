import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;
  
  private title: string = '10. Expediente - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/10-expediente-hat.jpg',
    'imageTablet': 'assets/images/hats/10-expediente-tablet.jpg',
    'image': 'assets/images/10-expediente.jpg',
    'title': 'CHAPTER_10.TITLE',
    'subtitle': 'CHAPTERS.10'
  }

  private accordionContent: Array<any> = []
  private relatedInfo: Array<any> = []

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/10-expediente-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '10. Expediente - Ismart'});

    this.translate.get('CHAPTER_10').subscribe( (data: any) => {
      this.accordionContent = data['LIST'];
      this.relatedInfo      = data['RELATED'];
    });
  }

}
