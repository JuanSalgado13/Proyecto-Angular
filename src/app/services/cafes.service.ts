import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  url: string;
  tipo: string;
  region: string;
}

@Injectable({
  providedIn: 'root',
})
export class CafesService {
  private apiUrl = 'http://localhost:3000/cafes'; // JSON Server endpoint

  constructor(private http: HttpClient) {}

  // Traer todos los cafés
  getAllCafes(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Filtrar cafés por región
  getProductosPorRegion(region: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}?region=${region}`);
  }

  // Buscar café por ID
  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
}
