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
  cafes: Producto[] = [];
  cafesFiltrados: Producto[] = [];
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
  getEstilosPorRegion(cafe: any) {
    switch (cafe.region) {
      case 'Quindio':
        return {
          'border-color': 'brown',
          'background-color': '#fff4e6',
          color: '#5d4037',
          'box-shadow': '0 4px 12px rgba(93,64,55,0.3)',
          'font-weight': 'bold',
        };
      case 'Risaralda':
        return {
          'border-color': '#00695c',
          'background-color': '#e0f2f1',
          color: '#004d40',
          'box-shadow': '0 4px 12px rgba(0,105,92,0.3)',
        };
      case 'Caldas':
        return {
          'border-color': '#1e88e5',
          'background-color': '#e3f2fd',
          color: '#0d47a1',
          'box-shadow': '0 4px 12px rgba(30,136,229,0.3)',
        };
      case 'Antioquia':
        return {
          'border-color': '#8e24aa',
          'background-color': '#f3e5f5',
          color: '#4a148c',
          'box-shadow': '0 4px 12px rgba(142,36,170,0.3)',
        };
      default:
        return {
          'border-color': '#ccc',
          'background-color': '#fff',
          color: '#333',
          'box-shadow': '0 2px 6px rgba(0,0,0,0.1)',
        };
    }
  }
}
