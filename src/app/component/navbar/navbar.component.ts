import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  li_1="Inicio";
  li_2="Categoria";
  li_3="Oferta";
  li_4="Ayuda";
}
