import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Nécessaire pour *ngFor, *ngIf
import { DataService } from '../../services/data.service'; // Import du service
import { RouterModule } from '@angular/router';
import { Artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-batiment',
  standalone: true, // Indique que ce composant n’a pas besoin d’un module
  imports: [CommonModule, RouterModule], // Pour les directives Angular comme *ngFor
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.scss']
})
export class BatimentComponent implements OnInit {
  artisansBatiment: Artisan[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // On récupère les données JSON à l'initialisation du composant
    this.dataService.getData().subscribe(data => {
      // On filtre les artisans de la catégorie "batiment"
       this.artisansBatiment = data.filter((a: Artisan) =>
      a.categorie === 'batiment' &&
      a.nom &&
      a.specialite &&
      a.ville &&
      a.description &&
      a.images?.photo);
    });
  }
}
