import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router';
import { Artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-fabrication',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})
export class FabricationComponent implements OnInit {
  artisansFabrication: Artisan[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisansFabrication = data.filter((a: Artisan) =>
        a.categorie === 'fabrication' &&
        a.nom &&
        a.specialite &&
        a.ville &&
        a.description &&
        a.images?.photo
      );
    });
  }
}
