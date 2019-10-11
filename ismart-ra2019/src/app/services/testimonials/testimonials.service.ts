import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() {}

  private _testimonials = [
    {
      name: "Isabela Regina Julio de Moraes",
      excerpt: "18 anos, estudante do Colégio Objetivo, em São José dos Campos - SP",
      testimonial: "",
      photo: ""
    }
  ]
}
