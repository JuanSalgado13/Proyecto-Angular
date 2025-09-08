import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ayuda',
  imports: [NgIf,NavComponent, FooterComponent],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css',
})
export class AyudaComponent implements OnInit {
  precioCafe: number | null = null;
  ultimaActualizacion: string = '';

  ngOnInit(): void {
    // Llamar inmediatamente al cargar
    this.obtenerPrecioCafe();

    // Volver a consultar cada 60 segundos
    setInterval(() => {
      this.obtenerPrecioCafe();
    }, 60000);
  }

  async obtenerPrecioCafe() {
    try {
      // ⚠️ Este endpoint es de ejemplo, debes reemplazarlo con una API real de café
      const response = await fetch(
        'https://es.investing.com/commodities/us-coffee-c'
      );
      const data = await response.json();

      this.precioCafe = data.price; // depende de cómo venga la respuesta
      this.ultimaActualizacion = new Date().toLocaleTimeString();
    } catch (error) {
      console.error('Error al obtener el precio del café:', error);
    }
  }
}