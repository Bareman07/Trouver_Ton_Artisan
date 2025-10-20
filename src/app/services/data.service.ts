import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Le décorateur @Injectable permet d'utiliser ce service partout dans ton app
@Injectable({
  providedIn: 'root' // ça veut dire : "Angular peut le fournir partout"
})
export class DataService {

  // On injecte (on fait passer) HttpClient dans le constructeur
  // pour pouvoir faire des requêtes HTTP (comme lire un fichier JSON)
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer le contenu de ton fichier JSON
  getData(): Observable<any> {
    // On fait une requête GET vers ton fichier JSON
    // assets/... signifie que le fichier est dans ton dossier "src/assets/"
    return this.http.get('assets/data/data.json');
  }
}