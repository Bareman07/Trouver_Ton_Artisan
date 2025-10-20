import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-accueil',
  imports: [NgFor],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
artisansGroupe1 = [
  { nom: 'Artisan 1', specialite: 'Menuiserie', image: './assets/artisan1.jpg', description: '...'},
  { nom: 'Artisan 2', specialite: 'Peinture', image: 'assets/artisan2.jpg', description: '...'},
  { nom: 'Artisan 3', specialite: 'Plomberie', image: 'assets/artisan3.jpg', description: '...' }
];
artisansGroupe2 = [
  { nom: 'Artisan 4', specialite: 'Electricité', image: 'assets/artisan4.jpg', description: '...' },
  { nom: 'Artisan 5', specialite: 'Jardinage', image: 'assets/artisan5.jpg', description: '...' },
  { nom: 'Artisan 6', specialite: 'Maçonnerie', image: 'assets/artisan6.jpg', description: '...' }
];
}
