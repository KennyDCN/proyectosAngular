import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-milo',
  templateUrl: './milo.component.html',
  styleUrl: './milo.component.css'
})
export class MiloComponent {


  fecha: string = ''; // Esta variable es la que actualizarás para mostrar la fecha

  mostrar() {
    this.fecha = new Date().toString(); // Actualiza la fecha con la fecha actual
  }

}


