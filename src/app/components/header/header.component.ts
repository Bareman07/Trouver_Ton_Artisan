import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Permet d'utiliser routerLink dans le template
import { FormsModule } from '@angular/forms';
//import { ActivatedRoute } from '@angular/router';

// Définition du composant Header
@Component({
  selector: 'app-header', // Nom du composant utilisé dans les templates (ex: <app-header></app-header>)
  standalone: true, // Indique que ce composant est autonome et ne dépend pas d'un module global
  imports: [RouterModule, FormsModule], // Importation du RouterModule pour permettre l'utilisation de routerLink
  templateUrl: './header.component.html', // Fichier HTML associé au composant
  styleUrls: ['./header.component.scss'] // Fichier SCSS associé au composant
})

export class HeaderComponent {
  // Variable utilisée pour savoir si le menu burger est ouvert ou non
  menuOpen = false;

  // Fonction appelée lorsqu'on clique sur le bouton ☰
  // Elle inverse l'état du menu : si fermé => ouvre, si ouvert => ferme
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Propriété liée au champ de recherche dans le formulaire (voir [(ngModel)] dans le HTML)
  searchQuery = '';

  // Le constructeur injecte le service Router pour pouvoir naviguer entre les pages (private route: ActivatedRoute pour le récupérer et filtrer les paramètres d'URL)
  constructor(private router: Router) {}

  // Fonction appelée quand le formulaire est soumis (submit)
  onSearch() {
    // Vérifie si l'utilisateur a bien tapé quelque chose (pas juste des espaces)
    if (this.searchQuery.trim()) {
      // Redirige vers la page /recherche avec le mot-clé dans l'URL comme paramètre (q=motclé) .trim() : supprime les espaces avant/après le mot-clé
      this.router.navigate(['/recherche'], { queryParams: { q: this.searchQuery.trim() } });

      // Vide le champ de recherche après la soumission
      this.searchQuery = '';
    }
  }
}