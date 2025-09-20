import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  imageUrl =
    'https://img.freepik.com/vector-premium/cafe-llevar-ilustracion-vectorial-plana_351987-781.jpg';
}
