import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';

@Component({
  selector: 'app-trajetorias-pratica',
  templateUrl: './trajetorias-pratica.component.html',
  styleUrls: ['./trajetorias-pratica.component.scss']
})
export class TrajetoriasPraticaComponent implements OnInit {

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/4-trajetorias-hat.jpg',
    'imageTablet': 'assets/images/hats/4-trajetorias-tablet.jpg',
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'Capítulo 04',
    'subtitle': 'Trajetórias Ismart'
  }

  private relatedInfo = [
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Seleção',
      'url': '04-trajetorias-ismart-selecao'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Contato',
      'url': '04-trajetorias-ismart-contato'
    },
    {
      'image': 'assets/images/9-lista-de-parceiros-mobile.jpg',
      'title': '09.',
      'subtitle': 'Lista de parceiros',
      'url': '09-lista-parceiros'
    },
  ]
  
  constructor(private testimonials: TestimonialsService) { }

  ngOnInit() {
  }

}
