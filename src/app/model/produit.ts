import { SousCategorie } from './sousCategorie';
export class Produit{
    public code: number;
    public libelle: string;
    public image: string;
    public created_at: Date;
    public updated_at: Date;
    public sousCategorie: SousCategorie;
}