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
      testimonial: '"Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo."',
      photo: "assets/images/isabela-moraes.jpg"
    },
    {
      name: "Maria Eduarda Machado",
      excerpt: "Bolsista em Belo Horizonte – MG",
      testimonial: '"Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo."',
      photo: "assets/images/placeholder.jpg"
    },
    {
      name: "Pedro Cardoso Navarro",
      excerpt: "Estudante de Engenharia Química na Universidade de Notre Dame, nos EUA",
      testimonial: '"Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo."',
      photo: "assets/images/pedro-navarro.jpg"
    },
    {
      name: "Maria Eduarda Machado",
      excerpt: "Bolsista em Belo Horizonte – MG",
      testimonial: '"Conheci o projeto através de um amigo chamado Vinicius, que estudava na minha escola de origem e em uma das instituições parceiras do Ismart. Foi ele que meu incentivou e ajudou com todas as etapas do processo seletivo."',
      photo: "assets/images/isabela-moraes.jpg"
    }
  ]
}
