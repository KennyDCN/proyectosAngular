import { Injectable } from '@angular/core';
import { Personaje } from '../lista-personajes/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaPersonajesService {

  constructor() { }


  newNombre: string = "";
  newPoder: number | null = null;
  disabledButton: boolean = false;

  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 9500 },
    { nombre: 'Vegeta', poder: 7500 },
    { nombre: 'Krillin', poder: 1000 },
  ];

  onNewPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }

  onDeletePersonaje(index: number): void {
    this.personajes.splice(index, 1);
  }

  // clickButton(){
  //   this.disabledButton = true;
  // }

  actualizarListaFiltrada(personajesFiltrados: Personaje[]): void {
    console.log("AAAA", this.personajes)
    this.personajes = personajesFiltrados;
    console.log("BBBB", this.personajes)
}

}
