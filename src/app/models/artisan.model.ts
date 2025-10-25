export interface Artisan {
  id: number;
  nom: string;
  note: number;
  specialite: string;
  description: string;
  ville: string;
  categorie: string;
  images: {
    photo: string;
    logo: string;
  };
}
