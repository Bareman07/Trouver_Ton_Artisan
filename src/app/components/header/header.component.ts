import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Permet d'utiliser routerLink dans le template

// Définition du composant Header
@Component({
  selector: 'app-header', // Nom du composant utilisé dans les templates (ex: <app-header></app-header>)
  standalone: true, // Indique que ce composant est autonome et ne dépend pas d'un module global
  imports: [RouterModule], // Importation du RouterModule pour permettre l'utilisation de routerLink
  templateUrl: './header.component.html', // Fichier HTML associé au composant
  styleUrls: ['./header.component.scss'] // Fichier SCSS associé au composant
})

export class HeaderComponent {

}
