import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from './personaje.interface';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css'],
})
export class ListaPersonajesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() personajes: Personaje[] = [];
  @Input() listPerson: Personaje[] = [];
  @Output() deletePersonaje = new EventEmitter<number>();
  @Output() filterPerson = new EventEmitter<Personaje[]>();

  // **** Difirentes formas de declarar de definir un Output() ****

  // @Output() pasardatos: EventEmitter<number> = new EventEmitter();
  // @Output() pasardatos1: EventEmitter<string> = new EventEmitter();
  // @Output() pasardatos2: EventEmitter<[]> = new EventEmitter();
  // @Output() filterPerson1: EventEmitter<Personaje[]> = new EventEmitter();
  // @Output() filterPerson2 = new EventEmitter<Personaje[]>();

  // **** Difirentes formas de declarar de definir un Input() ****

  // @Input() pasarDatosPadre: number = 0;
  // @Input() pasarDatosPadre1: string = "0";
  // @Input() pasarDatosPadre2: boolean = false;
  // @Input() pasarDatosPadre3: [] = [];

  onDelete(index: number): void {
    this.deletePersonaje.emit(index);
  }

  filtrarPersonajes(poderMinimo: number): void {
    const personajesFiltrados = this.personajes.filter(
      (personaje) => personaje.poder >= poderMinimo
    );
    this.filterPerson.emit(personajesFiltrados);
  }
}
