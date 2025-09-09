import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    HttpClientModule,
    NavComponent,
    FooterComponent,
  ],
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css'],
})
export class AyudaComponent implements OnInit {
  precioCafe: number | null = null;
  ultimaActualizacion: string = '';
  cargando = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerPrecioCafe();
    setInterval(() => this.obtenerPrecioCafe(), 60000);
  }

  obtenerPrecioCafe(): void {
    this.cargando = true;
    this.error = null;

    const url = 'https://api.api-ninjas.com/v1/commodityprice?name=gold';
    const headers = new HttpHeaders({
      'X-Api-Key': 'o7YvGPgggeppMNy3ynHjUQ==3wwi5I4hqOrvrcgj',
    });

    this.http.get<any>(url, { headers }).subscribe({
      next: (data) => {
        this.precioCafe = data?.price ?? null;
        this.ultimaActualizacion = new Date().toLocaleTimeString();
        this.cargando = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.error =
          err.status === 401 || err.status === 403
            ? 'API key inválida o sin autorización'
            : 'Error al obtener el precio del café';
        this.cargando = false;
      },
    });
  }
}
