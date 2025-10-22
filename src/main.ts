import { bootstrapApplication } from '@angular/platform-browser'; // Importation de la fonction principale qui démarre ton application Angular
import { appConfig } from './app/app.config';// Importation de la configuration de routage (si tu utilises Angular Router)
import { AppComponent } from './app/app.component';// Importation du composant racine (le premier qui s’affiche au démarrage)
import { provideHttpClient } from '@angular/common/http'; // Importation pour permettre les requêtes HTTP dans ton app

//  Angular utilise une approche "Standalone" depuis Angular 15
//  Cela veut dire qu’on n’a plus besoin d’un fichier `app.module.ts`
//  pour démarrer l’application. Tout se fait ici dans `main.ts`.

//  Fonction principale : démarre l’application Angular
bootstrapApplication(AppComponent, {
  // Ici, on peut ajouter des "providers" (services disponibles partout)
  // comme le HttpClient pour les requêtes HTTP.
  providers: [
    provideHttpClient(), // Rend le HttpClient utilisable dans tout le projet
    ...appConfig.providers // Ajoute d’autres services configurés (comme le routing)
  ]
})
// Cette méthode renvoie une "Promise", donc on peut gérer les erreurs
.catch(err => console.error('Erreur lors du démarrage de l’application :', err));