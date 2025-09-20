import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AboutComponent } from './about/about.component';
import { ShoppingComponent } from './shooping/shopping.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: '**', redirectTo: '' },
];
