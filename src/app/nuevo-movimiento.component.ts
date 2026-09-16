import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-movimiento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-movimiento.component.html'
})
export class NuevoMovimientoComponent {

  saldo = input<number>(0);

  registrarMovimiento = output<{
    tipo: string;
    monto: number;
  }>();

  monto = 0;
  tipo = 'Recarga';

  get gastoInvalido(): boolean {
    return this.tipo === 'Gasto'
      && this.monto > this.saldo();
  }

  get montoNegativo(): boolean {
    return this.monto < 0;
  }

  registrar() {

    this.registrarMovimiento.emit({
      tipo: this.tipo,
      monto: this.monto
    });

    this.monto = 0;
    this.tipo = 'Recarga';
  }
}