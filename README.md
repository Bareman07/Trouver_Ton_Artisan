# TrouveTonArtisan

**TrouveTonArtisan** est une application web développée avec **Angular**.  
Elle met en avant des artisans, leurs spécialités et leurs coordonnées, afin de faciliter la recherche et la mise en relation.  

[Voir la démo en ligne](https://bareman07.github.io/Trouver_Ton_Artisan/)

---

## Fonctionnalités
- Classement du **Top 3 artisans**
- Recherche d'artisans par spécialité et localisation
- Fiche descriptive de l'artisan
- Interface **responsive** (mobile, tablette, desktop)
- Navigation fluide via **Angular Router**
- Déploiement sécurisé sur **GitHub Pages**

---

## Installation & Lancement
```bash
git clone https://github.com/Bareman07/Trouver_Ton_Artisan.git
cd Trouver_Ton_Artisan
npm install
ng serve
```

Accessible sur http://localhost:4200
```
Build & Déploiement
ng build --configuration production --base-href=/Trouver_Ton_Artisan/
ng deploy --base-href=/Trouver_Ton_Artisan/
```
## Sécurité mise en place


|Sécurité                              |	                                     |
|--------------------------------------|---------------------------------------|
|HTTPS (GitHub Pages)                  |	Protection des échanges              |
|Encodage Angular                      | Protection contre XSS                 |
|Séparation du code source et du build | Pas d’exposition du code sensible     |
|Hashing des fichiers                  |	Évite le cache obsolète              |
|404.html	                             | Redirection propre des routes Angular |
|Dépendances à jour	                   | Correction des failles connues        |

## Stack technique
- Angular

- Bootstrap

- SCSS

- GitHub Pages

- EmailJs

## Ressources utiles
- [Docucmentation Angular](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [Déploiement GitHub Pages](https://angular.dev/tools/deployment/github-pages)
