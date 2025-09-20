import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { Producto, CafesService } from '../services/cafes.service';
import { CommonModule, CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-shopping',
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css',
})
export class ShoppingComponent {
 
}
