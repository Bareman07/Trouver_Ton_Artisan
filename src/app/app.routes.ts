import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
// Import the components pour les routes

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'artisan/:id', loadComponent: () => import('./pages/artisan/artisan.component').then(m => m.ArtisanComponent) },
  { path: 'contact/:id', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  // Route 404 (toujours en dernier)
  { path: '**', component: NotFoundComponent }
];