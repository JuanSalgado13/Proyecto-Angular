import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../shared/component/nav/nav.component';


@Component({
  imports: [NgIf, NavComponent ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  

  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
