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
      testimonial: "",
      photo: "http://placehold.it/350x150/000000"
    },
    {
      id: 2,
      name: "XUNDA MARAVILHA",
      excerpt: "18 anos, estudante do Colégio Objetivo, em São José dos Campos - SP",
      testimonial: "",
      photo: "http://placehold.it/350x150/000000"
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
