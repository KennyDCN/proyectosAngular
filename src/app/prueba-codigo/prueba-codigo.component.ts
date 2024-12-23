import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-codigo',
  templateUrl: './prueba-codigo.component.html',
  styleUrl: './prueba-codigo.component.css'
})
export class PruebaCodigoComponent {

  // contador: number = 0;

  // updateCounter(newValue: number) {
  //   this.contador = newValue; // Actualiza el contador cuando el hijo envía un evento
  // }

  // resetCounter() {
  //   this.contador = 0; // Reinicia el contador al presionar el botón
  // }

  // total  = 0;  // Variable para almacenar el total
  // totalNuevo =0;

  // // Método que recibe el nuevo valor del input y suma al total
  // updateTotal(difference: number) {
  //   this.total += difference;  // Suma el nuevo valor al total
  // }

//   mostrarTotal(resultado : number){
//  this.totalNuevo = resultado
//  console.log("REESULTADO", this.totalNuevo)
//   }

nombres: string[] = ['Yoli', 'Sergio', 'Milo'];
frutas: string[] = ['manzana', 'plátano', 'naranja'];
coches: string[] = ["Ferrari", "Lamborghini", "Bugatti", "Porche"]
contador: number =0;
ocultarBtn: boolean = false;


constructor() {
  // No llamamos aquí el método mostrarFrutas
}

ngOnInit(): void {
  this.mostrarFrutas();
  this.mostrarCoches();
}

  filas = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 },
    { a: 7, b: 8 }
  ]; // Datos iniciales
  resultados: number[] = []; // Array para almacenar los resultados

  // Maneja el evento de suma del hijo
  actualizarResultado(index: number, resultado: number) {
    this.resultados[index] = resultado;
    console.log(`el resultado de la fila ${index + 1} es:`, resultado);
  }

  cambiarNombre(){
    const nuevosNombres = ['Kenny', 'Yoli', 'Sergio', 'Milo']; // Nuevos nombres disponibles
    this.nombres[this.contador % this.nombres.length] = nuevosNombres[this.contador % nuevosNombres.length];
    this.contador++; // Incrementar contador para rotar
  }

  ocultarBoton() : boolean{
    return this.nombres.length >= 2;
  }

  mostrarFrutas() {
    this.frutas.forEach((fruta) => {
      console.log('La fruta es: ' + fruta);
    });
  }

  mostrarCoches(){

    console.log("Mis coches son:")

    this.coches.forEach((coche) =>
    console.log("Un --> " + coche ))


  }

}



