import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router'; // Pour utiliser [routerLink]

@Component({
  selector: 'app-artisan',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.scss']
})
export class ArtisanComponent implements OnInit {
  artisan: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
  // Récupère l'ID passé dans l'URL (ex: /artisan/2 → "2")
  // On le convertit en nombre car dans le JSON les id sont numériques
  const id = Number(this.route.snapshot.paramMap.get('id'));

  // Appel du service qui fournit les données (JSON des artisans + images)
  this.dataService.getData().subscribe(data => {
    
    // Recherche dans le tableau l'artisan qui correspond à l'ID
    // On filtre aussi pour être sûr que ce soit bien un "artisan"
    this.artisan = data.find((item: any) =>
      item.type === 'artisan' && item.id === id);
    });
  }
}
