import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prueba-input',
  templateUrl: './prueba-input.component.html',
  styleUrl: './prueba-input.component.css'
})
export class PruebaInputComponent {

  // @Input() counter: number = 0; // Recibe el valor inicial del contador desde el padre
  // @Output() counterChange = new EventEmitter<number>(); // Notifica al padre cuando el conta
  
  @Output() sumaNumero = new EventEmitter<number>();
  @Input() a: number = 0;
  @Input() b: number = 0;

  // increment() {
  //   this.counter++;
  //   this.counterChange.emit(this.counter); // Envía el nuevo valor al padre
  // }

  // decrement() {
  //   this.counter--;
  //   this.counterChange.emit(this.counter); // Envía el nuevo valor al padre
  // }

  // @Input() value: number | null = null;  // Recibe el valor inicial del input desde el padre
  // @Output() valueCha = new EventEmitter<number>(); 
  // private previousValue: number = 0; 

  // onInputChange(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const newValue = inputElement.value.trim() === '' ? 0 : Number(inputElement.value);  // Si está vacío, asignamos 0

  //   // Calculamos la diferencia entre el nuevo valor y el valor anterior
  //   const difference = newValue - this.previousValue;
    
  //   this.value = newValue;
  //   this.previousValue = newValue;  // Actualizamos el valor anterior

  //   this.valueCha.emit(difference);  // Enviamos la diferencia (que puede ser negativa, cero o positiva)
  // }


  sumaHijoPadre(){

    const resultado = this.a + this.b;

    this.sumaNumero.emit(resultado)

  }
}
