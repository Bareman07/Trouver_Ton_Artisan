import { bootstrapApplication } from '@angular/platform-browser'; // Démarre l'application Angular
import { appConfig } from './app/app.config'; // Config de l'app (ex: routing)
import { AppComponent } from './app/app.component'; // Composant racine
import { provideHttpClient } from '@angular/common/http'; // Active HttpClient (requêtes HTTP)


//  Angular utilise une approche "Standalone" depuis Angular 15
//  Cela veut dire qu’on n’a plus besoin d’un fichier `app.module.ts`
//  pour démarrer l’application. Tout se fait ici dans `main.ts`.

// Lancement de l'application en mode "standalone"
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),   // Rend HttpClient dispo partout
    ...appConfig.providers // Ajoute les autres providers (routing, etc.)
  ]
})
.catch(err => console.error('Erreur au démarrage :', err)); // Gestion d'erreur