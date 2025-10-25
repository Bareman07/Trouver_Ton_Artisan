import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router';
import { Artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  artisansServices: Artisan[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisansServices = data.filter((a: Artisan) =>
        a.categorie === 'services' &&
        a.nom &&
        a.specialite &&
        a.ville &&
        a.description &&
        a.images?.photo
      );
    });
  }
}
