import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-lista-parceiros",
  templateUrl: "./lista-parceiros.component.html",
  styleUrls: ["./lista-parceiros.component.scss"]
})
export class ListaParceirosComponent implements OnInit {
  
  @ViewChild("share", {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild("article", {static: true}) article: ElementRef;
  @ViewChild("modal", {static: false}) modal: ModalComponent;

  private title: string = "09. Lista de parceiros - Ismart";

  private chapterHatInfo = {
    "imageMobile": "assets/images/hats/9-lista-de-parceiros-hat.jpg",
    "imageTablet": "assets/images/hats/9-lista-de-parceiros-tablet.jpg",
    "image": "assets/images/9-lista.jpg",
    "title": "Capítulo 09",
    "subtitle": "Lista de parceiros"
  }

  private accordionContent: Array<any> = [];
  private relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: "og:image", content: "assets/images/hats/9-lista-de-parceiros-hat.jpg" } );
    this.meta.addTag({property: "og:title", content: "09. Lista de parceiros - Ismart"});

    this.translate.get('CHAPTER_9').subscribe( (data: any) => {
      this.accordionContent = data['LIST'];
      this.relatedInfo      = data['RELATED'];
    });
  }

}
