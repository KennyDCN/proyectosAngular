import { Component } from '@angular/core';
import { Personaje } from '../lista-personajes/personaje.interface';
import { ListaPersonajesService } from '../services/lista-personajes.service';

@Component({
  selector: 'app-pagina-personajes',
  templateUrl: './pagina-personajes.component.html',
  styleUrl: './pagina-personajes.component.css'
})
export class PaginaPersonajesComponent {

  constructor(public listaPersonajes: ListaPersonajesService) { }


}
