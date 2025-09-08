import { Component } from '@angular/core';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';

@Component({
  selector: 'app-ayuda',
  imports: [NavComponent,FooterComponent],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent {

}
