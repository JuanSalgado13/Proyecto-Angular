import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, CafesService } from '../services/cafes.service';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  cafes: Producto[] = []; // Todos los cafés
  cafesFiltrados: Producto[] = []; // Solo los cafés de la región seleccionada
  regionSeleccionada: string | null = null;

  constructor(private cafeService: CafesService) {}

  ngOnInit(): void {
    this.cafeService.getAllCafes().subscribe((data) => {
      this.cafes = data;
    });
  }

  verMas(region: string) {
    this.regionSeleccionada = region;
    this.cafesFiltrados = this.cafes.filter((c) => c.region === region);
  }
}
