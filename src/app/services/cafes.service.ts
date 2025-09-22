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
  private apiUrl = 'http://localhost:3000/cafes'; 

  constructor(private http: HttpClient) {}

  
  getAllCafes(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  
  getProductosPorRegion(region: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}?region=${region}`);
  }

  
  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
}
