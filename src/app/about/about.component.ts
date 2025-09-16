import { Component } from '@angular/core';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NavComponent, FooterComponent, CurrencyPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  frutas = () => [
    {
      nombre: 'La Morelia',
      precio: 2500,
      url: 'https://inmersso.co/wp-content/uploads/2023/11/CAFE-LA-MORELIA_0003_1-1.jpg',
      tipo: 'dulce',
    },
    {
      nombre: 'San Alberto',
      precio: 1200,
      url: 'https://comprocafedecolombia.com/wp-content//uploads/2020/11/Mesa-de-trabajo-79-1.jpg',
      tipo: 'ácida',
    },
    {
      nombre: 'Coffee Shop',
      precio: 2500,
      url: 'https://comprocafedecolombia.com/wp-content//uploads/2021/05/coffee-shop-1.jpg',
      tipo: 'dulce',
    },
    {
      nombre: 'La Vereda',
      precio: 1200,
      url: 'https://tucafeartesanal.com/wp-content/uploads/2025/03/QUINDIO.jpg',
      tipo: 'ácida',
    },
    {
      nombre: 'Recuá Café',
      precio: 2500,
      url: 'https://recuacolombiancoffee.com/wp-content/uploads/2019/06/RECUA-CAFE%CC%81-ORIGEN-FILANDIA-QUINDIO-e1564174064666.jpg',
      tipo: 'dulce',
    },
    {
      nombre: 'La Fortuna',
      precio: 1200,
      url: 'https://cdnx.jumpseller.com/cafes-especiales-del-quindio/image/60488020/thumb/306/306?1740365613',
      tipo: 'ácida',
    },
  
  ];

  agregarAlCarrito(fruta: any) {
    console.log('Añadido:', fruta);
  }
}
