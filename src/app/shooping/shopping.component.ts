import { Component,signal } from '@angular/core';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';

@Component({
  selector: 'app-shopping',
  imports: [NavComponent, FooterComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css',
})
export class ShoppingComponent {
  protected readonly mostrarElemento = signal(true);
  toggleElemento() {
    this.mostrarElemento.update((valor) => !valor);
  }
}
