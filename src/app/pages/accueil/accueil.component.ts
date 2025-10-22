import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Nécessaire pour *ngFor, *ngIf
import { DataService } from '../../services/data.service'; // ✅ Import du service

@Component({
  selector: 'app-accueil',
  standalone: true, // ✅ Indique que ce composant n’a pas besoin d’un module
  imports: [CommonModule], // Pour les directives Angular comme *ngFor
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  // Ces tableaux vont contenir les artisans depuis ton JSON
  artisansGroupe1: any[] = [];
  artisansGroupe2: any[] = [];

  // Injection du service dans le constructeur
  constructor(private dataService: DataService) {}

  // ngOnInit est exécuté automatiquement à l’ouverture du composant
  ngOnInit(): void {
    // On appelle ton DataService pour récupérer les données du JSON
    this.dataService.getData().subscribe({
      next: (data) => {
        // On filtre uniquement les artisans
        const artisans = data.filter((item: any) => item.type === 'artisan');

        // Exemple de séparation : les 3 premiers dans groupe 1, les autres dans groupe 2
        this.artisansGroupe1 = artisans.slice(0, 3);
        this.artisansGroupe2 = artisans.slice(3, 6);
      },
      error: (err) => {
        console.error('Erreur lors du chargement du JSON :', err);
      }
    });
  }
}