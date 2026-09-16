import { Component } from '@angular/core';
import { NuevoMovimientoComponent } from './nuevo-movimiento.component';

interface Movimiento {
  tipo: string;
  monto: number;
}

@Component({
  selector: 'app-billetera',
  standalone: true,
  imports: [NuevoMovimientoComponent],
  templateUrl: './billetera.component.html'
})
export class BilleteraComponent {

  saldo = 250;

  movimientos: Movimiento[] = [];

  agregarMovimiento(mov: Movimiento) {

    if (mov.tipo === 'Recarga') {
      this.saldo += mov.monto;
    } else {
      this.saldo -= mov.monto;
    }

    this.movimientos.unshift(mov);
  }
}