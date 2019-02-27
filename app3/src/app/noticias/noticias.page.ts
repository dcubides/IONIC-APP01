import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor() { }

  noticias: any[] =[
    {
      "titulo" : "Deportes",
      "urlImg" : "./assets/img/deportes.jpg",
      "noticia" : "EL que quiera a Juanfer quintero debera pagar 30 millones de dolares"
    },
    {
      "titulo" : "Ciencia",
      "urlImg" : "./assets/img/ciencia.jpg",
      "noticia" : "EL que quiera a Juanfer quintero debera pagar 30 millones de dolares"
    },
    {
      "titulo" : "Politica",
      "urlImg" : "./assets/img/politica.jpg",
      "noticia" : "Venezuela en crisis ORIANA DE BARQUISIMENTO saca la cara por su pais"
    },
  ]
 
  ngOnInit() {
  }

}
