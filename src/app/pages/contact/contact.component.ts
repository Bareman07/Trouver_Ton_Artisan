// Importation des modules nécessaires
import { Component, OnInit } from '@angular/core'; // Pour créer le composant et utiliser le cycle de vie OnInit
import { ActivatedRoute } from '@angular/router'; // Pour récupérer l’ID de l’artisan depuis l’URL
import { CommonModule } from '@angular/common'; // Pour les directives Angular de base (*ngIf, etc.)
import { FormsModule } from '@angular/forms'; // Pour le binding [(ngModel)] dans le formulaire
import { DataService } from '../../services/data.service'; // Service pour charger les données JSON

@Component({
  selector: 'app-contact', // Nom du composant
  standalone: true, // Composant autonome
  imports: [CommonModule, FormsModule], // Modules nécessaires pour le template
  templateUrl: './contact.component.html', // Fichier HTML associé
  styleUrls: ['./contact.component.scss'] // Fichier SCSS associé
})
export class ContactComponent implements OnInit {
  // Artisan concerné par le formulaire
  artisan: any;

  // Indicateur d’envoi de message
  messageSent = false;

  // Modèle du formulaire
  form = {
    nom: '',
    email: '',
    message: ''
  };

  // Injection des services nécessaires
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  // Chargement initial du composant
  ngOnInit(): void {
    // Récupère l’ID depuis l’URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Charge les données et récupère l’artisan correspondant
    this.dataService.getData().subscribe(data => {
      this.artisan = data.find((item: any) => item.type === 'artisan' && item.id === id);
    });
  }

  // Fonction appelée lors de l’envoi du formulaire
  envoyerMessage() {
    this.messageSent = true; // Affiche le message de confirmation
    console.log('Message envoyé :', this.form); // Simule l’envoi (à remplacer par un backend plus tard)
  }
}
