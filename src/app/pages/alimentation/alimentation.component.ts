import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router';
import { Artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-alimentation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.scss']
})
export class AlimentationComponent implements OnInit {
  artisansAlimentation: Artisan[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisansAlimentation = data.filter((a: Artisan) =>
        a.categorie === 'alimentation' &&
        a.nom &&
        a.specialite &&
        a.ville &&
        a.description &&
        a.images?.photo
      );
    });
  }
}
