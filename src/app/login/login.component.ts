import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';


@Component({
  imports: [NgIf,NavComponent,FooterComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showModal: boolean = false; // Estado inicial del modal

  openModal() {
    this.showModal = true; // Cambia a true → abre el modal
  }

  closeModal() {
    this.showModal = false; // Cambia a false → cierra el modal
  }
}
