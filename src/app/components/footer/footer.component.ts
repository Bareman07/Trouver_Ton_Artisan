import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Permet d'utiliser routerLink dans le template

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule], // Importation du RouterModule pour permettre l'utilisation de routerLink
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
