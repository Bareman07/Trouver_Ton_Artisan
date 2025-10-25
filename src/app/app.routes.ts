import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { AccessibiliteComponent } from './pages/accessibilite/accessibilite.component';
import { DonneesPersonnellesComponent } from './pages/donnees-personnelles/donnees-personnelles.component';
import { BatimentComponent } from './pages/batiment/batiment.component';
import { ServicesComponent } from './pages/services/services.component';
import { FabricationComponent } from './pages/fabrication/fabrication.component';
import { AlimentationComponent } from './pages/alimentation/alimentation.component';
// Import the components pour les routes

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'batiment', component: BatimentComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'accessibilite', component: AccessibiliteComponent },
  { path: 'donnees-personnelles', component: DonneesPersonnellesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'fabrication', component: FabricationComponent },
  { path: 'alimentation', component: AlimentationComponent },
  { path: 'artisan/:id', loadComponent: () => import('./pages/artisan/artisan.component').then(m => m.ArtisanComponent) },
  { path: 'contact/:id', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  // Route 404 (toujours en dernier)
  { path: '**', component: NotFoundComponent }
];