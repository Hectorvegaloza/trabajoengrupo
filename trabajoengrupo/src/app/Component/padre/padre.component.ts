import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})

export class PadreComponent {
  
  numerofinal:number=0;
  
 enviandoduplicado(value: number){
      this.numerofinal = value*2;
  }

  
  
}
