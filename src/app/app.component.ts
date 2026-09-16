import { Component } from '@angular/core';
import { BilleteraComponent } from './billetera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BilleteraComponent],
  template: `<app-billetera></app-billetera>`
})
export class AppComponent {}