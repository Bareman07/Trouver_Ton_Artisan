// Importation des modules nécessaires
import { Component, OnInit } from '@angular/core'; // Pour créer le composant et utiliser le cycle de vie OnInit
import { ActivatedRoute } from '@angular/router'; // Pour récupérer les paramètres de l’URL
import { DataService } from '../../services/data.service'; // Service pour charger les données JSON
import { CommonModule } from '@angular/common'; // Nécessaire pour *ngFor, *ngIf
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recherche', // Nom du composant utilisé dans les templates
  standalone: true, // Composant autonome (pas besoin d’être déclaré dans un module)
  imports: [CommonModule, RouterModule], //  FormsModule ou CommonModule ici si besoin
  templateUrl: './recherche.component.html', // Fichier HTML associé
  styleUrls: ['./recherche.component.scss'] // Fichier SCSS associé
})
export class RechercheComponent implements OnInit {
  // Mot-clé de recherche récupéré depuis l’URL
  searchTerm = '';

  // Liste des artisans filtrés à afficher
  artisans: any[] = [];

  // Constructeur : injection des services nécessaires
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  // Appelé automatiquement au chargement du composant
  ngOnInit(): void {
    // Récupère le paramètre 'q' dans l’URL (ex: ?q=plombier)
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      this.loadArtisans(); // Charge les artisans filtrés
    });
  }

  // Charge tous les artisans et applique le filtre selon le mot-clé
  loadArtisans() {
    this.dataService.getData().subscribe(data => {
      // Ne garde que les objets de type 'artisan'
      const all = data.filter((item: any) => item.type === 'artisan');

      // Filtre selon le mot-clé (nom, spécialité, ville)
      this.artisans = all.filter((artisan: any) =>
        artisan.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        artisan.specialite.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        artisan.ville.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
}