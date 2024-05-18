import { Component,Output, input, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})


export class HijoComponent {
  numero: number = 0;

  manejarClick(){
    this.numero++;
  }
  manejoClick(){
    this.numero--;
  }
  reset(){
    this.numero=0;
  }




 @Output() enviar: EventEmitter<number> = new EventEmitter <number>();

enviandoduplicado(){  
  this.enviar.emit(this.numero);
/*   console.log("enviado"); */
} 

}

