import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-artisan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.scss']
})
export class ArtisanComponent implements OnInit {
  artisan: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getData().subscribe(data => {
      this.artisan = data.find((item: any) => item.type === 'artisan' && item.id === id);
    });
  }
}
