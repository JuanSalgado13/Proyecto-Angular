import { Component } from '@angular/core';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  irAPagina() {
    this.router.navigate(['https://ico.org/es/']); // Navega a la página de contacto
  }
}

