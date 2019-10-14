import { Injectable } from '@angular/core';
import { Observable, observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() {}

  private _testimonial: BehaviorSubject<any> = new BehaviorSubject({});

  public get current(): Observable<any>{
    return this._testimonial;
  }

  public set current(testimonial){
    this._testimonial.next(testimonial);
  }

  private get all() {
    return this._testimonials;
  }

  private _testimonials = [
    {
      id: 1,
      name: "Isabela Regina Julio de Moraes",
      excerpt: "18 anos, estudante do Colégio Objetivo, em São José dos Campos - SP",
      testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
      photo: "assets/images/isabela-moraes.jpg"
    },
    {
      id: 2,
      name: "Maria Eduarda Machado",
      excerpt: "Bolsista em Belo Horizonte – MG",
      testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
      photo: "assets/images/placeholder.jpg"
    },
    {
      id: 3,
      name: "Pedro Cardoso Navarro",
      excerpt: "Estudante de Engenharia Química na Universidade de Notre Dame, nos EUA",
      testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
      photo: "assets/images/pedro-navarro.jpg"
    },
    {
      id: 4,
      name: "Maria Eduarda Machado",
      excerpt: "Bolsista em Belo Horizonte – MG",
      testimonial: "Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo.",
      photo: "assets/images/isabela-moraes.jpg"
    }
  ]

  public getAll(){
    return this.all;
  }

  public navigatePrev(){
    const all = this.getAll();
    const currentIndex = all.findIndex( testimonial => testimonial.id === this._testimonial.getValue().id );
    const testimonial = currentIndex > 0 ? all[ currentIndex - 1 ] : all[ all.length - 1 ];
    this._testimonial.next(testimonial);
  }

  public navigateNext(){
    const all = this.getAll();
    const currentIndex = all.findIndex( testimonial => testimonial.id === this._testimonial.getValue().id );
    const testimonial = currentIndex + 1 < all.length ? all[ currentIndex + 1 ] : all[0];
    this._testimonial.next(testimonial);
  }
}
